
export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Sund & Stark Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/0bde5129-9bd4-4b1b-a3a4-be0261b752e1.png" 
              alt="Sund & Stark" 
              className="h-20 w-auto"
            />
          </div>
          
          {/* Company description */}
          <p className="text-lg mb-8 max-w-2xl font-text leading-body opacity-90">
            Sund & Stark hjälper dig att skapa hållbara vanor för ett liv fyllt av energi och glädje.
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#" className="hover:opacity-75 transition-opacity font-text">
              Om oss
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity font-text">
              Kontakt
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity font-text">
              Integritetspolicy
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity font-text">
              Användarvillkor
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 w-full text-center">
            <p className="text-sm opacity-75 font-text">
              © 2025 Sund & Stark. Alla rättigheter förbehållna.
            </p>
            <p className="text-sm opacity-75 font-text mt-2">
              Sommarboosten.se
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
