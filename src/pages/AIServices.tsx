import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { FinalCtaBanner } from "@/components/FinalCtaBanner";
import { CAL_LINK } from "@/lib/cal";
import { MessageSquare, Settings, Puzzle, BarChart2, Zap, ShieldCheck, Lock, Brain, TrendingUp, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { HeroAnimatedBg } from "@/components/HeroAnimatedBg";
import { PhraseTicker } from "@/components/PhraseTicker";

const AIServices = () => (
  <>
    <Seo
      title="AI Services — Orbit P1"
      description="Orbit P1 builds AI chatbots, workflow automation and custom AI integrations that help businesses save time, cut costs and make smarter decisions."
      path="/ai-services"
    />

    {/* HERO */}
    <header className="relative py-24 md:py-32 text-center">
      <HeroAnimatedBg />
      <div className="container relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          AI SERVICES
        </span>

        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">
          We build AI that <span className="text-gradient">means business.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Smart, reliable AI systems — chatbots, automation and custom integrations — built to help businesses save time, cut costs and make better decisions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild variant="hero">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#cta">Get a Quote</a>
          </Button>
        </div>
      </div>

      <PhraseTicker
        phrases={[
          "AI Chatbots",
          "Workflow Automation",
          "AI Integrations",
          "Data & Analytics",
          "Custom AI Tools",
          "LLM Integration",
          "Built to Scale",
        ]}
        variant="subtle"
        speed="slow"
        className="mt-10"
      />
    </header>

    {/* INTRO */}
    <section className="py-16">
      <div className="container grid md:grid-cols-[.9fr,1.1fr] gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Your business runs on decisions. Make them smarter.</h2>
        </div>
        <div>
          <p className="text-muted-foreground">We combine automation, data and AI models to build systems that cut manual work, respond to customers instantly and help your team make better decisions, every day.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Practical</span>
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Reliable</span>
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Secure</span>
            <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-semibold">Built for Business</span>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES GRID */}
    <section className="py-16">
      <div className="container">
        <SectionHeading
          eyebrow="AI offerings"
          title={<>Custom models, automation, and AI-enabled growth</>}
          description="We help companies integrate AI into products and marketing through safe, scalable, and measurable implementations."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={40}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <MessageSquare className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">AI Chatbots</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">01</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Answers your customers get instantly.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">AI-powered chatbots and virtual assistants that handle enquiries, support and bookings around the clock.</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Website &amp; WhatsApp chatbots</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Customer support automation</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Lead capture &amp; qualification</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Booking &amp; enquiry handling</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Custom brand voice &amp; training</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Human hand-off when needed</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <Settings className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">Workflow Automation</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">02</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Less busywork. More done.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">Automations that connect your tools and handle repetitive tasks.</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Process &amp; task automation</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> App &amp; tool integrations</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Document &amp; data processing</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Email &amp; notification workflows</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Internal approval flows</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Ongoing monitoring</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <Puzzle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">AI Integrations</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">03</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Intelligence, built into your product.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">Custom AI features and LLM-powered integrations built into your website, app or internal tools.</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> LLM-powered features</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Custom AI integrations</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> API &amp; third-party AI tools</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Content &amp; search tools</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Recommendation engines</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Ongoing optimization</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary-glow/30 to-primary/30" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary">
                    <BarChart2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="tagline uppercase text-xs font-bold tracking-widest text-primary mt-3">Data &amp; AI Analytics</span>
                </div>
                <span className="num absolute top-4 right-6 text-4xl font-extrabold text-primary opacity-10 select-none pointer-events-none">04</span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Numbers that tell you what's next.</h3>
              <p className="desc mt-2 text-sm text-muted-foreground leading-snug">Data pipelines and AI-powered dashboards that turn business data into actionable insight.</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Data pipelines &amp; cleanup</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Custom dashboards</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Predictive insights</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Reporting automation</li>
                <li className="flex items-start gap-3 text-sm"><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/20 text-primary"><Check className="w-3 h-3"/></span> Cloud data infrastructure</li>
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
        <h2 className="font-display text-3xl md:text-5xl">Good automation saves time. <span className="text-gradient">Great AI creates advantage.</span></h2>
        <PhraseTicker
          phrases={["Strategy", "Data", "Automation", "Intelligence", "Performance"]}
          variant="oversized"
          speed="normal"
          className="mt-6"
        />
      </div>
    </section>

    {/* WHY */}
    <section className="py-16">
      <div className="container">
        <SectionHeading
          eyebrow="WHY ORBIT P1"
          title={<>Built <span className="text-gradient">differently.</span></>}
          description="No unnecessary complexity. No cluttered experiences. Just AI built around what matters."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { key: 'fast', icon: <Zap className="h-5 w-5 text-primary-foreground" />, title: 'Fast', desc: 'Built for speed.' },
            { key: 'reliable', icon: <ShieldCheck className="h-5 w-5 text-primary-foreground" />, title: 'Reliable', desc: 'Consistent, dependable results.' },
            { key: 'secure', icon: <Lock className="h-5 w-5 text-primary-foreground" />, title: 'Secure', desc: 'Your data handled responsibly.' },
            { key: 'practical', icon: <Brain className="h-5 w-5 text-primary-foreground" />, title: 'Practical', desc: 'Built for real use cases.' },
            { key: 'scalable', icon: <TrendingUp className="h-5 w-5 text-primary-foreground" />, title: 'Scalable', desc: 'Grows with your business.' },
            { key: 'integrated', icon: <Puzzle className="h-5 w-5 text-primary-foreground" />, title: 'Integrated', desc: 'Works with your existing tools.' },
          ].map((it, i) => (
            <Reveal key={it.key} delay={i * 60}>
              <article className="glass-card relative overflow-hidden rounded-[20px] border border-primary/20 hover:border-primary/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow p-6">
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
    <section className="relative overflow-hidden border-y border-border py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container relative">
        <SectionHeading
          eyebrow="PROCESS"
          title={<>From idea to <span className="text-gradient">intelligence.</span></>}
          description="A practical path from your first workflow question to a reliable AI system your team can use every day."
        />

        <ol className="relative mt-16 grid gap-5 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:gap-x-24">
          <div className="absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/70 to-primary/10 md:block" />
          {[
            ["01", "Discover", "Your workflows, your data, your goals."],
            ["02", "Plan", "Approach, tools and integration points."],
            ["03", "Build", "Models, automations and interfaces."],
            ["04", "Train & Test", "Accuracy, edge cases and safety checks."],
            ["05", "Integrate", "Connected to your existing systems."],
            ["06", "Launch", "Live, monitored and supported."],
          ].map((step, i) => (
            <Reveal key={step[0]} delay={i * 70}>
              <li className={`relative ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <article className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow md:p-7">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary shadow-[0_0_24px_hsl(var(--primary)/0.12)]">
                      {step[0]}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary/70">System phase</p>
                      <h3 className="mt-1 font-display text-xl font-semibold">{step[1]}</h3>
                    </div>
                  </div>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{step[2]}</p>
                  <div className="mt-6 h-px w-1/3 bg-gradient-to-r from-primary/60 to-transparent transition-all duration-300 group-hover:w-2/3" />
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    {/* CTA */}
    <section id="cta" className="py-20 border-t border-border text-center">
      <div className="container">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">START A PROJECT</span>
        <h2 className="mt-6 font-display text-3xl md:text-4xl">Your next AI system <span className="text-gradient">starts here.</span></h2>
        <p className="mt-4 text-muted-foreground">Have a workflow you want to automate, or an idea for AI in your product? Let's build it together.</p>

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

export default AIServices;
