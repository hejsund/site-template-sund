
import { Sun, Heart, Sparkles, Waves, Dumbbell } from 'lucide-react';

export const HeroAnimatedElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Sun className="absolute top-12 sm:top-20 right-4 sm:right-10 text-yellow-500 opacity-40 animate-float" size={28} />
      <Heart className="absolute top-16 sm:top-24 left-6 sm:left-10 text-coral opacity-30 animate-float" size={24} />
      <Sparkles className="absolute top-28 sm:top-32 right-12 sm:right-20 text-purple opacity-30 animate-float" size={20} style={{ animationDelay: '1s' }} />
      <Waves className="absolute top-36 sm:top-40 left-8 sm:left-1/4 text-blue-400 opacity-25 animate-float" size={22} style={{ animationDelay: '1.5s' }} />
      <Dumbbell className="absolute top-44 sm:top-48 right-6 sm:right-1/3 text-primary opacity-20 animate-float" size={18} style={{ animationDelay: '1.8s' }} />
      <Heart className="absolute bottom-32 sm:bottom-40 right-8 sm:right-10 text-coral opacity-30 animate-float" size={18} style={{ animationDelay: '2s' }} />
      <Sun className="absolute bottom-48 sm:bottom-60 left-4 sm:left-16 text-yellow-500 opacity-35 animate-float" size={16} style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute bottom-40 sm:bottom-52 right-1/4 text-purple opacity-30 animate-float" size={22} style={{ animationDelay: '2.5s' }} />
    </div>
  );
};
