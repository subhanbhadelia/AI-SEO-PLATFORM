import { Link } from "react-router-dom";
import { ArrowRight, MonitorUp, Search, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { FinalCtaBanner } from "@/components/FinalCtaBanner";
import { PhraseTicker } from "@/components/PhraseTicker";
import { Reveal } from "@/components/Reveal";
import { HeroAnimatedBg } from "@/components/HeroAnimatedBg";
import { IndustriesStrip } from "@/components/IndustriesStrip";
import { LogoTicker } from "@/components/LogoTicker";
import { CAL_LINK } from "@/lib/cal";

const POSITIONING =
  "Orbit P1 provides SEO, AI SEO, website development and lead generation services to help businesses increase visibility, generate qualified leads and grow online.";

const growthFlow = [
  { stage: "Get Found", detail: "SEO + AI SEO" },
  { stage: "Convert", detail: "Website Development" },
  { stage: "Generate", detail: "Lead Generation" },
  { stage: "Grow", detail: "Your business" },
];

const services = [
  {
    n: "01",
    stage: "Get found",
    icon: Search,
    title: "SEO & AI SEO",
    headline: "Get found where customers search",
    desc: "Improve your visibility across Google and emerging AI search platforms.",
    href: "/seo",
    link: "Explore SEO",
  },
  {
    n: "02",
    stage: "Convert attention",
    icon: MonitorUp,
    title: "Website Development",
    headline: "Turn visitors into customers",
    desc: "Modern, responsive and conversion-focused websites built around business growth.",
    href: "/web-development",
    link: "Explore Websites",
  },
  {
    n: "03",
    stage: "Create opportunity",
    icon: Target,
    title: "Lead Generation",
    headline: "Create more sales opportunities",
    desc: "Build targeted lead generation systems designed to connect your business with the right prospects.",
    href: "/lead-generation",
    link: "Explore Lead Generation",
  },
];

const whyPoints = [
  {
    title: "Search Visibility",
    desc: "Be discovered where your customers are searching.",
  },
  {
    title: "Conversion Focused",
    desc: "Turn traffic and attention into real business opportunities.",
  },
  {
    title: "Connected Systems",
    desc: "Your website, search strategy and lead generation work together.",
  },
  {
    title: "Measurable Growth",
    desc: "Track what matters — leads, opportunities and revenue.",
  },
];

const process = [
  { n: "01", t: "Understand", d: "We learn your business, market and growth objectives." },
  { n: "02", t: "Build", d: "We create the right digital systems around your goals." },
  { n: "03", t: "Optimise", d: "We continuously improve performance based on real results." },
];

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Orbit P1",
    url: typeof window !== "undefined" ? window.location.origin : "/",
    description: POSITIONING,
    sameAs: [],
  };

  return (
    <>
      <Seo
        title="Orbit P1 — Digital Growth Systems"
        description={POSITIONING}
        path="/"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden isolate pt-8 pb-20 md:pt-16 md:pb-24">
        <HeroAnimatedBg />
        <div className="orbit-field pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-[220px] -right-[180px] h-[640px] w-[640px] rounded-full border border-white/[0.07]" />
          <div className="absolute -top-[100px] -right-[60px] h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
          <div className="absolute top-[130px] right-[210px] h-1.5 w-1.5 rounded-full bg-gradient-primary shadow-[0_0_16px_2px_hsl(var(--primary)/0.6)]" />
          <div className="absolute -top-10 right-[420px] h-1 w-1 rounded-full bg-gradient-primary" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[13.5px] text-muted-foreground animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
              Digital growth, engineered
            </span>

            <h1 className="mt-7 font-display text-[clamp(2.375rem,5.2vw,4.125rem)] font-bold tracking-[-0.02em] leading-[1.05] animate-fade-in">
              Digital growth systems built to get you found, generate leads and grow
            </h1>

            <p className="mt-6 max-w-[560px] text-[19px] leading-relaxed text-muted-foreground animate-fade-in">
              SEO, AI SEO, high-converting websites and lead generation systems designed to help businesses turn visibility into measurable growth.
            </p>

            <div className="mt-9 animate-fade-in">
              <Button asChild variant="hero" size="xl">
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  Book A Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PhraseTicker
        phrases={[
          "SEO",
          "AI SEO",
          "Website Development",
          "Lead Generation",
          "Digital Growth Systems",
        ]}
        variant="subtle"
        speed="normal"
      />

      <LogoTicker />
      <IndustriesStrip />

      <section className="container py-24 md:py-[110px] text-center">
        <Reveal>
          <p className="text-sm font-semibold text-primary mb-4">Our approach</p>
          <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold tracking-[-0.015em] leading-[1.15]">
            More than just digital marketing
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-lg text-muted-foreground">
            Orbit P1 builds connected growth systems that help businesses get discovered, convert attention and generate new opportunities.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-7 md:gap-0 max-w-[920px] mx-auto">
          {growthFlow.map((item, i) => (
            <div key={item.stage} className="contents">
              <div className="flex flex-col items-center gap-2.5 min-w-[150px] px-7">
                <p className="font-bold text-[17px]">{item.stage}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
              {i < growthFlow.length - 1 && (
                <span className="text-xl text-muted-foreground/50 rotate-90 md:rotate-0" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative overflow-hidden border-y border-border py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        <div className="container relative">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary mb-4">What we do</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.05] max-w-[650px]">
                  Three systems. <span className="text-gradient-primary">One growth engine.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:pb-1">
                Built to move your audience from first search to meaningful conversation.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <Link to={s.href} className="block h-full cursor-grow group" aria-label={s.link}>
                <article className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-secondary/80 to-primary/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-glow md:p-8">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_24px_hsl(var(--primary)/0.12)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-4xl font-bold tracking-tight text-foreground/10">{s.n}</span>
                  </div>
                  <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary">{s.stage}</p>
                  <h3 className="relative mt-3 font-display text-[25px] font-bold tracking-[-0.01em] leading-snug">
                    {s.headline}
                  </h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="relative mt-auto flex items-center justify-between border-t border-border/80 pt-6">
                    <span className="text-[13px] font-semibold text-primary">{s.link}</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground" aria-hidden>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container py-24">
          <Reveal>
            <p className="text-sm font-semibold text-primary mb-4">Why Orbit P1</p>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold tracking-[-0.015em] max-w-[640px]">
              Built around growth, not vanity metrics
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[14px] border border-border bg-border">
            {whyPoints.map((point) => (
              <div key={point.title} className="bg-background p-8">
                <h3 className="text-[17px] font-bold">{point.title}</h3>
                <p className="mt-2.5 text-[14.5px] text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="container py-24">
        <Reveal>
          <p className="text-sm font-semibold text-primary mb-4">How we work</p>
          <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold tracking-[-0.015em]">
            How we build growth
          </h2>
        </Reveal>

        <div className="relative mt-16 flex flex-col gap-9 md:flex-row md:gap-0">
          <div className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px bg-border md:block" />
          {process.map((step) => (
            <div key={step.n} className="relative flex-1 md:pr-8 last:md:pr-0">
              <div className="relative z-[2] mb-6 grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary text-[13px] font-bold">
                {step.n}
              </div>
              <h3 className="text-[19px] font-bold">{step.t}</h3>
              <p className="mt-2.5 text-[14.5px] text-muted-foreground max-w-xs">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCtaBanner
        title="Ready to build your next growth system?"
        description="Let's identify where your business can improve visibility, generate more opportunities and grow."
        ctaLabel="Book A Call"
      />
    </>
  );
};

export default Index;
