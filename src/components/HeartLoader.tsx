
import { Heart } from 'lucide-react';

interface HeartLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const HeartLoader = ({ size = 'md', className = '' }: HeartLoaderProps) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16 md:w-20 md:h-20',
    lg: 'w-24 h-24 md:w-30 md:h-30'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <Heart 
          className={`${sizeClasses[size]} text-primary animate-heartBeat drop-shadow-lg`}
          fill="currentColor"
        />
        {/* Subtle glow effect */}
        <div 
          className={`absolute inset-0 ${sizeClasses[size]} animate-heartBeat opacity-30 blur-sm`}
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
      </div>
    </div>
  );
};
