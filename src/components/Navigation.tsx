
import { useState } from 'react';
import { Menu, X, Calendar, Clock, Users, Trophy, ChevronDown, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // Get current phase based on date
  const getCurrentPhase = () => {
    if (currentMonth === 7) return 'registration-open';
    if (currentMonth >= 9) return 'collect-interest';
    if (currentMonth >= 6 && currentMonth < 7) return 'opening-soon';
    if (currentMonth >= 5 && currentMonth < 6) return 'watch-out';
    return 'collect-email';
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
        { name: 'Träning & motivation', href: '/artiklar/traning', icon: Trophy },
        { name: 'Kost & njutning', href: '/artiklar/kost', icon: Users },
        { name: 'Vanor & förändringar', href: '/artiklar/vanor', icon: Clock },
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
      ]
    }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Updated Logo - Text only */}
          <Link to="/" className="flex items-center space-x-2">
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
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link to="/quiz">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Gör vårt quiz
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-green-800 hover:text-green-600"
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
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-2 mt-4">
              <Link to="/quiz">
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
