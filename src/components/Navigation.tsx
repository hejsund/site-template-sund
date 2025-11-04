
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
        { name: `Program Name ${currentYear}`, href: `/program/${currentYear}`, icon: Trophy },
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
        { name: 'Om Program Name', href: '/om-program-name', icon: Users },
        { name: 'Instructor Name', href: '/om-charlotte', icon: Users },
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
              Program Name
            </span>
          </Link>

          {/* Desktop Menu with improved dropdown behavior and higher z-index */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative group"
              >
                <button className="flex items-center space-x-1 text-green-800 hover:text-green-600 font-medium transition-colors text-base">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-green-100 py-2 z-[80] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {menu.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-colors text-base"
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
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold text-base">
                Gör vårt quiz
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-green-800 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with improved z-index and spacing to account for timer */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden border-t border-green-200 py-4 max-h-[calc(100vh-8rem)] overflow-y-auto z-[70] bg-white/95 backdrop-blur-sm"
            role="navigation"
            aria-label="Huvudmeny"
            style={{ marginTop: '4rem' }} // Add space for timer banner
          >
            <div className="space-y-6 pb-4">
              {menuItems.map((menu, index) => (
                <div key={menu.title} className="space-y-2">
                  <h3 className="font-semibold text-green-800 text-lg px-4 border-b border-green-100 pb-2">
                    {menu.title}
                  </h3>
                  <div className="space-y-1">
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center space-x-3 px-6 py-3 text-green-800 hover:bg-green-50 rounded-md mx-2 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        onClick={handleLinkClick}
                        tabIndex={0}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="px-4 pt-4 border-t border-green-100">
                <Link to="/quiz" onClick={handleLinkClick} className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Gör vårt quiz
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
