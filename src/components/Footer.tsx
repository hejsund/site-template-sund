
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
          
          {/* Links organized by sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm w-full max-w-4xl">
            <div>
              <h4 className="font-semibold text-green-200 mb-3 font-display">Program</h4>
              <div className="space-y-2">
                <a href="/om-sommarboosten" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Om Sommarboosten
                </a>
                <a href="/tidigare-ar" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Tidigare år
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-200 mb-3 font-display">Artiklar</h4>
              <div className="space-y-2">
                <a href="/artiklar" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Alla artiklar
                </a>
                <a href="/artiklar/traning" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Träning
                </a>
                <a href="/artiklar/kost" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Kost
                </a>
                <a href="/artiklar/vanor" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Vanor
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-200 mb-3 font-display">Om oss</h4>
              <div className="space-y-2">
                <a href="/om-charlotte" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Charlotte
                </a>
                <a href="/sa-har-borjade-det" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Så här började det
                </a>
                <a 
                  href="https://sundochstark.se" 
                  className="block text-green-200 hover:text-green-100 transition-colors font-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hemsida
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-200 mb-3 font-display">Juridiskt</h4>
              <div className="space-y-2">
                <a href="#" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Integritetspolicy
                </a>
                <a href="#" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Användarvillkor
                </a>
                <a href="#" className="block text-green-200 hover:text-green-100 transition-colors font-text">
                  Kontakt
                </a>
              </div>
            </div>
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
