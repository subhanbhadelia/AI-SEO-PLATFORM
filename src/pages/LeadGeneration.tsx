import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { HeroAnimatedBg } from "@/components/HeroAnimatedBg";
import { PhraseTicker } from "@/components/PhraseTicker";
import { Reveal } from "@/components/Reveal";
import { FinalCtaBanner } from "@/components/FinalCtaBanner";
import { CAL_LINK } from "@/lib/cal";

const approach = [
  {
    n: "01",
    t: "Find",
    d: "We identify businesses that closely match your ideal customer profile. Industry, location, company size, role, and other relevant criteria are used to keep targeting focused.",
  },
  {
    n: "02",
    t: "Reach",
    d: "We identify the right decision-makers and create personalised outbound campaigns designed to get their attention.",
  },
  {
    n: "03",
    t: "Engage",
    d: "We manage outreach and follow-ups with one goal — creating genuine conversations with potential customers.",
  },
];

const included = [
  "Ideal customer profile development",
  "Target company research",
  "Decision-maker identification",
  "Prospect list building",
  "Contact research",
  "Outreach strategy",
  "Personalised messaging",
  "Cold email outreach",
  "Follow-up sequences",
  "Campaign management",
  "Campaign optimisation",
  "Performance reporting",
];

const process = [
  { n: "01", t: "Define", d: "We understand your business, offer, target market, and ideal customer." },
  { n: "02", t: "Research", d: "We identify companies and decision-makers that match your criteria." },
  { n: "03", t: "Build", d: "We create your prospect database and outbound campaign." },
  { n: "04", t: "Launch", d: "Personalised outreach and follow-ups begin." },
  { n: "05", t: "Optimise", d: "We monitor campaign performance and continuously refine targeting and messaging." },
];

const philosophy = [
  {
    t: "Better targeting",
    d: "Focus your outreach on businesses that match your ideal customer.",
  },
  {
    t: "Better messaging",
    d: "Create communication around the prospect rather than sending generic pitches.",
  },
  {
    t: "Better opportunities",
    d: "Build conversations with businesses that could genuinely become customers.",
  },
];

const whoFor = [
  "Agencies",
  "Professional services",
  "SaaS",
  "Technology companies",
  "Manufacturers",
  "Wholesalers",
  "B2B service providers",
];

const LeadGeneration = () => (
  <>
    <Seo
      title="B2B Lead Generation | Orbit P1"
      description="Turn the right prospects into real conversations. Orbit P1 builds targeted B2B outbound campaigns that reach decision-makers and grow your pipeline."
      path="/lead-generation"
    />

    <header className="relative overflow-hidden isolate">
      <HeroAnimatedBg />
      <div className="container relative z-10 pt-16 md:pt-24 pb-16 text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          B2B lead generation
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
          Turn the right prospects into{" "}
          <span className="text-gradient-animated">real conversations.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We help businesses identify, reach, and engage the right decision-makers through targeted B2B outbound campaigns.
        </p>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book a call <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1 text-sm text-muted-foreground">
          <span>Targeted prospecting</span>
          <span>Decision-maker research</span>
          <span>Personalised outreach</span>
        </div>
      </div>
    </header>

    <PhraseTicker
      phrases={[
        "Find the right prospects",
        "Reach decision-makers",
        "Start conversations",
        "Build your pipeline",
        "Create opportunities",
      ]}
      variant="contrast"
      speed="slow"
    />

    <section className="container py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary">The challenge</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
          Your next customers are out there.{" "}
          <span className="text-gradient-primary">Reaching them is the hard part.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Finding companies is easy. Finding the right companies, identifying the people who make the decisions, and reaching them with a message that gets attention is different. That’s where we come in.
        </p>
      </Reveal>
    </section>

    <section className="container py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Our approach</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold max-w-3xl">
          We build the path from prospect to conversation.
        </h2>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {approach.map((card, i) => (
          <Reveal key={card.n} delay={i * 90}>
            <article className="glass-card p-8 md:p-10 h-full min-h-[280px]">
              <p className="font-display text-sm tracking-[0.2em] text-primary">{card.n}</p>
              <h3 className="mt-4 font-display text-3xl font-bold">{card.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{card.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="container relative z-10 text-center">
        <Reveal>
          <p className="text-sm text-muted-foreground">Lead generation should be about quality.</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Not more leads.{" "}
            <span className="text-gradient-animated">Better prospects.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground text-lg">
            We focus on reaching businesses that actually make sense for your offer rather than filling your pipeline with irrelevant contacts.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="container py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary">What we handle</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold max-w-3xl">
          Everything needed to run targeted outbound.
        </h2>
      </Reveal>
      <ul className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-4">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-3 text-foreground/90">
            <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary shrink-0">
              <Check className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>

    <PhraseTicker
      phrases={["Target", "Research", "Reach", "Engage", "Follow up", "Convert", "Repeat"]}
      variant="oversized"
      speed="normal"
      className="my-8"
    />

    <section className="container py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary">The process</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold max-w-3xl">
          From your target market to their inbox.
        </h2>
      </Reveal>
      <ol className="mt-14 grid gap-8 md:grid-cols-5 relative">
        <div className="roadmap-line hidden md:block" />
        {process.map((step, i) => (
          <Reveal key={step.n} delay={i * 70}>
            <li className="relative text-center">
              <div className="roadmap-step-dot text-sm mx-auto">{step.n}</div>
              <h3 className="mt-5 font-display text-xl font-semibold">{step.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>

    <section className="container py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Our philosophy</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
          Because 1,000 random contacts aren't 1,000 opportunities.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Successful lead generation isn't about building the biggest database. It's about identifying relevant businesses, reaching the right person, and giving them a genuine reason to respond.
        </p>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {philosophy.map((card, i) => (
          <Reveal key={card.t} delay={i * 80}>
            <article className="glass-card p-6 md:p-8 h-full">
              <h3 className="font-display text-xl font-semibold">{card.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Built for B2B</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold max-w-3xl">
          For businesses ready to grow their pipeline.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Our lead generation service is designed for B2B companies looking for a more structured and proactive approach to finding new customers.
        </p>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-3">
        {whoFor.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground/90"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>

    <FinalCtaBanner
      eyebrow="Ready to grow?"
      title={
        <>
          <span className="text-gradient">Your next customer could be </span>
          <span className="text-gradient-animated">one conversation away.</span>
        </>
      }
      description="Let’s build a targeted outbound system that puts your business in front of the right people."
      ctaLabel="Book a call"
    />
  </>
);

export default LeadGeneration;
