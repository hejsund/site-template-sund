
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { TimePhaseProvider } from "@/contexts/TimePhaseContext";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import ArticlesPage from "./pages/ArticlesPage";
import AboutSommarboostenPage from "./pages/AboutSommarboostenPage";
import AboutCharlottePage from "./pages/AboutCharlottePage";
import SaHarBorjadeDetPage from "./pages/SaHarBorjadeDetPage";
import ProgramYearPage from "./pages/ProgramYearPage";
import PreviousYearsPage from "./pages/PreviousYearsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";

// Dynamic article page that handles all articles from database
import DynamicArticlePage from "./pages/articles/DynamicArticlePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TimePhaseProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/quiz" element={<QuizPage />} />
                  <Route path="/artiklar" element={<ArticlesPage />} />
                  <Route path="/om-sommarboosten" element={<AboutSommarboostenPage />} />
                  <Route path="/om-charlotte" element={<AboutCharlottePage />} />
                  <Route path="/sa-har-borjade-det" element={<SaHarBorjadeDetPage />} />
                  <Route path="/program/:year" element={<ProgramYearPage />} />
                  <Route path="/tidigare-ar" element={<PreviousYearsPage />} />
                  <Route path="/integritetspolicy" element={<PrivacyPolicyPage />} />
                  <Route path="/villkor" element={<TermsPage />} />
                  
                  {/* Dynamic article route - this will handle ALL articles from the database */}
                  <Route path="/artiklar/:slug" element={<DynamicArticlePage />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </TimePhaseProvider>
    </QueryClientProvider>
  );
}

export default App;
