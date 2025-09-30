import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";

const FAQSection: React.FC = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Visora optimize for AI search?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Visora analyzes your site against AI search systems (ChatGPT, Perplexity, Google AI) and reports visibility, content gaps, and actions—like structured data, internal linking, and entity coverage—to improve your chance of being referenced in AI answers.",
        },
      },
      {
        "@type": "Question",
        name: "Is AI SEO different from normal SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Traditional SEO targets web rankings; AI SEO targets how LLMs fetch, rank, and cite sources. Visora helps with both by aligning your content to AI model preferences and web crawlers.",
        },
      },
      {
        "@type": "Question",
        name: "Can I compare my site with competitors?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Pro and Enterprise include competitor visibility reports so you can benchmark, track shifts, and prioritize pages to win coverage in AI results.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a free trial?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A free trial is rolling out soon. Join the newsletter to get early access and launch updates.",
        },
      },
    ],
  };

  return (
    <section id="faq" className="relative min-h-screen px-4 sm:px-6 bg-gradient-to-b from-background to-muted/20 overflow-hidden flex items-center justify-center">
      {/* subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:44px_44px] opacity-30" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="relative z-10 mx-auto w-full max-w-3xl py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary">
            Quick answers
          </span>
          <h2 className="mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Answers to the most common questions about AI search optimization with Visora.
          </p>
        </div>

        {/* Single column, no borders or emojis, aesthetic dividers */}
        <div className="rounded-2xl bg-transparent shadow-none border-0">
          <Accordion type="single" collapsible className="w-full">
            <div className="divide-y divide-border/40">
              <AccordionItem value="q1" className="border-0">
                <AccordionTrigger className="px-1 py-5 sm:py-6 md:py-7 text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight hover:no-underline rounded-lg transition-colors data-[state=open]:text-primary">
                  How does Visora optimize for AI search?
                </AccordionTrigger>
                <AccordionContent className="pb-5 sm:pb-6 md:pb-7 text-muted-foreground text-sm sm:text-base md:text-lg">
                  Visora analyzes your site against AI search systems (ChatGPT, Perplexity, Google AI) and reports
                  visibility, content gaps, and actions—like structured data, internal linking, and entity coverage—to improve your
                  chance of being referenced in AI answers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-0">
                <AccordionTrigger className="px-1 py-5 sm:py-6 md:py-7 text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight hover:no-underline rounded-lg transition-colors data-[state=open]:text-primary">
                  Is AI SEO different from normal SEO?
                </AccordionTrigger>
                <AccordionContent className="pb-5 sm:pb-6 md:pb-7 text-muted-foreground text-sm sm:text-base md:text-lg">
                  Yes. Traditional SEO targets web rankings; AI SEO targets how LLMs fetch, summarize, and cite sources.
                  Visora helps you adapt to both.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-0">
                <AccordionTrigger className="px-1 py-5 sm:py-6 md:py-7 text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight hover:no-underline rounded-lg transition-colors data-[state=open]:text-primary">
                  Can I compare my site with competitors?
                </AccordionTrigger>
                <AccordionContent className="pb-5 sm:pb-6 md:pb-7 text-muted-foreground text-sm sm:text-base md:text-lg">
                  Pro and Enterprise include competitor visibility reports so you can benchmark and track shifts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-0">
                <AccordionTrigger className="px-1 py-5 sm:py-6 md:py-7 text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight hover:no-underline rounded-lg transition-colors data-[state=open]:text-primary">
                  Do you offer a free trial?
                </AccordionTrigger>
                <AccordionContent className="pb-5 sm:pb-6 md:pb-7 text-muted-foreground text-sm sm:text-base md:text-lg">
                  We’re launching it soon—subscribe to the newsletter to get early access.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Didn’t find what you need? <a href="/contact" className="text-primary hover:underline">Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;



