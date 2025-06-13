
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { handleEmailSubmit as trackEmailSubmit } from '@/utils/pushToDataLayer';
import { logLead } from '@/utils/facebookEvents';

export const HemligEmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    console.log('Submitting email:', email);

    try {
      // Track email submission with GTM
      await trackEmailSubmit(email);

      // Log Facebook CAPI lead event with specific content name
      await logLead(email, 'hemlig_email_signup', 'Hemlig Page Email Signup');

      // Insert into sb_home_page_leads table
      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .insert([
          {
            email: email.trim(),
            source: 'hemlig_page',
            user_agent: navigator.userAgent,
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error inserting lead:', error);
        toast.error('Det gick inte att skicka din e-post. Försök igen.');
        return;
      }

      console.log('Lead inserted successfully:', data);

      // Show success message
      toast.success('Tack! Vi skickar dig en påminnelse innan erbjudandet löper ut.', {
        duration: 5000,
      });

      // Clear the email field
      setEmail('');

    } catch (error: any) {
      console.error('Error submitting email:', error);
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
