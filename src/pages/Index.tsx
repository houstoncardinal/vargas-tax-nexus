import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LuxuryContactWidget from "@/components/LuxuryContactWidget";
// import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  const handleStartForm = (formType: string) => {
    // Scroll to the process section and trigger the specific form
    const processSection = document.getElementById('process-section');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
      
      // Small delay to ensure scroll completes before triggering form
      setTimeout(() => {
        // You can add logic here to automatically open the specific form
        console.log(`Starting form: ${formType}`);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <LuxuryContactWidget onStartForm={handleStartForm} />
      {/* <FloatingActionButton /> */}
    </div>
  );
};

export default Index;