import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Visora",
    url: "https://your-domain.com/contact",
    about: {
      "@type": "Organization",
      name: "Visora",
      url: "https://your-domain.com",
    },
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (data.company_website) return;
    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:44px_44px] opacity-40" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="relative z-10 w-full max-w-6xl">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 sm:mb-10 md:mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        {/* Centered single card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left: Intro + details */}
          <section className="md:max-w-lg">
            <div className="mb-10 sm:mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-5 sm:mb-6 md:mb-8">Contact</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Get in touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
                Questions about pricing, enterprise, or partnerships? Send us a note and we'll get back quickly.
              </p>
            </div>

            <ul className="space-y-8 sm:space-y-10 md:space-y-12 text-sm sm:text-base md:text-lg">
              <li className="flex items-start gap-5 sm:gap-6">
                <span className="mt-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@visora.ai" className="text-primary hover:underline">hello@visora.ai</a>
                </div>
              </li>
              <li className="flex items-start gap-5 sm:gap-6">
                <span className="mt-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-medium">Response time</p>
                  <p className="text-muted-foreground">We aim to reply within 24 hours.</p>
                </div>
              </li>
              <li className="flex items-start gap-5 sm:gap-6">
                <span className="mt-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-medium">Social</p>
                  <div className="space-x-4 sm:space-x-6">
                    <a href="https://www.linkedin.com/company/visora" className="text-primary hover:underline">LinkedIn</a>
                    <a href="https://x.com/visora" className="text-primary hover:underline">X/Twitter</a>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Right: Form */}
          <div className="relative overflow-hidden md:overflow-visible">
            <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl" />
             <form onSubmit={onSubmit} className="relative bg-white/85 dark:bg-neutral-900/70 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/30 dark:border-white/10 p-8 sm:p-10 md:p-12 lg:p-14 space-y-8 sm:space-y-10 md:space-y-12 shadow-2xl">
              <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-3 sm:mb-4">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-background/80 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-3 sm:mb-4">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border bg-background/80 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium mb-3 sm:mb-4">Message</label>
                   <textarea
                     name="message"
                     required
                     rows={6}
                     className="w-full rounded-lg border border-border bg-background/80 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                     placeholder="Tell us what you're looking for..."
                   />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-primary px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-green-600 text-center">Thanks! We'll reply shortly.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 text-center">Please complete all fields or try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;


