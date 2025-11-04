import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { getLaunchPhase, getLaunchState, getTestDate } from '@/utils/launchPhases';

export const TestModeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [testDate, setTestDate] = useState<string>('');
  const [currentPhase, setCurrentPhase] = useState<string>('');

  useEffect(() => {
    const existingDate = getTestDate();
    if (existingDate) {
      setTestDate(existingDate.toISOString().slice(0, 16));
    }
    updatePhase();
  }, []);

  const updatePhase = () => {
    const phase = getLaunchPhase();
    const state = getLaunchState();
    setCurrentPhase(`${phase} - ${state.heroHeading}`);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setTestDate(newDate);
    if (newDate) {
      localStorage.setItem('test_launch_date', new Date(newDate).toISOString());
    } else {
      localStorage.removeItem('test_launch_date');
    }
    updatePhase();
    window.location.reload(); // Reload to apply changes
  };

  const clearTestDate = () => {
    localStorage.removeItem('test_launch_date');
    setTestDate('');
    window.location.reload();
  };

  const quickDates = [
    { label: 'Pre-launch (10/11)', date: '2024-11-10T12:00' },
    { label: 'Launch Day (12/11)', date: '2024-11-12T12:00' },
    { label: 'Mid-period (20/11)', date: '2024-11-20T12:00' },
    { label: 'Last 24h (26/11)', date: '2024-11-26T12:00' },
    { label: 'Closed (28/11)', date: '2024-11-28T12:00' },
  ];

  // Only show in DEV mode
  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center gap-2"
        aria-label="Test Mode"
      >
        <Calendar size={24} />
        <span className="font-bold text-sm">TEST MODE</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-black text-green-800">🧪 Test Mode</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-green-600 hover:text-green-800"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-800 font-medium">
                Current Phase: <span className="font-bold">{currentPhase}</span>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Custom Date/Time:
                </label>
                <input
                  type="datetime-local"
                  value={testDate}
                  onChange={handleDateChange}
                  className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Quick Select:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {quickDates.map((quick) => (
                    <button
                      key={quick.label}
                      onClick={() => {
                        setTestDate(quick.date);
                        localStorage.setItem('test_launch_date', new Date(quick.date).toISOString());
                        window.location.reload();
                      }}
                      className="px-3 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg text-sm font-medium transition-colors"
                    >
                      {quick.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={clearTestDate}
                className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
              >
                Reset to Real Time
              </button>
            </div>

            <p className="mt-4 text-xs text-green-600 text-center">
              Test mode only visible in development
            </p>
          </div>
        </div>
      )}
    </>
  );
};
