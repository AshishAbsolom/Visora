// components/Features.tsx
import {
  BrainCircuit,
  TrendingUp,
  Target,
  Clock,
  ShieldCheck,
  Zap,
  Globe,
  Sparkles,
  Quote,
} from "lucide-react";
import React from "react";
import { useReveal } from "@/hooks/use-reveal";

const left = [
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    desc: "Audit how pages are interpreted by ChatGPT, Perplexity, and Google AI with entity coverage and citation likelihood.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    desc: "Enterprise-grade encryption. Your projects and competitor data stay private by default.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Pinpoint topics & keywords LLMs favor and get schema/wording suggestions.",
  },
];

const right = [
  {
    icon: TrendingUp,
    title: "Performance Insights",
    desc: "Trend scores, gaps, and priority fixes so you know what moved visibility.",
  },
  {
    icon: Clock,
    title: "Real-time Monitoring",
    desc: "Live alerts when AI answers shift or competitors outrank your source.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    desc: "Paste a URL, get a visibility score and three quick wins—immediately.",
  },
];

const Features: React.FC = () => {
  const { ref, revealed } = useReveal();

  return (
    <section
      ref={ref as any}
      id="features"
      aria-labelledby="features-title"
      className={`relative overflow-hidden ${revealed ? "revealed" : "reveal"}`}
      style={{ minHeight: "auto" }}
    >
      {/* Responsive background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:44px_44px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[560px] md:w-[560px] rounded-full bg-primary/15 blur-3xl" />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-32">
        {/* Header */}
        <header className="text-center pb-16 sm:pb-20 md:pb-24">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary">
            Built for AI search
          </span>
          <h2 id="features-title" className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
            AI-Powered Analysis
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3 px-4">
            See how AI systems interpret your pages—and what to fix to be cited more often.
          </p>
        </header>

        {/* Mobile-first layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Left features - Mobile: stacked, Desktop: column */}
          <div className="order-2 lg:order-1 space-y-8 sm:space-y-10 md:space-y-12 flex flex-col lg:justify-center lg:scale-[0.95]">
            {left.map((f, index) => (
              <div 
                key={f.title} 
                className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-neutral-900/30 backdrop-blur border border-gray-200/50 dark:border-neutral-700/50 lg:bg-transparent lg:border-0 lg:p-0 lg:backdrop-blur-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 shrink-0">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center preview - Always prominent */}
          <div className="order-1 lg:order-2 lg:relative lg:z-10">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[560px] lg:max-w-[640px] lg:scale-[1.06] lg:shadow-2xl lg:shadow-purple-500/20 transition-transform">
              <div className="rounded-[20px] sm:rounded-[28px] border border-purple-300/30 lg:border-transparent bg-white/80 dark:bg-neutral-900/70 backdrop-blur shadow-lg shadow-purple-500/10 p-5 sm:p-6 md:p-8">
                {/* URL bar */}
                <div className="flex items-center gap-2 rounded-lg sm:rounded-xl border border-gray-300/60 dark:border-gray-700 bg-white/90 dark:bg-neutral-900 px-3 sm:px-4 py-2 sm:py-3">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  <span className="text-xs sm:text-sm text-gray-500 truncate">
                    yourdomain.com/blog/ai-seo
                  </span>
                </div>

                {/* badges */}
                <div className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap gap-2 sm:gap-3">
                  {["ChatGPT", "Perplexity", "Google AI"].map((label) => (
                    <span key={label} className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] sm:text-[11px] text-primary">
                      {label}
                    </span>
                  ))}
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] sm:text-[11px] text-emerald-600">
                    Citable Source
                  </span>
                </div>

                {/* snippet preview */}
                <div className="mt-4 sm:mt-5 md:mt-6 rounded-lg sm:rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/90 dark:bg-neutral-900/80 p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    AI Snapshot
                  </div>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    "This guide explains how to optimize pages for AI answers using entity coverage, FAQ schema, and internal links."
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                    <Quote className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span className="truncate">yourdomain.com • /pricing • /guides</span>
                  </div>
                </div>

                {/* stats */}
                <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-3 gap-3 sm:gap-4 text-center">
                  {[
                    { value: "82", label: "AI Score" },
                    { value: "+34%", label: "Citations" },
                    { value: "A+", label: "Schema" }
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg sm:rounded-xl border border-gray-200/60 dark:border-gray-800/60 p-2 sm:p-3 md:p-4">
                      <div className="text-base sm:text-lg md:text-xl font-semibold">{stat.value}</div>
                      <div className="text-[9px] sm:text-[11px] md:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right features - Mobile: stacked, Desktop: column */}
          <div className="order-3 lg:order-3 space-y-8 sm:space-y-10 md:space-y-12 flex flex-col lg:justify-center lg:scale-[0.95]">
            {right.map((f, index) => (
              <div 
                key={f.title} 
                className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-neutral-900/30 backdrop-blur border border-gray-200/50 dark:border-neutral-700/50 lg:bg-transparent lg:border-0 lg:p-0 lg:backdrop-blur-none"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 shrink-0">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO-friendly hidden list */}
        <ul className="sr-only">
          {[...left, ...right].map((f) => (
            <li key={f.title}>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
