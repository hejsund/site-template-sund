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

// Article pages
import FirstArticlePage from "./pages/articles/FirstArticlePage";
import TrainingArticlePage from "./pages/articles/TrainingArticlePage";
import NutritionArticlePage from "./pages/articles/NutritionArticlePage";
import HabitsArticlePage from "./pages/articles/HabitsArticlePage";
import MentalHealthArticlePage from "./pages/articles/MentalHealthArticlePage";
import VacationTrainingArticlePage from "./pages/articles/VacationTrainingArticlePage";
import FamilyTrainingArticlePage from "./pages/articles/FamilyTrainingArticlePage";
import After40ArticlePage from "./pages/articles/After40ArticlePage";
import StressManagementArticlePage from "./pages/articles/StressManagementArticlePage";
import VacationNutritionArticlePage from "./pages/articles/VacationNutritionArticlePage";

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
                  <Route path="/artiklar/traning" element={<ArticlesPage />} />
                  <Route path="/artiklar/kost" element={<ArticlesPage />} />
                  <Route path="/artiklar/vanor" element={<ArticlesPage />} />
                  <Route path="/artiklar/mental-halsa" element={<ArticlesPage />} />
                  <Route path="/om-sommarboosten" element={<AboutSommarboostenPage />} />
                  <Route path="/om-charlotte" element={<AboutCharlottePage />} />
                  <Route path="/sa-har-borjade-det" element={<SaHarBorjadeDetPage />} />
                  <Route path="/program/:year" element={<ProgramYearPage />} />
                  <Route path="/tidigare-ar" element={<PreviousYearsPage />} />
                  <Route path="/integritetspolicy" element={<PrivacyPolicyPage />} />
                  <Route path="/villkor" element={<TermsPage />} />
                  
                  {/* Article routes */}
                  <Route path="/artiklar/stresshantering" element={<StressManagementArticlePage />} />
                  <Route path="/artiklar/sommartraning" element={<TrainingArticlePage />} />
                  <Route path="/artiklar/kost" element={<NutritionArticlePage />} />
                  <Route path="/artiklar/vanor" element={<HabitsArticlePage />} />
                  <Route path="/artiklar/mental-halsa" element={<MentalHealthArticlePage />} />
                  <Route path="/artiklar/semestertraning" element={<VacationTrainingArticlePage />} />
                  <Route path="/artiklar/semesterkost" element={<VacationNutritionArticlePage />} />
                  <Route path="/artiklar/familjetraning" element={<FamilyTrainingArticlePage />} />
                  <Route path="/artiklar/efter-40" element={<After40ArticlePage />} />
                  
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
