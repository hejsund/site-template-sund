
import { useState } from 'react';
import { Menu, X, Calendar, Clock, Users, Trophy, ChevronDown, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@/utils/scrollToTop';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const handleLinkClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const menuItems = [
    {
      title: 'Program',
      items: [
        { name: `Sommarboosten ${currentYear}`, href: `/program/${currentYear}`, icon: Trophy },
        { name: 'Tidigare år', href: '/tidigare-ar', icon: Calendar },
      ]
    },
    {
      title: 'Artiklar',
      items: [
        { name: 'Alla artiklar', href: '/artiklar', icon: BookOpen },
        { name: 'Träning & motivation', href: '/artiklar?category=Träning', icon: Trophy },
        { name: 'Kost & njutning', href: '/artiklar?category=Kost', icon: Users },
        { name: 'Vanor & förändringar', href: '/artiklar?category=Vanor', icon: Clock },
      ]
    },
    {
      title: 'Quiz',
      items: [
        { name: 'Hitta din väg', href: '/quiz', icon: Users },
      ]
    },
    {
      title: 'Om oss',
      items: [
        { name: 'Om Sommarboosten', href: '/om-sommarboosten', icon: Users },
        { name: 'Charlotte Steinwig', href: '/om-charlotte', icon: Users },
        { name: 'Så här började det', href: '/sa-har-borjade-det', icon: Clock },
      ]
    }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Updated Logo - Text only */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <span className="font-display font-black text-green-800 text-xl tracking-tight">
              Sommarboosten
            </span>
          </Link>

          {/* Desktop Menu with improved dropdown behavior */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative group"
              >
                <button className="flex items-center space-x-1 text-green-800 hover:text-green-600 font-medium transition-colors">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-green-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {menu.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={handleLinkClick}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link to="/quiz" onClick={handleLinkClick}>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Gör vårt quiz
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-green-800 hover:text-green-600"
            aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-green-200 py-4">
            {menuItems.map((menu) => (
              <div key={menu.title} className="mb-4">
                <h3 className="font-semibold text-green-800 mb-2 px-2">{menu.title}</h3>
                {menu.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-3 px-4 py-2 text-green-800 hover:bg-green-50 rounded-md mx-2"
                    onClick={handleLinkClick}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-2 mt-4">
              <Link to="/quiz" onClick={handleLinkClick}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  Gör vårt quiz
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
