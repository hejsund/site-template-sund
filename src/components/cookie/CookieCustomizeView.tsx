
import React from 'react';
import { X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

interface CookieCustomizeViewProps {
  marketingCookies: boolean;
  analyticsCookies: boolean;
  onMarketingChange: (value: boolean) => void;
  onAnalyticsChange: (value: boolean) => void;
  onDenyAll: () => void;
  onSaveSettings: () => void;
  onBack: () => void;
}

export const CookieCustomizeView: React.FC<CookieCustomizeViewProps> = ({
  marketingCookies,
  analyticsCookies,
  onMarketingChange,
  onAnalyticsChange,
  onDenyAll,
  onSaveSettings,
  onBack
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-green-800 font-display">
          Anpassa cookies
        </h2>
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Om cookies</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookies är små textfiler som lagras på din enhet när du besöker vår webbplats. 
            De hjälper oss att förbättra din upplevelse, komma ihåg dina preferenser och 
            förstå hur vår webbplats används. Du kan välja vilka typer av cookies du vill tillåta.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Cookie-inställningar</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-1">Nödvändiga cookies</h4>
            <p className="text-sm text-gray-600 mb-2">
              Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Alltid aktiva</span>
              <Switch checked={true} disabled />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-1">Marknadsföringscookies</h4>
            <p className="text-sm text-gray-600 mb-2">
              Dessa cookies används för att visa dig relevanta annonser baserat på dina intressen.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Marknadsföring</span>
              <Switch 
                checked={marketingCookies} 
                onCheckedChange={onMarketingChange}
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-1">Analyticscookies</h4>
            <p className="text-sm text-gray-600 mb-2">
              Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in information anonymt.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Analytics</span>
              <Switch 
                checked={analyticsCookies} 
                onCheckedChange={onAnalyticsChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <button
          onClick={onDenyAll}
          className="order-2 sm:order-1 text-gray-600 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Neka alla
        </button>
        <Button
          onClick={onSaveSettings}
          className="bg-green-600 hover:bg-green-700 order-1 sm:order-2"
        >
          Spara inställningar
        </Button>
      </div>
    </div>
  );
};
