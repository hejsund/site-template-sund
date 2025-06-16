
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
    console.log('Submitting email signup from dynamic article page');
    
    // Warm up listener service before submitting lead
    await warmupListenerService();
    
    try {
      // Track email submission with GTM (email is hashed in this function)
      await trackEmailSubmit(email);

      // Log Facebook CAPI lead event
      await logLead(email, 'dynamic_article_email_signup', `Dynamic Article ${slug} Email Signup`);

      // Save email to Supabase without encryption
      console.log('Attempting to save email from dynamic article...');
      const insertData = {
        email: email,
        source: `dynamic_article_${slug}`,
        ip_address: null,
        user_agent: navigator.userAgent,
      };
      
      console.log('Insert data:', insertData);

      const { error } = await supabase
        .from('sb_home_page_leads')
        .insert(insertData);

      if (error) {
        console.error('Database save failed:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        
        // Still show success since external tracking worked
        toast.success('Tack! Du kommer att höra från oss snart! 🌟');
        setEmail('');
        console.log('Dynamic article email marked as completed despite database error');
        return;
      }

      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    } catch (error) {
      console.error('Unexpected error:', error);
      
      // Prioritize user experience
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
      console.log('Dynamic article email marked as completed after unexpected error');
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
              <span className="text-sm font-medium">Av Sund & Stark Team</span>
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

      {/* Email Signup - Only show if article has email signup fields */}
      {(article.email_signup_title || article.email_signup_description) && (
        <section className="py-16 px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-green-200 p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-green-600" />
                <h3 className="text-xl sm:text-2xl font-black font-display text-green-800">
                  {article.email_signup_title || 'Få våra bästa tips!'}
                </h3>
              </div>
              <p className="text-sm sm:text-base mb-6 text-green-700 font-text">
                {article.email_signup_description || 'Praktiska tips för hälsosam näring utan dåligt samvete.'}
              </p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
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
                  {isSubmitting ? 'Skickar...' : (article.email_signup_button_text || 'Skicka tips! 📧')}
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DynamicArticlePage;
