
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Heart, Users, Zap, Brain, Calendar } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useArticleBySlug } from '@/hooks/useArticles';
import { HeartLoader } from '@/components/HeartLoader';

const DynamicArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useArticleBySlug(slug || '');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      console.log('Attempting to save email:', email, 'for article:', slug);
      
      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .insert({
          email: email,
          source: `article_${slug}`,
          ip_address: null,
          user_agent: navigator.userAgent,
        })
        .select()
        .single();

      if (error) {
        console.error('Supabase error details:', error);
        
        // Visa specifik felmeddelande baserat på feltyp
        if (error.code === '42501') {
          toast.error('Tekniskt fel med databas-behörigheter. Vi arbetar på att lösa detta.');
        } else if (error.code === '23505') {
          toast.error('Den e-postadressen är redan registrerad.');
        } else {
          toast.error('Det uppstod ett fel. Försök igen om en stund.');
        }
        return;
      }

      console.log('Email saved successfully:', data);
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Det uppstod ett oväntat fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'Zap': Zap,
      'Heart': Heart,
      'Brain': Brain,
      'Users': Users,
      'Calendar': Calendar
    };
    return iconMap[iconName] || Heart;
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral':
        return 'text-coral';
      case 'purple':
        return 'text-purple';
      case 'indigo':
        return 'text-indigo-600';
      default:
        return 'text-green-600';
    }
  };

  const getThemeColors = (themeColor?: string) => {
    switch (themeColor) {
      case 'coral':
        return {
          primary: 'from-coral-50 via-white to-coral-50',
          accent: 'bg-coral-50 border-coral-200',
          button: 'bg-coral-600 hover:bg-coral-700',
          text: 'text-coral-800',
          border: 'border-coral-300'
        };
      case 'purple':
        return {
          primary: 'from-purple-50 via-white to-purple-50',
          accent: 'bg-purple-50 border-purple-200',
          button: 'bg-purple-600 hover:bg-purple-700',
          text: 'text-purple-800',
          border: 'border-purple-300'
        };
      case 'blue':
        return {
          primary: 'from-blue-50 via-white to-blue-50',
          accent: 'bg-blue-50 border-blue-200',
          button: 'bg-blue-600 hover:bg-blue-700',
          text: 'text-blue-800',
          border: 'border-blue-300'
        };
      default:
        return {
          primary: 'from-green-50 via-white to-green-50',
          accent: 'bg-green-50 border-green-200',
          button: 'bg-green-600 hover:bg-green-700',
          text: 'text-green-800',
          border: 'border-green-300'
        };
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <HeartLoader />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        <header className="py-8 px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/artiklar" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tillbaka till artiklar
            </Link>
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold text-primary mb-4">Artikel inte hittad</h1>
              <p className="text-green-700 mb-8">Tyvärr kunde vi inte hitta den artikel du söker efter.</p>
              <Link to="/artiklar">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Tillbaka till artiklar
                </Button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }

  const IconComponent = getIconComponent(article.icon);
  const themeColors = getThemeColors(article.theme_color);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeColors.primary}`}>
      {/* Header */}
      <header className="py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className={`inline-flex items-center ${getColorClasses(article.color)} hover:opacity-80 font-medium mb-6`}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <IconComponent className={`w-6 h-6 ${getColorClasses(article.color)}`} />
            <span className={`font-semibold ${getColorClasses(article.color)}`}>{article.category}</span>
            <span className="text-green-600 text-sm">{article.read_time}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
            {article.title}
          </h1>
          
          {article.lead_text ? (
            <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
              {article.lead_text}
            </p>
          ) : (
            <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-3 sm:px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={article.image_url} 
              alt={article.hero_image_alt || article.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="px-3 sm:px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div>
                  <p className="lead text-green-700 font-text mb-6">
                    Denna artikel innehåller värdefull information om {article.category.toLowerCase()}.
                  </p>
                  
                  <p className="mb-4">
                    Vi på Sommarboosten har samlat de bästa tipsen och strategierna för att hjälpa dig att nå dina mål.
                  </p>

                  <div className={`${themeColors.accent} border-l-4 ${themeColors.border} p-6 my-8 rounded-lg`}>
                    <h3 className={`text-xl font-bold ${themeColors.text} mb-3`}>Viktiga punkter:</h3>
                    <p className={`${themeColors.text} mb-0`}>
                      Denna artikel är del av vårt omfattande innehåll som hjälper familjer att leva hälsosamt och aktivt.
                    </p>
                  </div>

                  <p className="mb-4">
                    För mer detaljerad information och personliga råd, ta gärna vårt quiz eller läs mer om Sommarboosten.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup with custom content */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white ${themeColors.accent} p-6 sm:p-8 rounded-2xl shadow-lg`}>
            <h3 className={`text-xl sm:text-2xl font-black mb-4 font-display ${themeColors.text} text-center`}>
              {article.email_signup_title || `Få fler tips inom ${article.category.toLowerCase()}! 🌟`}
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              {article.email_signup_description || 'Få praktiska råd och inspiration direkt i din inkorg.'}
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 h-12 text-sm sm:text-base rounded-xl border-2 ${themeColors.border} bg-white text-green-800`}
                required
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className={`${themeColors.button} text-white h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Skickar...' : (article.email_signup_button_text || 'Skicka tips! 📧')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA with custom content */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-green-800 font-display">
            {article.cta_title || 'Redo att ta nästa steg? 🌟'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className={`${themeColors.button} text-white px-8 py-3 rounded-xl font-semibold`}>
                {article.cta_primary_button_text || 'Ta vårt quiz'}
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className={`${themeColors.border} ${getColorClasses(article.color)} hover:${themeColors.button.split(' ')[0]} hover:text-white px-8 py-3 rounded-xl font-semibold`}>
                {article.cta_secondary_button_text || 'Läs mer om Sommarboosten'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicArticlePage;
