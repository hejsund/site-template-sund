
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TimePhaseProvider } from '@/contexts/TimePhaseContext';
import { Navigation } from '@/components/Navigation';
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import ProgramYearPage from "./pages/ProgramYearPage";
import PreviousYearsPage from "./pages/PreviousYearsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TimePhaseProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen w-full">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/rekommendation" element={<QuizPage />} />
              <Route path="/program/:year" element={<ProgramYearPage />} />
              <Route path="/tidigare-ar" element={<PreviousYearsPage />} />
              <Route path="/versionshistorik" element={<PreviousYearsPage />} />
              <Route path="/om-charlotte" element={<Index />} />
              <Route path="/team" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TimePhaseProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
