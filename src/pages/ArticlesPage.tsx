
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, Heart, Brain, Zap, Users, Baby, Calendar } from 'lucide-react';
import { FooterSection } from '@/components/FooterSection';
import { scrollToTop } from '@/utils/scrollToTop';
import { useArticles } from '@/hooks/useArticles';
import { HeartLoader } from '@/components/HeartLoader';

const ArticlesPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { data: articles, isLoading, error } = useArticles();

  const categories = [
    { name: 'Alla artiklar', path: '/artiklar' },
    { name: 'Träning', path: '/artiklar/traning' },
    { name: 'Kost', path: '/artiklar/kost' },
    { name: 'Vanor', path: '/artiklar/vanor' },
    { name: 'Mental hälsa', path: '/artiklar/mental-halsa' }
  ];

  // Icon mapping
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

  // Filter articles based on current path
  const getFilteredArticles = () => {
    if (!articles) return [];
    
    if (currentPath === '/artiklar') {
      return articles;
    }
    
    const categoryMap: { [key: string]: string } = {
      '/artiklar/traning': 'Träning',
      '/artiklar/kost': 'Kost',
      '/artiklar/vanor': 'Vanor',
      '/artiklar/mental-halsa': 'Mental hälsa'
    };
    
    const selectedCategory = categoryMap[currentPath];
    if (selectedCategory) {
      return articles.filter(article => article.category === selectedCategory);
    }
    
    return articles;
  };

  const filteredArticles = getFilteredArticles();

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral':
        return 'bg-coral text-white border-coral';
      case 'purple':
        return 'bg-purple text-white border-purple';
      case 'indigo':
        return 'bg-indigo-600 text-white border-indigo-600';
      default:
        return 'bg-green-600 text-white border-green-600';
    }
  };

  const handleCategoryClick = () => {
    scrollToTop();
  };

  const handleArticleClick = () => {
    scrollToTop();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <HeartLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Något gick fel</h2>
          <p className="text-green-700">Kunde inte ladda artiklarna. Försök igen senare.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="py-16 sm:py-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-6 font-display">
            Artiklar & Inspiration
          </h1>
          <p className="text-lg sm:text-xl text-green-700 max-w-2xl mx-auto font-text leading-relaxed">
            Praktiska tips och inspiration för ett hälsosamt liv som faktiskt fungerar i verkligheten.
          </p>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="px-3 sm:px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => {
              const isActive = currentPath === category.path;
              return (
                <Link key={category.name} to={category.path} onClick={handleCategoryClick}>
                  <Button
                    variant={isActive ? "default" : "outline"}
                    className={`rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'border-primary/20 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {category.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Articles Grid */}
      <main className="px-3 sm:px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => {
              const IconComponent = getIconComponent(article.icon);
              return (
                <article key={article.id} className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Link 
                    to={`/artiklar/${article.slug}`} 
                    onClick={handleArticleClick}
                    className="block w-full h-full cursor-pointer"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img 
                        src={article.image_url} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ objectPosition: '50% 20%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      {/* Category badge with solid colors */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getColorClasses(article.color)}`}>
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                        {article.category}
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center text-xs sm:text-sm text-green-600 mb-3 font-text">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {article.read_time}
                      </div>
                      
                      <h2 className="text-lg sm:text-xl font-bold text-primary mb-3 font-display group-hover:text-primary/80 transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      
                      <p className="text-sm sm:text-base text-green-700 font-text leading-relaxed line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium text-sm sm:text-base group-hover:text-primary/80 transition-colors">
                        Läs mer 
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 px-3 sm:px-4 bg-gradient-to-r from-primary/5 to-coral/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-primary font-display">
            Redo att börja din resa? 🌟
          </h2>
          <p className="text-base sm:text-lg mb-8 text-green-700 font-text">
            Ta vårt quiz och få personliga rekommendationer för din hälsoresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz" onClick={handleCategoryClick}>
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten" onClick={handleCategoryClick}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg">
                Läs om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use the consolidated FooterSection instead of separate components */}
      <FooterSection />
    </div>
  );
};

export default ArticlesPage;
