import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { FinalCtaBanner } from "@/components/FinalCtaBanner";
import { CAL_LINK } from "@/lib/cal";
import { ArrowRight, ShoppingCart, Globe, Briefcase, Code, Zap, Smartphone, Sparkles, Layers, LineChart, CheckCircle2, Check, Compass, Target, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { HeroAnimatedBg } from "@/components/HeroAnimatedBg";

const WebDevelopment = () => (
  <>
    <Seo
      title="Website Development | Orbit P1"
      description="Orbit P1 builds modern Shopify, WordPress, business and custom web applications that help brands look better, work smarter and grow online."
      path="/web-development"
    />

    {/* HERO */}
    <header className="relative py-24 md:py-32 text-center">
      <HeroAnimatedBg />
      <div className="container relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          WEBSITE DEVELOPMENT
        </span>

        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">
          We build websites that <span className="text-gradient">mean business.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Modern, fast and conversion-focused websites built to help brands look better, work smarter and grow online.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild variant="hero">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#cta">Get a Quote</a>
          </Button>
        </div>
      </div>

      {/* Ticker */}
        <div className="mt-10">
          <div className="overflow-hidden border-t border-b border-border py-4">
            <div className="whitespace-nowrap animate-marquee text-sm text-muted-foreground">
            <span className="mr-8">✦ Shopify ✦</span>
            <span className="mr-8">WordPress ✦</span>
            <span className="mr-8">Business Websites ✦</span>
            <span className="mr-8">Custom Web Applications ✦</span>
            <span className="mr-8">E-commerce ✦</span>
            <span className="mr-8">Responsive Design ✦</span>
            <span className="mr-8">Fast Performance ✦</span>
            <span className="mr-8">Built to Convert</span>
          </div>
        </div>
      </div>
    </header>

    {/* INTRO */}
    <section className="py-16">
      <div className="container grid md:grid-cols-[.9fr,1.1fr] gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Your website is your digital first impression. <span className="text-gradient">Make it count.</span></h2>
        </div>
        <div>
          <p className="text-muted-foreground">We combine clean design, smart development and seamless user experience to build websites that work as good as they look. Fast. Responsive. Intuitive. Built for business.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Fast</span>
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Responsive</span>
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Intuitive</span>
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Built for Business</span>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES GRID */}
    <section className="py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title={<>What we <span className="text-gradient">build.</span></>}
          description="From storefronts to custom web applications — everything your business runs on, built right."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Shopify */}
          <Reveal delay={40}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <ShoppingCart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">Shopify</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">01</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Built to turn browsing into buying.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">High-performing Shopify stores with seamless shopping experiences from first click to checkout.</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Custom store design</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Product &amp; collection setup</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Payment integration</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Mobile optimization</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> App integrations</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Performance optimization</li>
              </ul>
            </article>
          </Reveal>

          {/* WordPress */}
          <Reveal delay={80}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">WordPress</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">02</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Flexible by design. Built to scale.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">Modern WordPress websites that give your business the flexibility to manage, update and grow.</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Custom design</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Responsive development</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> CMS setup</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Forms &amp; integrations</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Performance optimization</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> SEO-ready structure</li>
              </ul>
            </article>
          </Reveal>

          {/* Business Websites */}
          <Reveal delay={120}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <Briefcase className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">Business Websites</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">03</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Your business. Presented better.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">Professional websites designed to build credibility, communicate your value and turn visitors into enquiries.</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Corporate websites</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Service websites</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> B2B websites</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Enquiry forms</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Mobile optimization</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Custom functionality</li>
              </ul>
            </article>
          </Reveal>

          {/* Custom Web Apps */}
          <Reveal delay={160}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <Code className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">Custom Web Applications</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">04</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Built to solve real problems.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">Custom web apps and internal tools designed around how your business actually works — not the other way around.</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Custom web applications</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Internal tools &amp; dashboards</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> API development &amp; integrations</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Database architecture</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Cloud deployment</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Ongoing maintenance &amp; support</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    {/* STATEMENT */}
    <section className="py-16 border-t border-border">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-5xl">Good websites get attention. <span className="text-gradient">Great websites get action.</span></h2>
      </div>
    </section>

    {/* WHY */}
    <section className="py-16">
      <div className="container">
        <SectionHeading
          eyebrow="WHY ORBIT P1"
          title={<>Built <span className="text-gradient">differently.</span></>}
          description="No unnecessary complexity. No cluttered experiences. Just websites built around what matters."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { key: 'fast', icon: <Zap className="h-5 w-5 text-primary-foreground" />, title: 'Fast', desc: 'Built for speed.' },
            { key: 'responsive', icon: <Smartphone className="h-5 w-5 text-primary-foreground" />, title: 'Responsive', desc: 'Made for every screen.' },
            { key: 'intuitive', icon: <Compass className="h-5 w-5 text-primary-foreground" />, title: 'Intuitive', desc: 'Easy to navigate.' },
            { key: 'conversion', icon: <Target className="h-5 w-5 text-primary-foreground" />, title: 'Conversion-focused', desc: 'Designed with purpose.' },
            { key: 'seo', icon: <Search className="h-5 w-5 text-primary-foreground" />, title: 'SEO-ready', desc: 'Built on the right foundation.' },
            { key: 'scalable', icon: <TrendingUp className="h-5 w-5 text-primary-foreground" />, title: 'Scalable', desc: 'Ready for what comes next.' },
          ].map((it, i) => (
            <Reveal key={it.key} delay={i * 60}>
              <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary">
                    {it.icon}
                  </div>
                  <h3 className="font-bold text-lg">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">{it.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-16">
      <div className="container relative">
        <SectionHeading
          eyebrow="PROCESS"
          title={<>From idea to <span className="text-gradient">live.</span></>}
        />

        {/* Horizontal gradient timeline behind cards (visible on desktop) */}
        <div className="pointer-events-none absolute inset-x-0 top-[50%] -translate-y-1/2 hidden lg:block">
          <div className="w-full h-1 bg-gradient-to-r from-primary/20 via-primary-glow/40 to-primary/20 opacity-40 rounded-full" />
        </div>

        {/* Mobile / Tablet: stacked grid without arrows */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
          {[
            ["01","Discover","Your business. Your goals. Your audience."],
            ["02","Plan","Structure, experience and functionality."],
            ["03","Design","Clean, modern and on-brand."],
            ["04","Develop","Fast, responsive and functional."],
            ["05","Test","Cross-device and performance checks."],
            ["06","Launch","Tested. Optimized. Live."],
          ].map((s) => (
            <article key={s[0]} className="glass-card rounded-[16px] border border-primary/20 p-6 flex flex-col">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-md flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-extrabold">
                  {s[0]}
                </div>
                <h3 className="mt-4 text-lg font-bold text-center">{s[1]}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-snug text-center">{s[2]}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: single row with alternating card and arrow siblings so cards stretch equally */}
        <div className="mt-8 hidden lg:flex lg:items-stretch lg:gap-4">
          {(() => {
            const steps = [
              ["01","Discover","Your business. Your goals. Your audience."],
              ["02","Plan","Structure, experience and functionality."],
              ["03","Design","Clean, modern and on-brand."],
              ["04","Develop","Fast, responsive and functional."],
              ["05","Test","Cross-device and performance checks."],
              ["06","Launch","Tested. Optimized. Live."],
            ];
            const nodes: JSX.Element[] = [];
            steps.forEach((s, i) => {
              nodes.push(
                <article key={`card-${i}`} className="glass-card lg:flex-1 h-full rounded-[16px] border border-primary/20 p-6 hover:-translate-y-1 hover:shadow-glow transition-transform duration-300 flex flex-col">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-md flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-extrabold">
                      {s[0]}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-center">{s[1]}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-snug text-center">{s[2]}</p>
                  </div>
                </article>
              );

              if (i < steps.length - 1) {
                nodes.push(
                  <div key={`arrow-${i}`} className="flex items-center h-full px-2" aria-hidden>
                    <div className="w-6 h-6 flex items-center justify-center text-primary/70">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                );
              }
            });
            return nodes;
          })()}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="cta" className="py-20 border-t border-border text-center">
      <div className="container">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">START A PROJECT</span>
        <h2 className="mt-6 font-display text-3xl md:text-4xl">Your next website <span className="text-gradient">starts here.</span></h2>
        <p className="mt-4 text-muted-foreground">Have a project in mind? Let's turn it into something your business can be proud of.</p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="hero">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
          <a className="text-link" href="#">Tell us about your project →</a>
        </div>
      </div>
    </section>

    <FinalCtaBanner />
  </>
);

export default WebDevelopment;
