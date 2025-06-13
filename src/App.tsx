
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TimePhaseProvider } from "./contexts/TimePhaseContext";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import AboutCharlottePage from "./pages/AboutCharlottePage";
import AboutSommarboostenPage from "./pages/AboutSommarboostenPage";
import SaHarBorjadeDetPage from "./pages/SaHarBorjadeDetPage";
import PreviousYearsPage from "./pages/PreviousYearsPage";
import ProgramYearPage from "./pages/ProgramYearPage";
import ArticlesPage from "./pages/ArticlesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import AirtableSyncPage from "./pages/AirtableSyncPage";
import NotFound from "./pages/NotFound";
import HemligPage from "./pages/HemligPage";

// Article pages
import TrainingArticlePage from "./pages/articles/TrainingArticlePage";
import VacationTrainingArticlePage from "./pages/articles/VacationTrainingArticlePage";
import FamilyTrainingArticlePage from "./pages/articles/FamilyTrainingArticlePage";
import After40ArticlePage from "./pages/articles/After40ArticlePage";
import NutritionArticlePage from "./pages/articles/NutritionArticlePage";
import VacationNutritionArticlePage from "./pages/articles/VacationNutritionArticlePage";
import HabitsArticlePage from "./pages/articles/HabitsArticlePage";
import MentalHealthArticlePage from "./pages/articles/MentalHealthArticlePage";
import StressManagementArticlePage from "./pages/articles/StressManagementArticlePage";
import FirstArticlePage from "./pages/articles/FirstArticlePage";
import DynamicArticlePage from "./pages/articles/DynamicArticlePage";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHemligPage = location.pathname === '/hemlig';

  return (
    <>
      {!isHemligPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/om-charlotte" element={<AboutCharlottePage />} />
        <Route path="/om-sommarboosten" element={<AboutSommarboostenPage />} />
        <Route path="/sa-har-borjade-det" element={<SaHarBorjadeDetPage />} />
        <Route path="/tidigare-ar" element={<PreviousYearsPage />} />
        <Route path="/program/:year" element={<ProgramYearPage />} />
        <Route path="/artiklar" element={<ArticlesPage />} />
        <Route path="/integritetspolicy" element={<PrivacyPolicyPage />} />
        <Route path="/villkor" element={<TermsPage />} />
        <Route path="/airtable-sync" element={<AirtableSyncPage />} />
        <Route path="/hemlig" element={<HemligPage />} />
        
        {/* Article routes */}
        <Route path="/artiklar/sommartraning-som-du-faktiskt-langtar-efter" element={<TrainingArticlePage />} />
        <Route path="/artiklar/semestertraning-som-funkar" element={<VacationTrainingArticlePage />} />
        <Route path="/artiklar/familjetraning" element={<FamilyTrainingArticlePage />} />
        <Route path="/artiklar/traning-efter-40" element={<After40ArticlePage />} />
        <Route path="/artiklar/sommarkost-utan-forbud" element={<NutritionArticlePage />} />
        <Route path="/artiklar/semesterkost-som-ger-energi" element={<VacationNutritionArticlePage />} />
        <Route path="/artiklar/hallbara-vanor" element={<HabitsArticlePage />} />
        <Route path="/artiklar/mental-halsa-och-sjalvomsorg" element={<MentalHealthArticlePage />} />
        <Route path="/artiklar/hantera-stress-och-overvalde" element={<StressManagementArticlePage />} />
        <Route path="/artiklar/min-forsta-sommarboost" element={<FirstArticlePage />} />
        <Route path="/artiklar/:slug" element={<DynamicArticlePage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TimePhaseProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </TimePhaseProvider>
  </QueryClientProvider>
);

export default App;
