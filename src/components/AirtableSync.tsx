
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, RefreshCw, CheckCircle, AlertCircle, Clock } from 'lucide-react';
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

export const AirtableSync = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null);

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

  return (
    <div className="space-y-6">
      {/* Automated Sync Status */}
      <Card className="w-full max-w-2xl mx-auto border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Clock className="w-5 h-5 text-green-600" />
            Automated Sync Active
          </CardTitle>
          <CardDescription className="text-green-700">
            Your lead data is automatically synced to Airtable every hour at the top of the hour (e.g., 1:00, 2:00, 3:00).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              <Clock className="w-3 h-3 mr-1" />
              Next sync: Top of the hour
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
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
            <p>• Automated sync runs every hour and syncs all new and existing leads</p>
            <p>• Manual sync allows you to trigger an immediate sync without waiting</p>
            <p>• Email and source fields are synced from both sb_home_page_leads and sb_quiz_leads tables</p>
            <p>• Duplicate emails are automatically filtered out during sync</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
