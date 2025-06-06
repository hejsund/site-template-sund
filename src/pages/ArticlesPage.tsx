
import { Link } from 'react-router-dom';
import { Dumbbell, Apple, Target, ArrowRight, Clock, Eye, Trophy, Brain, Plane, Users2, Heart, Zap } from 'lucide-react';
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
      gradient: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
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
      gradient: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600',
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
      gradient: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600',
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
      gradient: 'from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600',
      path: '/artiklar/forst'
    },
    {
      id: 'mental-halsa',
      title: 'Sommarens mentala hälsa',
      description: 'Upptäck kopplingen mellan rörelse och mental hälsa på sommaren. Lär dig hur enkla träningsvanor kan förbättra ditt mående.',
      category: 'Mental hälsa',
      icon: Brain,
      image: '/lovable-uploads/393c1d8b-c123-455f-ae12-0005270f9bb2.png',
      readTime: '9 min',
      gradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      path: '/artiklar/mental-halsa'
    },
    {
      id: 'semestertraning',
      title: 'Semesterträning som funkar',
      description: 'Upptäck hur du håller igång träningen på semester utan stress. Enkla tips för hotellrum, camping och strand.',
      category: 'Semester',
      icon: Plane,
      image: '/lovable-uploads/05193ae1-7600-4f69-b248-989af17f14bc.png',
      readTime: '11 min',
      gradient: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-200',
      iconColor: 'text-teal-600',
      path: '/artiklar/semestertraning'
    },
    {
      id: 'familjetraning',
      title: 'Familjeträning på sommaren',
      description: 'Upptäck roliga sätt att träna tillsammans som familj på sommaren. Tips för olika åldrar som engagerar alla.',
      category: 'Familj',
      icon: Users2,
      image: '/lovable-uploads/2de3bc93-d7a5-4596-ad08-909252fa06c9.png',
      readTime: '13 min',
      gradient: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-200',
      iconColor: 'text-pink-600',
      path: '/artiklar/familjetraning'
    },
    {
      id: 'efter-40',
      title: 'Efter 40 - sommarens möjligheter',
      description: 'Upptäck varför sommaren är perfekt för att börja träna efter 40. Återfinna din styrka i medelåldern.',
      category: 'Medelåldern',
      icon: Heart,
      image: '/lovable-uploads/040754bd-84eb-44e7-977f-3b1a600d8402.png',
      readTime: '14 min',
      gradient: 'from-red-50 to-red-100',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600',
      path: '/artiklar/efter-40'
    },
    {
      id: 'stresshantering',
      title: 'Stresshantering i sommartempo',
      description: 'Lär dig hantera sommarens stress och krav på avkoppling. Balansera aktivitet med vila för en semester som laddar.',
      category: 'Stresshantering',
      icon: Zap,
      image: '/lovable-uploads/beb03c50-e7f5-4672-9b76-966508f8fcbf.png',
      readTime: '10 min',
      gradient: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-200',
      iconColor: 'text-indigo-600',
      path: '/artiklar/stresshantering'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            📖 Kunskap & inspiration
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-green-800 mb-6 font-display leading-tight">
            Artiklar & guider
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed font-text mb-8">
            Djupdyk i ämnen som verkligen gör skillnad för din hälsa och ditt välmående. 
            Beprövade strategier från 15 års erfarenhet av att hjälpa människor må bättre.
          </p>
          <div className="text-3xl opacity-60">💡✨📚</div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article, index) => (
              <Link key={article.id} to={article.path} className="block">
                <article 
                  className={`group bg-gradient-to-br ${article.gradient} border ${article.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:scale-[1.02] animate-fade-in cursor-pointer h-full`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[5/4] mb-6 rounded-xl overflow-hidden shadow-sm">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
                  
                  <h2 className="text-xl sm:text-2xl font-black text-green-800 mb-4 font-display leading-tight group-hover:text-green-700 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-sm sm:text-base text-green-700 mb-6 leading-relaxed font-text">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className={`${article.iconColor} hover:bg-white/70 font-semibold text-sm flex items-center`}>
                      Läs mer
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                    
                    <div className="flex items-center gap-1 text-green-600 text-xs">
                      <Eye className="w-3 h-3" />
                      <span>Populär</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-sm border border-green-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 font-display text-green-800">
              Vill du fördjupa dig mer? 🌟
            </h2>
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 text-green-700 max-w-2xl mx-auto font-text leading-relaxed">
              I Sommarboosten får du inte bara artiklar - du får ett komplett system för att omsätta kunskapen i praktiken.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link to="/quiz">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 font-display w-full sm:w-auto">
                  Ta vårt quiz först 🚀
                </Button>
              </Link>
              <Link to="/om-sommarboosten">
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg font-display w-full sm:w-auto"
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
