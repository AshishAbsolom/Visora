import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import FloatingNav from "@/components/FloatingNav";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [showTopNav, setShowTopNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopNav(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll as any);
  }, []);

  return (
    <div className="relative">
      <TopNav isVisible={showTopNav} />
      <FloatingNav />
      <Hero />
      <Features />
      <Pricing />
      <FAQSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;