import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Menu, X } from "lucide-react";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState<"home" | "features" | "pricing">("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll as any);
  }, []);

  useEffect(() => {
    const featureEl = document.getElementById("features");
    const pricingEl = document.getElementById("pricing");

    const computeActive = () => {
      const y = window.scrollY + window.innerHeight * 0.5;
      const featureTop = featureEl?.offsetTop ?? Number.MAX_SAFE_INTEGER;
      const pricingTop = pricingEl?.offsetTop ?? Number.MAX_SAFE_INTEGER;

      if (pricingTop <= y) {
        setActive("pricing");
      } else if (featureTop <= y) {
        setActive("features");
      } else {
        setActive("home");
      }
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);
    return () => {
      window.removeEventListener("scroll", computeActive as any);
      window.removeEventListener("resize", computeActive as any);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId?: string) => {
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      scrollToTop();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 transform-gpu ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-3 sm:px-6 py-2 sm:py-3 rounded-full border backdrop-blur-md bg-white/55 border-primary/20 shadow-[0_8px_30px_rgba(139,92,246,0.15)]">
          <div className="flex items-center gap-4 sm:gap-8">
            <button
              onClick={scrollToTop}
              className="hover:opacity-80 transition-opacity"
            >
              {/* Visora Logo */}
              <img 
                src="/Visora Logo Option 1 - Eye Icon with Wordmark-Photoroom.png" 
                alt="Visora Logo" 
                className="h-5 w-auto sm:h-6 rounded-md"
              />
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className={`text-sm transition-colors ${active === "home" ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={`text-sm transition-colors ${active === "features" ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className={`text-sm transition-colors ${active === "pricing" ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`}
              >
                Pricing
              </button>
            </div>

            {/* Clerk Authentication */}
            <div className="flex items-center">
              <SignedOut>
                <SignInButton>
                  <Button size="sm" variant="outline" className="text-xs sm:text-sm">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-7 h-7 sm:w-8 sm:h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={handleMobileMenuToggle}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden sm:block">
              <Button 
                size="sm" 
                variant="gradient" 
                className="btn-crazy text-sm px-4"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-[0_8px_30px_rgba(139,92,246,0.15)] p-6">
              <nav className="space-y-4">
                <button
                  onClick={() => handleNavClick()}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    active === "home" 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("features")}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    active === "features" 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => handleNavClick("pricing")}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    active === "pricing" 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  Pricing
                </button>
                
                {/* Clerk Auth in Mobile Menu */}
                <div className="pt-4 border-t border-border/30">
                  <SignedOut>
                    <SignInButton>
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center justify-center py-2">
                      <UserButton />
                    </div>
                  </SignedIn>
                </div>
                
                <div className="pt-2 border-t border-border/30">
                  <Button 
                    variant="gradient" 
                    className="w-full btn-crazy"
                    onClick={() => {
                      navigate("/contact");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNav;