import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Loader2, TestTube, CheckCircle, AlertTriangle, Mail, Bug, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface TestResult {
  success: boolean;
  message: string;
  recordId?: string;
  timestamp: string;
  source: string;
  email: string;
}

export const AirtableSyncTest = () => {
  const [testEmail, setTestEmail] = useState('');
  const [isTestingQuiz, setIsTestingQuiz] = useState(false);
  const [isTestingHomePage, setIsTestingHomePage] = useState(false);
  const [isTestingSync, setIsTestingSync] = useState(false);
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  const addTestResult = (result: TestResult) => {
    setTestResults(prev => [result, ...prev].slice(0, 10)); // Keep last 10 results
  };

  const testDirectSync = async () => {
    if (!testEmail) {
      toast.error('Please enter a test email address');
      return;
    }

    setIsTestingSync(true);
    console.log('Testing direct sync for email:', testEmail);

    try {
      // First, create a real test record in the quiz leads table to use for the direct sync test
      const testData = {
        email: testEmail,
        age: '26-35 år',
        gender: 'Direct Sync Test User',
        quiz_score: 10,
        quiz_answers: { 1: 'a', 2: 'b', 3: 'c' },
        recommendation_type: 'direct_sync_test',
        source: 'direct_sync_test',
        user_agent: 'Direct Sync Test - ' + new Date().toISOString()
      };

      console.log('Creating test record for direct sync:', testData);

      const { data: testRecord, error: insertError } = await supabase
        .from('sb_quiz_leads')
        .insert(testData)
        .select()
        .single();

      if (insertError) {
        console.error('Error creating test record for direct sync:', insertError);
        addTestResult({
          success: false,
          message: `Failed to create test record: ${insertError.message}`,
          timestamp: new Date().toISOString(),
          source: 'direct_sync',
          email: testEmail
        });
        toast.error('Failed to create test record for direct sync');
        return;
      }

      console.log('Test record created, now testing direct sync with ID:', testRecord.id);

      // Now call the realtime sync function directly with the real record ID
      const { data, error } = await supabase.functions.invoke('realtime-airtable-sync', {
        body: {
          table: 'sb_quiz_leads',
          operation: 'INSERT',
          record_id: testRecord.id,
          email: testEmail
        }
      });

      if (error) {
        console.error('Error in direct sync test:', error);
        addTestResult({
          success: false,
          message: `Direct sync test failed: ${error.message}`,
          timestamp: new Date().toISOString(),
          source: 'direct_sync',
          email: testEmail
        });
        toast.error('Direct sync test failed');
        return;
      }

      console.log('Direct sync test response:', data);
      
      addTestResult({
        success: data?.success || false,
        message: data?.message || 'Direct sync test completed',
        recordId: testRecord.id,
        timestamp: new Date().toISOString(),
        source: 'direct_sync',
        email: testEmail
      });

      if (data?.success) {
        toast.success('Direct sync test successful! Check Airtable.');
      } else {
        toast.error(`Direct sync failed: ${data?.error || 'Unknown error'}`);
      }
      
    } catch (error: any) {
      console.error('Error in direct sync test:', error);
      addTestResult({
        success: false,
        message: `Direct sync test error: ${error.message}`,
        timestamp: new Date().toISOString(),
        source: 'direct_sync',
        email: testEmail
      });
      toast.error('Direct sync test failed');
    } finally {
      setIsTestingSync(false);
    }
  };

  const testQuizLeadSync = async () => {
    if (!testEmail) {
      toast.error('Please enter a test email address');
      return;
    }

    setIsTestingQuiz(true);
    console.log('Testing quiz lead sync for email:', testEmail);

    try {
      // Insert a test record into sb_quiz_leads
      const testData = {
        email: testEmail,
        age: '26-35 år',
        gender: 'Test User',
        quiz_score: 12,
        quiz_answers: { 1: 'a', 2: 'a', 3: 'a' },
        recommendation_type: 'perfect_match',
        source: 'quiz_test',
        user_agent: 'Airtable Sync Test - ' + new Date().toISOString()
      };

      console.log('Inserting quiz test data:', testData);

      const { data, error } = await supabase
        .from('sb_quiz_leads')
        .insert(testData)
        .select()
        .single();

      if (error) {
        console.error('Error inserting quiz test lead:', error);
        addTestResult({
          success: false,
          message: `Failed to insert quiz test lead: ${error.message}`,
          timestamp: new Date().toISOString(),
          source: 'quiz',
          email: testEmail
        });
        toast.error('Failed to insert quiz test lead');
        return;
      }

      console.log('Quiz test lead inserted successfully:', data);
      
      addTestResult({
        success: true,
        message: 'Quiz lead inserted successfully - Real-time sync should trigger automatically',
        recordId: data.id,
        timestamp: new Date().toISOString(),
        source: 'quiz',
        email: testEmail
      });

      toast.success('Quiz test lead created! Real-time sync should trigger. Check Airtable in 30-60 seconds.');
      
    } catch (error: any) {
      console.error('Error in quiz lead test:', error);
      addTestResult({
        success: false,
        message: `Quiz test error: ${error.message}`,
        timestamp: new Date().toISOString(),
        source: 'quiz',
        email: testEmail
      });
      toast.error('Quiz test failed');
    } finally {
      setIsTestingQuiz(false);
    }
  };

  const testHomePageLeadSync = async () => {
    if (!testEmail) {
      toast.error('Please enter a test email address');
      return;
    }

    setIsTestingHomePage(true);
    console.log('Testing home page lead sync for email:', testEmail);

    try {
      // Insert a test record into sb_home_page_leads
      const testData = {
        email: testEmail,
        source: 'home_page_test',
        user_agent: 'Airtable Sync Test - ' + new Date().toISOString()
      };

      console.log('Inserting home page test data:', testData);

      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .insert(testData)
        .select()
        .single();

      if (error) {
        console.error('Error inserting home page test lead:', error);
        addTestResult({
          success: false,
          message: `Failed to insert home page test lead: ${error.message}`,
          timestamp: new Date().toISOString(),
          source: 'home_page',
          email: testEmail
        });
        toast.error('Failed to insert home page test lead');
        return;
      }

      console.log('Home page test lead inserted successfully:', data);
      
      addTestResult({
        success: true,
        message: 'Home page lead inserted successfully - Real-time sync should trigger automatically',
        recordId: data.id,
        timestamp: new Date().toISOString(),
        source: 'home_page',
        email: testEmail
      });

      toast.success('Home page test lead created! Real-time sync should trigger. Check Airtable in 30-60 seconds.');
      
    } catch (error: any) {
      console.error('Error in home page lead test:', error);
      addTestResult({
        success: false,
        message: `Home page test error: ${error.message}`,
        timestamp: new Date().toISOString(),
        source: 'home_page',
        email: testEmail
      });
      toast.error('Home page test failed');
    } finally {
      setIsTestingHomePage(false);
    }
  };

  const clearResults = () => {
    setTestResults([]);
    toast.success('Test results cleared');
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-2xl mx-auto border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <TestTube className="w-5 h-5 text-blue-600" />
            Airtable Sync Test
          </CardTitle>
          <CardDescription className="text-blue-700">
            Test the email sync functionality for both quiz leads and home page leads.
            Each test will insert a record and trigger the real-time Airtable sync.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="test-email">Test Email Address</Label>
            <Input
              id="test-email"
              type="email"
              placeholder="test@example.com"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              onClick={testQuizLeadSync}
              disabled={isTestingQuiz || !testEmail}
              className="w-full"
              variant="outline"
            >
              {isTestingQuiz ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Testing Quiz...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Test Quiz Lead
                </>
              )}
            </Button>

            <Button
              onClick={testHomePageLeadSync}
              disabled={isTestingHomePage || !testEmail}
              className="w-full"
              variant="outline"
            >
              {isTestingHomePage ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Testing Home Page...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Test Home Page Lead
                </>
              )}
            </Button>

            <Button
              onClick={testDirectSync}
              disabled={isTestingSync || !testEmail}
              className="w-full"
              variant="default"
            >
              {isTestingSync ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Testing Direct...
                </>
              ) : (
                <>
                  <Bug className="w-4 h-4 mr-2" />
                  Test Direct Sync
                </>
              )}
            </Button>
          </div>

          <div className="text-xs text-blue-600 space-y-1">
            <p>• <strong>Quiz/Home Page Lead:</strong> Creates real database entry and triggers real-time sync</p>
            <p>• <strong>Direct Sync:</strong> Creates a test record and calls the sync function directly</p>
            <p>• Real-time sync should trigger automatically within seconds</p>
            <p>• Check your Airtable base for the synced records</p>
            <p>• Use a unique email to easily identify test records</p>
          </div>
        </CardContent>
      </Card>

      {testResults.length > 0 && (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                Test Results
                <Badge variant="outline">{testResults.length}</Badge>
              </CardTitle>
              <Button onClick={clearResults} variant="ghost" size="sm">
                <RefreshCw className="w-3 h-3 mr-1" />
                Clear Results
              </Button>
            </div>
            <CardDescription>
              Recent test results - check Airtable to verify sync completion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {testResults.map((result, index) => (
                <div
                  key={`${result.timestamp}-${index}`}
                  className={`p-3 rounded-lg border ${
                    result.success
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {result.success ? (
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {result.source}
                        </Badge>
                        <span className="text-sm font-medium">{result.email}</span>
                        <span className="text-xs text-gray-500">
                          {new Date(result.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className={`text-sm ${
                        result.success ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {result.message}
                      </p>
                      {result.recordId && (
                        <p className="text-xs text-gray-500 mt-1">
                          Record ID: {result.recordId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="w-full max-w-2xl mx-auto border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-yellow-800">Debugging Tips</CardTitle>
        </CardHeader>
        <CardContent className="text-yellow-700 space-y-2 text-sm">
          <p><strong>1.</strong> Try the "Test Direct Sync" first to verify the sync function works</p>
          <p><strong>2.</strong> If direct sync works but real-time doesn't, the issue is with the listener service</p>
          <p><strong>3.</strong> Check the browser console for any error messages during testing</p>
          <p><strong>4.</strong> Verify your Airtable base ID and table ID are correct in the sync function</p>
          <p><strong>5.</strong> Make sure the SB_AIRTABLE_LOVABLE secret is properly configured</p>
          <p className="text-yellow-600 font-medium">
            ⚠️ Note: These tests create real database entries. Use test emails to avoid confusion.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
