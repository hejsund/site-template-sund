
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface HeroTestModeProps {
  testMode: boolean;
  setTestMode: (enabled: boolean) => void;
  testDate: Date;
  setTestDate: (date: Date) => void;
}

export const HeroTestMode = ({ testMode, setTestMode, testDate, setTestDate }: HeroTestModeProps) => {
  // Only show in development or when explicitly enabled
  const isDev = import.meta.env.DEV;
  
  if (!isDev && !testMode) return null;

  return (
    <div className="mb-6 p-4 bg-yellow-100 border-2 border-yellow-300 rounded-xl">
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-yellow-800">Test Mode:</label>
          <Button
            variant={testMode ? "default" : "outline"}
            size="sm"
            onClick={() => setTestMode(!testMode)}
            className="h-8"
          >
            {testMode ? "ON" : "OFF"}
          </Button>
        </div>
        
        {testMode && (
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-yellow-800">Test Date:</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "h-8 justify-start text-left font-normal",
                    !testDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {testDate ? format(testDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={testDate}
                  onSelect={(date) => date && setTestDate(date)}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
      
      {testMode && (
        <p className="text-xs text-yellow-700 mt-2 text-center">
          Testing booking status for {format(testDate, "PPP")}
        </p>
      )}
    </div>
  );
};
