
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-600 to-green-700 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black text-white mb-3 font-display">
              Sommarboosten
            </h3>
            <p className="text-sm text-green-100 mb-4 font-medium">
              Sommarboosten är ett varumärke från Sund & Stark
            </p>
            <p className="text-green-100 leading-relaxed mb-6 font-text">
              Vi hjälper dig att bygga hållbara hälsovanor som passar ditt liv. Ingen quick fix, 
              ingen extrem disciplin - bara verktyg som fungerar på riktigt.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/sundochstark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-green-600"
                aria-label="Följ oss på Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/sundochstark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-green-600"
                aria-label="Följ oss på Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-display">Snabblänkar</h4>
            <nav className="space-y-3">
              <Link to="/quiz" className="block text-green-200 hover:text-white transition-colors duration-200 font-text">
                Ta vårt quiz
              </Link>
              <Link to="/om-sommarboosten" className="block text-green-200 hover:text-white transition-colors duration-200 font-text">
                Om Sommarboosten
              </Link>
              <Link to="/artiklar" className="block text-green-200 hover:text-white transition-colors duration-200 font-text">
                Våra artiklar
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-display">Kontakt</h4>
            <div className="space-y-3">
              <p className="text-green-100 font-text">Har du frågor?</p>
              <a 
                href="mailto:hej@sundochstark.se" 
                className="inline-flex items-center text-green-200 hover:text-white transition-colors duration-200 font-text"
              >
                <Mail size={16} className="mr-2" />
                hej@sundochstark.se
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-green-200 text-sm font-text">
              © 2025 Sommarboosten - Sund och Stark. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/integritetspolicy" className="text-green-200 hover:text-white transition-colors duration-200 font-text">
                Integritetspolicy
              </Link>
              <Link to="/villkor" className="text-green-200 hover:text-white transition-colors duration-200 font-text">
                Villkor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
