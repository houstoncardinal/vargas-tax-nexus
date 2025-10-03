import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import IndividualTaxReturns from "./pages/services/IndividualTaxReturns";
import BusinessTaxServices from "./pages/services/BusinessTaxServices";
import TaxPlanningStrategy from "./pages/services/TaxPlanningStrategy";
import TaxResolutionServices from "./pages/services/TaxResolutionServices";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="overflow-x-hidden w-full">
          <Toaster />
          <Sonner />
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" />
            ) : (
              <BrowserRouter key="app">
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* Service Pages */}
                  <Route path="/services/individual-tax-returns" element={<IndividualTaxReturns />} />
                  <Route path="/services/business-tax-services" element={<BusinessTaxServices />} />
                  <Route path="/services/tax-planning-strategy" element={<TaxPlanningStrategy />} />
                  <Route path="/services/tax-resolution-services" element={<TaxResolutionServices />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            )}
          </AnimatePresence>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
