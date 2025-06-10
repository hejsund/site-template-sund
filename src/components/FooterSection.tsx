
import React from 'react';
import { Link } from 'react-router-dom';

// CurvedDivider component merged into this file
interface CurvedDividerProps {
  color?: string;
  className?: string;
}

const CurvedDivider: React.FC<CurvedDividerProps> = ({ 
  color = "text-primary", 
  className = "" 
}) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`relative block w-full h-16 ${color}`}
      fill="currentColor"
    >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

// Footer component merged into this file
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-warm-contrast py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-display">Sund och Stark</h3>
            <p className="text-warm-contrast/80 mb-4 leading-relaxed">
              Vi hjälper dig att bygga hållbara hälsovanor som passar ditt liv. 
              Ingen quick fix, ingen extrem disciplin - bara verktyg som funkar på riktigt.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/sundochstark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-contrast/80 hover:text-warm-contrast transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://facebook.com/sundochstark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-contrast/80 hover:text-warm-contrast transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/quiz" className="text-warm-contrast/80 hover:text-warm-contrast transition-colors">
                  Ta vårt quiz
                </Link>
              </li>
              <li>
                <Link to="/om-sommarboosten" className="text-warm-contrast/80 hover:text-warm-contrast transition-colors">
                  Om Sommarboosten
                </Link>
              </li>
              <li>
                <Link to="/artiklar" className="text-warm-contrast/80 hover:text-warm-contrast transition-colors">
                  Alla artiklar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Kontakt</h4>
            <p className="text-warm-contrast/80 mb-2">
              Har du frågor?
            </p>
            <a 
              href="mailto:info@sundochstark.se" 
              className="text-warm-contrast/80 hover:text-warm-contrast transition-colors"
            >
              info@sundochstark.se
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-contrast/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-contrast/60 text-sm mb-4 md:mb-0">
            © 2024 Sund och Stark. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/integritetspolicy" className="text-warm-contrast/60 hover:text-warm-contrast transition-colors">
              Integritetspolicy
            </Link>
            <Link to="/villkor" className="text-warm-contrast/60 hover:text-warm-contrast transition-colors">
              Villkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Combined component that includes both curved divider and footer
interface FooterSectionProps {
  showCurvedDivider?: boolean;
  curvedDividerColor?: string;
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ 
  showCurvedDivider = true, 
  curvedDividerColor = "text-primary",
  className = ""
}) => {
  return (
    <div className={className}>
      {showCurvedDivider && <CurvedDivider color={curvedDividerColor} />}
      <Footer />
    </div>
  );
};

// Export individual components for backward compatibility
export { CurvedDivider };
export { Footer };
export default FooterSection;
