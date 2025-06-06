
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Heart, Brain, Zap, Users, Baby, Calendar } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { CurvedDivider } from '@/components/CurvedDivider';

const ArticlesPage = () => {
  const articles = [
    {
      id: 'stresshantering',
      title: 'Stresshantering i sommartempo',
      excerpt: 'Lär dig hantera sommarens stress och krav på avkoppling. Balansera aktivitet med vila för en semester som verkligen laddar batterierna.',
      category: 'Mental hälsa',
      readTime: '10 min',
      image: '/lovable-uploads/beb03c50-e7f5-4672-9b76-966508f8fcbf.png',
      icon: Zap,
      color: 'indigo'
    },
    {
      id: 'traning',
      title: 'Träning som känns som semester',
      excerpt: 'Upptäck hur du kan hålla dig aktiv utan att träningen känns som en börda under sommaren.',
      category: 'Träning',
      readTime: '8 min',
      image: '/lovable-uploads/0920abf0-6baa-45af-b26d-95485ad33852.png',
      icon: Heart,
      color: 'coral'
    },
    {
      id: 'kost',
      title: 'Sommarmys utan dåligt samvete',
      excerpt: 'Njut av glass, grillkvällar och semester-godis utan att känna att du saboterar dina hälsomål.',
      category: 'Kost',
      readTime: '12 min',
      image: '/lovable-uploads/cb1cd869-a091-4612-b282-44d8a6771b89.png',
      icon: Heart,
      color: 'green'
    },
    {
      id: 'vanor',
      title: 'Hållbara vanor som överlever semestern',
      excerpt: 'Skapa rutiner som funkar året runt, även när livet blir oförutsägbart.',
      category: 'Vanor',
      readTime: '15 min',
      image: '/lovable-uploads/c5f0a385-0490-44d7-abc2-0aede77986a4.png',
      icon: Brain,
      color: 'purple'
    },
    {
      id: 'mental-halsa',
      title: 'Mental hälsa på semester',
      excerpt: 'Varför "total avkoppling" inte alltid är det bästa för din mentala hälsa.',
      category: 'Mental hälsa',
      readTime: '10 min',
      image: '/lovable-uploads/dd9c854e-5f3a-4e94-b87a-5db173a99705.png',
      icon: Brain,
      color: 'indigo'
    },
    {
      id: 'semestertraning',
      title: 'Träning på semester: Enkelt och roligt',
      excerpt: 'Praktiska tips för att hålla kroppen i rörelse utan att stressa.',
      category: 'Träning',
      readTime: '7 min',
      image: '/lovable-uploads/617bd669-c316-43bc-b203-4a8d32228528.png',
      icon: Heart,
      color: 'coral'
    },
    {
      id: 'familjetraning',
      title: 'Familjeträning som alla vill vara med på',
      excerpt: 'Skapa roliga aktiviteter som får hela familjen att röra sig tillsammans.',
      category: 'Träning',
      readTime: '8 min',
      image: '/lovable-uploads/5f369290-4679-4086-8f9a-0d8720545743.png',
      icon: Users,
      color: 'green'
    },
    {
      id: 'efter-40',
      title: 'Träning efter 40: Det här behöver du veta',
      excerpt: 'Hur kroppen förändras och vad du kan göra för att må bra i alla åldrar.',
      category: 'Träning',
      readTime: '12 min',
      image: '/lovable-uploads/393c1d8b-c123-455f-ae12-0005270f9bb2.png',
      icon: Calendar,
      color: 'purple'
    }
  ];

  const categories = [
    { name: 'Alla artiklar', path: '/artiklar', active: true },
    { name: 'Träning', path: '/artiklar/traning' },
    { name: 'Kost', path: '/artiklar/kost' },
    { name: 'Vanor', path: '/artiklar/vanor' },
    { name: 'Mental hälsa', path: '/artiklar/mental-halsa' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral':
        return 'bg-coral/10 text-coral border-coral/20';
      case 'purple':
        return 'bg-purple/10 text-purple border-purple/20';
      case 'indigo':
        return 'bg-indigo-100 text-indigo-600 border-indigo-200';
      default:
        return 'bg-green-100 text-green-600 border-green-200';
    }
  };

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
            {categories.map((category) => (
              <Link key={category.name} to={category.path}>
                <Button
                  variant={category.active ? "default" : "outline"}
                  className={`rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition-all duration-200 ${
                    category.active 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'border-primary/20 text-primary hover:bg-primary/10'
                  }`}
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Articles Grid */}
      <main className="px-3 sm:px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Link key={article.id} to={`/artiklar/${article.id}`}>
                  <article className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      {/* Category badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getColorClasses(article.color)}`}>
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                        {article.category}
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center text-xs sm:text-sm text-green-600 mb-3 font-text">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {article.readTime}
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
                  </article>
                </Link>
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
            <Link to="/quiz">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg">
                Läs om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Curved divider before footer */}
      <CurvedDivider color="text-primary" />

      <Footer />
    </div>
  );
};

export default ArticlesPage;
