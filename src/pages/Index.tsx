import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CompanySection from "@/components/sections/CompanySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
