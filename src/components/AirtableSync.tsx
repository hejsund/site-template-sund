
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, RefreshCw, CheckCircle, AlertCircle, Clock, Zap, WifiOff, Wifi, Timer } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface SyncResult {
  success: boolean;
  message?: string;
  error?: string;
  stats?: {
    totalLeads: number;
    syncedCount: number;
    errorCount: number;
    homePageLeadsCount: number;
    quizLeadsCount: number;
    syncType?: string;
  };
}

interface ListenerStatus {
  isConnected: boolean;
  lastHeartbeat: string;
  uptime: number;
  reconnectAttempts?: number;
  maxReconnectAttempts?: number;
  backupCronActive?: boolean;
}

export const AirtableSync = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listenerStatus, setListenerStatus] = useState<ListenerStatus | null>(null);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null);

  // Check listener status on component mount and periodically
  useEffect(() => {
    checkListenerStatus();
    
    // Check status every 60 seconds (less frequent)
    const statusInterval = setInterval(() => {
      checkListenerStatus();
    }, 60000);
    
    return () => clearInterval(statusInterval);
  }, []);

  const checkListenerStatus = async () => {
    if (isCheckingStatus) return; // Prevent multiple simultaneous checks
    
    setIsCheckingStatus(true);
    try {
      console.log('Checking listener status...');
      const { data, error } = await supabase.functions.invoke('listener-service', {
        body: { action: 'status' }
      });

      if (error) {
        console.error('Error checking listener status:', error);
        setListenerStatus(null);
      } else {
        console.log('Listener status:', data);
        setListenerStatus(data.status);
      }
    } catch (error) {
      console.error('Error checking listener status:', error);
      setListenerStatus(null);
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const startListener = async () => {
    setIsCheckingStatus(true);
    try {
      console.log('Starting listener service...');
      const { data, error } = await supabase.functions.invoke('listener-service', {
        body: { action: 'start' }
      });

      if (error) {
        console.error('Error starting listener:', error);
        toast.error('Failed to start real-time sync');
      } else {
        console.log('Listener started:', data);
        toast.success('Real-time sync started successfully');
        // Update status immediately
        setListenerStatus(data.status);
      }
    } catch (error) {
      console.error('Error starting listener:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const handleSync = async () => {
    setIsLoading(true);
    console.log('Initiating manual Airtable sync...');

    try {
      const { data, error } = await supabase.functions.invoke('sync-to-airtable');

      if (error) {
        console.error('Error calling sync function:', error);
        toast.error('Failed to sync with Airtable');
        setSyncResult({ success: false, error: error.message });
        return;
      }

      console.log('Sync response:', data);
      setSyncResult(data);
      setLastSync(new Date());

      if (data.success) {
        toast.success(data.message || 'Successfully synced with Airtable!');
      } else {
        toast.error(data.error || 'Sync failed');
      }

    } catch (error: any) {
      console.error('Error syncing:', error);
      toast.error('An unexpected error occurred during sync');
      setSyncResult({ success: false, error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString();
    } catch (e) {
      return "Unknown";
    }
  };

  const formatUptime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  };

  const getConnectionStatusInfo = () => {
    if (!listenerStatus) {
      return {
        icon: <WifiOff className="w-3 h-3 mr-1" />,
        text: "Unknown",
        className: "bg-gray-100 text-gray-800 border-gray-300"
      };
    }

    if (listenerStatus.isConnected) {
      return {
        icon: <Wifi className="w-3 h-3 mr-1" />,
        text: "Connected",
        className: "bg-green-100 text-green-800 border-green-300"
      };
    } else {
      return {
        icon: <WifiOff className="w-3 h-3 mr-1" />,
        text: "Disconnected",
        className: "bg-yellow-100 text-yellow-800 border-yellow-300"
      };
    }
  };

  const connectionStatus = getConnectionStatusInfo();

  return (
    <div className="space-y-6">
      {/* Automatic Sync Status - Now Primary */}
      <Card className="w-full max-w-2xl mx-auto border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Timer className="w-5 h-5 text-blue-600" />
            Automatic Sync (Every 5 Minutes)
          </CardTitle>
          <CardDescription className="text-blue-700">
            Primary sync method: Runs automatically every 5 minutes to ensure all leads are synced to Airtable.
            This is reliable and catches any leads that might be missed by real-time sync.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                <Clock className="w-3 h-3 mr-1" />
                Active (5min intervals)
              </Badge>
              <div className="text-sm text-blue-600">
                Next sync: Within 5 minutes of any new lead
              </div>
            </div>
            
            <div className="text-xs text-blue-600 space-y-1">
              <p>• Automatically syncs new leads every 5 minutes</p>
              <p>• Only syncs leads from the last 10 minutes to avoid duplicates</p>
              <p>• Reliable and doesn't depend on real-time connections</p>
              <p>• Acts as primary sync method and backup for real-time sync</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Sync Status - Now Secondary */}
      <Card className="w-full max-w-2xl mx-auto border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Zap className="w-5 h-5 text-green-600" />
            Real-time Sync (Instant)
          </CardTitle>
          <CardDescription className="text-green-700">
            Bonus feature: Attempts to sync leads instantly when they are added. 
            If this fails, the 5-minute automatic sync will catch them.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={connectionStatus.className}>
                  {connectionStatus.icon}
                  {connectionStatus.text}
                </Badge>
                
                {listenerStatus && listenerStatus.isConnected && (
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    <Clock className="w-3 h-3 mr-1" />
                    Uptime: {formatUptime(listenerStatus.uptime)}
                  </Badge>
                )}

                {listenerStatus && !listenerStatus.isConnected && listenerStatus.reconnectAttempts !== undefined && (
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    Retries: {listenerStatus.reconnectAttempts}/{listenerStatus.maxReconnectAttempts || 3}
                  </Badge>
                )}

                {listenerStatus && (
                  <div className="text-xs text-muted-foreground">
                    Last check: {formatTime(listenerStatus.lastHeartbeat)}
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={checkListenerStatus}
                  disabled={isCheckingStatus}
                >
                  {isCheckingStatus ? (
                    <>
                      <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Check Status
                    </>
                  )}
                </Button>
                
                {!listenerStatus?.isConnected && (
                  <Button
                    size="sm"
                    onClick={startListener}
                    disabled={isCheckingStatus}
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    Start Real-time
                  </Button>
                )}
              </div>
            </div>
            
            <div className="text-xs text-green-600 space-y-1">
              <p>• Attempts instant sync when new leads are added</p>
              <p>• Provides faster syncing when working (under 1 minute)</p>
              <p>• If disconnected, 5-minute sync ensures no leads are missed</p>
              <p>• Optional feature - automatic sync is the main method</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manual Sync */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-primary" />
            Manual Sync
          </CardTitle>
          <CardDescription>
            Trigger an immediate sync of all lead data from Supabase to Airtable for testing or immediate needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {lastSync ? `Last manual sync: ${lastSync.toLocaleString()}` : 'No manual sync performed yet'}
              </p>
            </div>
            <Button 
              onClick={handleSync} 
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Syncing...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  Sync Now
                </>
              )}
            </Button>
          </div>

          {syncResult && (
            <div className="space-y-3 p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2">
                {syncResult.success ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="font-medium">
                  {syncResult.success ? 'Manual Sync Successful' : 'Manual Sync Failed'}
                </span>
              </div>
              
              {syncResult.message && (
                <p className="text-sm text-muted-foreground">{syncResult.message}</p>
              )}
              
              {syncResult.error && (
                <p className="text-sm text-red-600">{syncResult.error}</p>
              )}

              {syncResult.stats && (
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">
                    Total Leads: {syncResult.stats.totalLeads}
                  </Badge>
                  <Badge variant="outline">
                    Home Page: {syncResult.stats.homePageLeadsCount}
                  </Badge>
                  <Badge variant="outline">
                    Quiz: {syncResult.stats.quizLeadsCount}
                  </Badge>
                  <Badge variant={syncResult.stats.syncedCount > 0 ? "default" : "secondary"}>
                    Synced: {syncResult.stats.syncedCount}
                  </Badge>
                  {syncResult.stats.errorCount > 0 && (
                    <Badge variant="destructive">
                      Errors: {syncResult.stats.errorCount}
                    </Badge>
                  )}
                  {syncResult.stats.syncType && (
                    <Badge variant="outline">
                      Type: {syncResult.stats.syncType}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="text-xs text-muted-foreground space-y-1">
            <p>• <strong>Primary:</strong> Automatic sync every 5 minutes (reliable)</p>
            <p>• <strong>Bonus:</strong> Real-time sync when possible (instant)</p>
            <p>• <strong>Manual:</strong> On-demand sync for testing and immediate needs</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
