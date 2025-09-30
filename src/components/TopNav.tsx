import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const TopNav = ({ isVisible }: { isVisible: boolean }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform-gpu ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md border-b border-primary/10 rounded-none">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToTop}
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              {/* Visora Logo */}
              <img 
                src="/Visora Logo Option 1 - Eye Icon with Wordmark-Photoroom.png" 
                alt="Visora Logo" 
                className="h-7 w-auto sm:h-8 rounded-md"
              />
            </button>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8 lg:gap-10 mr-4">
                <button
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium"
                >
                  Pricing
                </button>
                <Button 
                  variant="gradient" 
                  className="btn-crazy text-sm lg:text-base px-5 lg:px-6 py-2"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>

              {/* Clerk Authentication Components */}
              <div className="flex items-center">
                <SignedOut>
                  <SignInButton>
                    <Button variant="outline" className="text-sm">
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;