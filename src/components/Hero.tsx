import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [url, setUrl] = useState("");

  const handleAnalyze = () => {
    // Handle analysis logic here
    console.log("Analyzing:", url);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs - Responsive sizing */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-400/15 to-primary/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Grid Pattern - Responsive sizing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
        {/* Bottom fade to blend into next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-b from-transparent to-[hsl(var(--background))]"></div>
      </div>
      
      <div className="container max-w-4xl text-center relative z-10 px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-hero-pop" style={{animationDelay: '40ms'}}>
            <span className="gradient-text">Optimize</span> Your Website
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            for AI Search
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-rise px-4" style={{animationDelay: '140ms'}}>
            See how visible your page is across ChatGPT, Perplexity, and Google AI in
            seconds. Get actionable insights to improve your AI search presence.
          </p>
          
          <div className="max-w-2xl mx-auto animate-rise px-4" style={{animationDelay: '260ms'}}>
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-card border-2 border-primary/30 hover:border-primary/50 transition-colors duration-300 ring-2 ring-white/50 ring-offset-2 ring-offset-background">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 border-0 bg-transparent h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
              />
              <Button
                onClick={handleAnalyze}
                size="lg"
                variant="gradient"
                className="btn-crazy font-semibold px-5 sm:px-7 md:px-8 whitespace-nowrap h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg shadow-[0_8px_24px_rgba(139,92,246,0.25)]"
              >
                <span className="hidden sm:inline">Analyze Now</span>
                <span className="sm:hidden">Analyze</span>
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;