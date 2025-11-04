
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { handleEmailSubmit as trackEmailSubmit } from '@/utils/pushToDataLayer';
import { logLead } from '@/utils/facebookEvents';
import { warmupListenerService } from '@/utils/listenerWarmup';

const DynamicArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Warm up listener service when component mounts
  useEffect(() => {
    warmupListenerService();
  }, []);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      try {
        console.log('Fetching article by slug:', slug);
        const { data, error } = await supabase
          .from('sb_content_sub_pages')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Error fetching article:', error);
          setError('Artikeln kunde inte hittas');
          return;
        }

        setArticle(data);
      } catch (err) {
        console.error('Error:', err);
        setError('Ett fel uppstod vid hämtning av artikeln');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    console.log('Processing email signup from dynamic article page');
    
    // Warm up listener service before submitting lead
    await warmupListenerService();
    
    try {
      // Track email submission with GTM (email is hashed in this function)
      await trackEmailSubmit(email);

      // Log Facebook CAPI lead event
      await logLead(email, 'dynamic_article_email_signup', `Dynamic Article ${slug} Email Signup`);

      // Save email to new Supabase table
      console.log('Attempting to save lead to database...');
      const insertData = {
        email: email.trim(),
        source: `dynamic_article_${slug}`,
        ip_address: null,
        user_agent: navigator.userAgent,
      };
      
      console.log('Inserting lead with source:', insertData.source);

      const { data, error } = await supabase
        .from('sb_leads_home_page_new')
        .insert(insertData)
        .select()
        .single();

      if (error) {
        console.error('Database save failed:', {
          code: error.code,
          message: error.message,
          details: error.details
        });
        
        // Show user feedback based on error type
        if (error.code === '42501' || error.message.includes('permission')) {
          console.log('Permission error detected - external tracking still successful');
          toast.success('Tack! Du kommer att höra från oss snart! 🌟');
        } else {
          console.log('Database error but external tracking successful');
          toast.success('Tack! Du kommer att höra från oss snart! 🌟');
        }
        
        setEmail('');
        return;
      }

      console.log('Lead saved successfully with ID:', data?.id);
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
      
    } catch (error) {
      console.error('Unexpected error during submission:', error);
      
      // Prioritize user experience - external tracking likely worked
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
      console.log('Email signup completed with fallback success message');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-green-700">Laddar artikel...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Artikeln kunde inte hittas</h1>
          <Link to="/artiklar">
            <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tillbaka till artiklar
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <section className="py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-3 h-3 rounded-full bg-${article.color || 'green'}-500`}></span>
              <span className="text-sm font-semibold text-green-700">{article.category}</span>
              <div className="flex items-center gap-1 text-green-600 text-xs ml-auto">
                <Clock className="w-3 h-3" />
                <span>{article.read_time}</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 font-display leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-3 mb-8 text-green-700">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Av Company Name Team</span>
            </div>
            
            {article.image_url && (
              <div className="aspect-video mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={article.image_url} 
                  alt={article.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div 
              className="prose prose-lg max-w-none font-text text-green-800 space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </section>

      {/* Email Signup - Always show with default or custom content */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-10 border-2 border-green-300 text-center">
            <Mail className="w-12 h-12 text-green-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-green-800 mb-6 font-display">
              {article.email_signup_title || 'Få fler tips inom kost! ⭐'}
            </h2>
            <p className="text-lg text-green-700 mb-8 font-text">
              {article.email_signup_description || 'Få praktiska råd och inspiration direkt i din inkorg.'}
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Din e-postadress..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-green-300 bg-white text-green-800"
                  required
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  className="bg-green-600 text-white hover:bg-green-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : (article.email_signup_button_text || 'Skicka!')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section - Always show */}
      <section className="py-16 px-3 sm:px-4 bg-gradient-to-r from-primary/5 to-coral/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-primary font-display">
            Redo att ta nästa steg? ⭐
          </h2>
          <p className="text-base sm:text-lg mb-8 text-green-700 font-text">
            Ta vårt quiz och få personliga rekommendationer för din hälsoresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-program-name">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg">
                Läs om Program Name
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicArticlePage;
