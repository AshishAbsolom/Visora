import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    features: [
      "AI Analysis",
      "Competitor Reports (2 sites)",
      "Basic Insights",
      "24/7 Support"
    ],
    color: "from-gray-500 to-gray-600"
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    features: [
      "Everything in Starter",
      "Performance Insights",
      "Precision Targeting",
      "Real-time Monitoring",
      "Competitor Reports (10 sites)"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/mo",
    features: [
      "Everything in Pro",
      "Data Protection",
      "Instant Results",
      "Historical Tracking",
      "API & Team Access"
    ],
    color: "from-yellow-500 to-orange-500"
  }
];

const Pricing = () => {
  const { ref, revealed } = useReveal();
  return (
    <section ref={ref as any} id="pricing" className={`relative min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 ${revealed ? "revealed" : "reveal"}`}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-hero-pop" style={{animationDelay: '60ms'}}>
            Simple Pricing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground animate-rise px-4" style={{animationDelay: '140ms'}}>
            Choose the plan that works for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`group card-elevated p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center relative animate-rise transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 border border-transparent ${
                tier.popular 
                  ? "ring-2 ring-primary scale-105 hover:scale-110" 
                  : "hover:border-primary/30 hover:scale-105"
              } flex flex-col h-full cursor-pointer`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 transition-colors duration-300 group-hover:text-primary">
                {tier.name}
              </h3>
              
              <div className="mb-8 sm:mb-10 md:mb-12">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {tier.price}
                </span>
                <span className="text-muted-foreground text-sm sm:text-base md:text-lg">{tier.period}</span>
              </div>
              
              <ul className="space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-10 md:mb-12 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center gap-3 sm:gap-4 transition-all duration-300 group-hover:translate-x-1">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground text-sm sm:text-base md:text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full mt-auto transition-all duration-300 group-hover:scale-105 text-sm sm:text-base md:text-lg ${
                  tier.popular 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" 
                    : "bg-foreground text-background hover:bg-primary"
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;