
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, RefreshCw, CheckCircle, AlertCircle, Clock, Zap } from 'lucide-react';
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
  };
}

interface ListenerStatus {
  isConnected: boolean;
  lastHeartbeat: string;
  uptime: number;
}

export const AirtableSync = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listenerStatus, setListenerStatus] = useState<ListenerStatus | null>(null);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null);

  // Check listener status on component mount
  useEffect(() => {
    checkListenerStatus();
    
    // Check status every 30 seconds
    const statusInterval = setInterval(() => {
      checkListenerStatus();
    }, 30000);
    
    return () => clearInterval(statusInterval);
  }, []);

  const checkListenerStatus = async () => {
    setIsCheckingStatus(true);
    try {
      const { data, error } = await supabase.functions.invoke('listener-service', {
        method: 'GET',
        query: { action: 'status' }
      });

      if (error) {
        console.error('Error checking listener status:', error);
        setListenerStatus(null);
      } else {
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
      const { data, error } = await supabase.functions.invoke('listener-service', {
        method: 'GET',
        query: { action: 'start' }
      });

      if (error) {
        console.error('Error starting listener:', error);
        toast.error('Failed to start event-driven sync');
      } else {
        toast.success('Event-driven sync started successfully');
        await checkListenerStatus();
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

  return (
    <div className="space-y-6">
      {/* Event-Driven Sync Status */}
      <Card className="w-full max-w-2xl mx-auto border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Zap className="w-5 h-5 text-green-600" />
            Event-Driven Sync
          </CardTitle>
          <CardDescription className="text-green-700">
            New leads are automatically synced to Airtable in real-time when they are added to the database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {listenerStatus ? (
                  <Badge variant="outline" className={`${listenerStatus.isConnected ? 'bg-green-100 text-green-800 border-green-300' : 'bg-yellow-100 text-yellow-800 border-yellow-300'}`}>
                    {listenerStatus.isConnected ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Active
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Inactive
                      </>
                    )}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">
                    <Clock className="w-3 h-3 mr-1" />
                    Checking...
                  </Badge>
                )}
                
                {listenerStatus && listenerStatus.isConnected && (
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                    <Clock className="w-3 h-3 mr-1" />
                    Uptime: {formatUptime(listenerStatus.uptime)}
                  </Badge>
                )}

                {listenerStatus && (
                  <div className="text-xs text-muted-foreground">
                    Last heartbeat: {formatTime(listenerStatus.lastHeartbeat)}
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
                    Start Sync
                  </Button>
                )}
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• New leads are automatically synced when added to either table</p>
              <p>• Database triggers notify the sync service which sends data to Airtable</p>
              <p>• No duplicate checking needed - each lead is synced exactly once</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automated Sync Status */}
      <Card className="w-full max-w-2xl mx-auto border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Clock className="w-5 h-5 text-blue-600" />
            Automated Hourly Sync
          </CardTitle>
          <CardDescription className="text-blue-700">
            Your lead data is also automatically synced to Airtable every hour at the top of the hour as a fallback mechanism.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              <Clock className="w-3 h-3 mr-1" />
              Next sync: Top of the hour
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
              Schedule: Hourly
            </Badge>
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
            Trigger an immediate sync of lead data from Supabase to Airtable. This will transfer email and source information from both home page and quiz leads.
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
                </div>
              )}
            </div>
          )}

          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Three sync methods ensure reliable data transfer</p>
            <p>• Real-time event-driven sync for instant updates</p>
            <p>• Hourly automated sync as a fallback mechanism</p>
            <p>• Manual sync for on-demand control</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
