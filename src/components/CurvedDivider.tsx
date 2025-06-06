
interface CurvedDividerProps {
  className?: string;
  color?: string;
}

export const CurvedDivider = ({ className = "", color = "text-green-100" }: CurvedDividerProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        className={`w-full h-12 ${color}`} 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,60 C300,20 900,100 1200,60 L1200,120 L0,120 Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
