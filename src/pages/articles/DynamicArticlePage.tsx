
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
      const { error } = await supabase
        .from('sb_home_page_leads')
        .insert({
          email: email,
          source: `article_${slug}`,
          ip_address: null,
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Error saving email:', error);
        toast.error('Det uppstod ett fel. Försök igen.');
        return;
      }

      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel. Försök igen.');
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

  const getRichContent = (article: any) => {
    // Use database content if available and substantial
    if (article?.content && article.content.length > 100) {
      return <div dangerouslySetInnerHTML={{ __html: article.content }} />;
    }

    // Fallback content for articles without rich content in database
    return (
      <div>
        <p className="lead text-green-700 font-text mb-6">
          Denna artikel innehåller värdefull information om {article?.category?.toLowerCase()}.
        </p>
        
        <p className="mb-4">
          Vi på Sommarboosten har samlat de bästa tipsen och strategierna för att hjälpa dig att nå dina mål.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8 rounded-lg">
          <h3 className="text-xl font-bold text-orange-800 mb-3">Viktiga punkter:</h3>
          <p className="text-orange-700 mb-0">
            Denna artikel är del av vårt omfattande innehåll som hjälper familjer att leva hälsosamt och aktivt.
          </p>
        </div>

        <p className="mb-4">
          För mer detaljerad information och personliga råd, ta gärna vårt quiz eller läs mer om Sommarboosten.
        </p>
      </div>
    );
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Header */}
      <header className="py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium mb-6">
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
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-3 sm:px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={article.image_url} 
              alt={article.title}
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
              {getRichContent(article)}
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-orange-200 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-orange-800 text-center">
              Få fler tips inom {article.category.toLowerCase()}! 🌟
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              Få praktiska råd och inspiration direkt i din inkorg.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-orange-300 bg-white text-green-800"
                required
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="bg-orange-600 text-white hover:bg-orange-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Skickar...' : 'Skicka tips! 📧'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-green-800 font-display">
            Redo att ta nästa steg? 🌟
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-xl font-semibold">
                Läs mer om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicArticlePage;
