
import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { handleEmailSubmit as trackEmailSubmit } from '@/utils/pushToDataLayer';
import { logLead } from '@/utils/facebookEvents';
import { warmupListenerService } from '@/utils/listenerWarmup';

export const HemligEmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Warm up listener service when component mounts (user visits page)
  useEffect(() => {
    warmupListenerService();
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    console.log('=== HEMLIG EMAIL SUBMISSION ===');
    console.log('Email:', email);
    console.log('Source: hemlig_page');
    console.log('Timestamp:', new Date().toISOString());

    try {
      console.log('=== STEP 1: Database Insert (Priority) ===');
      
      // First priority: Save to database - this MUST work
      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .insert({
          email: email.trim(),
          source: 'hemlig_page',
          user_agent: navigator.userAgent,
        })
        .select()
        .single();

      if (error) {
        console.error('=== DATABASE INSERT FAILED ===');
        console.error('Error details:', error);
        
        if (error.message.includes('permission denied')) {
          toast.error('Behörighetsproblem i databasen. Kontakta support.');
        } else if (error.message.includes('duplicate key')) {
          toast.error('E-postadressen är redan registrerad.');
        } else {
          toast.error(`Databasfel: ${error.message}`);
        }
        return;
      }

      console.log('=== DATABASE INSERT SUCCESS ===');
      console.log('Lead saved with ID:', data.id);

      // Now try real-time Airtable sync (non-blocking)
      console.log('=== STEP 2: Real-time Airtable Sync ===');
      try {
        const { data: syncResponse, error: syncError } = await supabase.functions.invoke('realtime-airtable-sync', {
          body: {
            table: 'sb_home_page_leads',
            operation: 'INSERT',
            record_id: data.id,
            email: email.trim()
          }
        });
        
        if (syncError) {
          console.error('Real-time sync failed:', syncError);
        } else {
          console.log('Real-time sync successful:', syncResponse);
        }
      } catch (syncError) {
        console.error('Real-time sync error:', syncError);
      }

      // Track with GTM and Facebook (non-blocking)
      console.log('=== STEP 3: External Tracking ===');
      try {
        await trackEmailSubmit(email);
        await logLead(email, 'hemlig_email_signup', 'Hemlig Page Email Signup');
        console.log('External tracking completed successfully');
      } catch (trackingError) {
        console.error('Tracking error (non-critical):', trackingError);
      }

      // Show success message
      toast.success('Tack! Vi skickar dig en påminnelse innan erbjudandet löper ut.', {
        duration: 5000,
      });

      // Clear the email field
      setEmail('');
      console.log('=== HEMLIG EMAIL SUBMISSION COMPLETED ===');

    } catch (error: any) {
      console.error('=== UNEXPECTED ERROR ===');
      console.error('Error details:', error);
      toast.error('Ett oväntat fel inträffade. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-10 border-2 border-green-300 text-center">
          <Mail className="w-12 h-12 text-green-700 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-green-800 mb-6 font-display">
            Inte redo att köpa än?
          </h2>
          <p className="text-lg text-green-700 mb-8 font-text">
            Inga problem! Lämna din e-post så påminner vi dig innan erbjudandet löper ut.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Din e-postadress"
                className="flex-1 px-4 py-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold w-full sm:w-auto disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Skickar...' : 'Påminn mig'}
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-green-600 mt-4">
            Vi skickar bara påminnelser om detta erbjudande – inget spam!
          </p>
        </div>
      </div>
    </section>
  );
};
