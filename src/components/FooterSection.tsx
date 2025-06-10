
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-600 to-green-700 text-white overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-12 fill-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          opacity=".1"
        />
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          opacity=".15"
        />
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          opacity=".2"
        />
        </svg>
      </div>
      
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
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-200 font-text">
                Integritetspolicy
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors duration-200 font-text">
                Villkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
