// app/components/Footer.tsx
// shadcn Button not needed here; removed import.

import React from "react";

const Footer: React.FC = () => {
  const smoothLink =
    (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Visora",
    url: "https://your-domain.com",
    logo: "https://your-domain.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/visora",
      "https://x.com/visora" // update/remove as needed
    ]
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Visora",
    url: "https://your-domain.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://your-domain.com/search?q={query}",
      "query-input": "required name=query"
    }
  };

  return (
    <footer className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:44px_44px] opacity-40" />
      
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* JSON-LD for SEO/AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Main content - Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Left: Brand & Description */}
          <div className="md:col-span-1">
            <a
              href="#top"
              onClick={smoothLink("top")}
              className="mb-6 hover:opacity-80 transition-opacity block"
            >
              {/* Visora Logo */}
              <img 
                src="/Visora Logo Option 1 - Eye Icon with Wordmark-Photoroom.png" 
                alt="Visora Logo" 
                className="h-10 w-auto sm:h-12 rounded-lg"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Optimize your website for AI search engines. Get actionable insights
              to improve visibility across ChatGPT, Perplexity, and Google AI.
            </p>
            
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-foreground block mb-1">Contact</span>
                <a
                  href="mailto:hello@visora.ai"
                  className="text-primary hover:underline text-sm"
                >
                  hello@visora.ai
                </a>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-sm font-medium text-foreground block mb-2">Follow us</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/visora"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/visora"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="X/Twitter"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Navigation */}
          <nav aria-labelledby="footer-nav" className="md:col-span-1">
            <h3 id="footer-nav" className="font-semibold mb-4 text-sm text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#top"
                  onClick={smoothLink("top")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={smoothLink("features")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={smoothLink("pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right: Resources */}
          <nav aria-labelledby="footer-ai-seo" className="md:col-span-1">
            <h3 id="footer-ai-seo" className="font-semibold mb-4 text-sm text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/guides/ai-search-optimization"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  AI Search Optimization
                </a>
              </li>
              <li>
                <a
                  href="/guides/chatgpt-seo-checker"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  ChatGPT SEO Checker
                </a>
              </li>
              <li>
                <a
                  href="/guides/perplexity-gemini-visibility"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Perplexity & Gemini Visibility
                </a>
              </li>
              <li>
                <a
                  href="/guides/real-time-ai-monitoring"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Real-time AI Monitoring
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="pt-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Visora. All rights reserved.
            </p>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
