
import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Clock, Users, Trophy, ChevronDown, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@/utils/scrollToTop';
import { getLaunchState } from '@/utils/launchPhases';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [launchState, setLaunchState] = useState(getLaunchState());

  // Update launch state every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setLaunchState(getLaunchState());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const handleLinkClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const menuItems = [
    { name: 'Hem', href: '/', icon: Users },
    { name: 'Om Charlotte', href: '/om-charlotte', icon: Users },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Julkalender 2025 */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <span className="font-display font-black text-green-800 text-xl tracking-tight">
              Julkalender 2025 ✨
            </span>
          </Link>

          {/* Desktop Menu - Simplified */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-green-800 hover:text-green-600 font-medium transition-colors text-base"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}

            {launchState.showBuyButton && (
              <Button
                onClick={() => window.open('https://buy.stripe.com/bJe6oI0dx0eOaF49Lbasg0a', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-base"
              >
                Köp kalendern - 249 kr
              </Button>
            )}
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

        {/* Mobile Menu - Simplified */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-green-200 py-4 bg-white/95 backdrop-blur-sm"
            role="navigation"
            aria-label="Huvudmeny"
          >
            <div className="space-y-2 pb-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-green-800 hover:bg-green-50 rounded-md mx-2 text-base font-medium transition-colors"
                  onClick={handleLinkClick}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              ))}
              {launchState.showBuyButton && (
                <div className="px-4 pt-4 border-t border-green-100 mt-4">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      window.open('https://buy.stripe.com/bJe6oI0dx0eOaF49Lbasg0a', '_blank');
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base py-3"
                  >
                    Köp kalendern - 249 kr
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
