
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { useDynamicText } from '@/hooks/useDynamicText';

interface HeroDynamicCTAProps {
  testMode?: boolean;
  testDate?: Date;
  onRegistrationClick: () => void;
  variant?: 'primary' | 'secondary' | 'urgent';
  className?: string;
}

export const HeroDynamicCTA = ({ 
  testMode = false, 
  testDate, 
  onRegistrationClick,
  variant = 'primary',
  className = ''
}: HeroDynamicCTAProps) => {
  const { urgencyText, ctaText, daysUntilStart, hasAvailableStarts, firstBookedStart } = useDynamicText(testMode, testDate);

  const getVariantStyles = () => {
    switch (variant) {
      case 'urgent':
        return 'bg-red-600 hover:bg-red-700 text-white animate-pulse';
      case 'secondary':
        return 'bg-green-100 hover:bg-green-200 text-green-800 border-2 border-green-300';
      default:
        return 'cta-warm';
    }
  };

  const getIcon = () => {
    if (daysUntilStart <= 7 && hasAvailableStarts) {
      return <Clock className="w-4 h-4" />;
    }
    if (firstBookedStart && hasAvailableStarts) {
      return <AlertCircle className="w-4 h-4" />;
    }
    return <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />;
  };

  return (
    <div className={`text-center space-y-3 ${className}`}>
      <p className="text-sm sm:text-base text-green-700 font-medium">
        {urgencyText}
      </p>
      <Button 
        className={`h-10 sm:h-12 px-6 sm:px-8 rounded-xl group ${getVariantStyles()}`}
        onClick={onRegistrationClick}
      >
        <span className="flex items-center justify-center gap-2">
          {ctaText}
          {getIcon()}
        </span>
      </Button>
    </div>
  );
};
