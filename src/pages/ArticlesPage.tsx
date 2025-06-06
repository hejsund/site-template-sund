
import { Link } from 'react-router-dom';
import { Dumbbell, Apple, Target, ArrowRight, Clock, Eye, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArticlesPage = () => {
  const articles = [
    {
      id: 'traning',
      title: 'Sommarträning som du faktiskt längtar efter',
      description: 'Upptäck hemmaträning som du faktiskt längtar efter. Lär dig hitta träningsglädje utan gym, stress eller perfekt schema.',
      category: 'Träning',
      icon: Dumbbell,
      image: '/lovable-uploads/b421d335-bc7b-4b5b-8e07-edd16ebbb404.png',
      readTime: '8 min',
      gradient: 'from-green-100 via-green-200 to-green-300',
      borderColor: 'border-green-400',
      iconColor: 'text-green-700',
      path: '/artiklar/traning'
    },
    {
      id: 'kost',
      title: 'Sommarmys utan dåligt samvete',
      description: 'Lär dig njuta av glass, grillmys och after work utan skuld. Upptäck hur hälsosam mat och sommarnjutning går hand i hand.',
      category: 'Kost',
      icon: Apple,
      image: '/lovable-uploads/8860c780-4dbb-4b43-b12f-770483b2f79f.png',
      readTime: '7 min',
      gradient: 'from-orange-100 via-coral/30 to-orange-200',
      borderColor: 'border-orange-300',
      iconColor: 'text-orange-700',
      path: '/artiklar/kost'
    },
    {
      id: 'vanor',
      title: 'Vanor som håller hela livet',
      description: 'Sluta börja om. Lär dig bygga vanor som blir automatiska och håller hela livet. Små steg som ger stora förändringar.',
      category: 'Vanor',
      icon: Target,
      image: '/lovable-uploads/c5f0a385-0490-44d7-abc2-0aede77986a4.png',
      readTime: '10 min',
      gradient: 'from-purple-100 via-purple-200 to-purple-300',
      borderColor: 'border-purple-300',
      iconColor: 'text-purple-700',
      path: '/artiklar/vanor'
    },
    {
      id: 'forst',
      title: 'Vi var först med Sommarboosten',
      description: 'Upptäck historien bakom det allra första sommarträningsprogrammet i Sverige. En resa från galen idé till branschstandard.',
      category: 'Historia',
      icon: Trophy,
      image: '/lovable-uploads/f60c9ef3-2146-4344-ba07-04c19de24beb.png',
      readTime: '12 min',
      gradient: 'from-yellow-100 via-yellow-200 to-amber-200',
      borderColor: 'border-yellow-300',
      iconColor: 'text-yellow-700',
      path: '/artiklar/forst'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
            📖 Kunskap & inspiration
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-primary mb-6 font-display leading-tight">
            Artiklar & guider
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed font-text mb-8">
            Djupdyk i ämnen som verkligen gör skillnad för din hälsa och ditt välmående. 
            Beprövade strategier från 15 års erfarenhet av att hjälpa människor må bättre.
          </p>
          <div className="text-3xl opacity-80">💡✨📚</div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {articles.map((article, index) => (
              <article 
                key={article.id}
                className={`group bg-gradient-to-br ${article.gradient} border ${article.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[5/4] mb-6 rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <article.icon className={`w-5 h-5 ${article.iconColor}`} />
                  <span className={`text-sm font-semibold ${article.iconColor}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-black text-primary mb-4 font-display leading-tight group-hover:text-green-700 transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-sm sm:text-base text-green-700 mb-6 leading-relaxed font-text">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link to={article.path}>
                    <Button 
                      variant="ghost" 
                      className={`${article.iconColor} hover:bg-white/50 font-semibold text-sm`}
                    >
                      Läs mer
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <Eye className="w-3 h-3" />
                    <span>Populär</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl border border-green-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 font-display text-primary">
              Vill du fördjupa dig mer? 🌟
            </h2>
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 text-green-700 max-w-2xl mx-auto font-text leading-relaxed">
              I Sommarboosten får du inte bara artiklar - du får ett komplett system för att omsätta kunskapen i praktiken.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link to="/quiz">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-display w-full sm:w-auto">
                  Ta vårt quiz först 🚀
                </Button>
              </Link>
              <Link to="/om-sommarboosten">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg font-display w-full sm:w-auto"
                >
                  Utforska Sommarboosten
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
