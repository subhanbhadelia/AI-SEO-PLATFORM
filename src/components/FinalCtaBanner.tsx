import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAL_LINK } from "@/lib/cal";

interface FinalCtaBannerProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  ctaLabel?: string;
}

export const FinalCtaBanner = ({
  eyebrow,
  title = (
    <>
      <span className="text-gradient">Ready To Build Your Next </span>
      <span className="text-gradient-animated">Growth System?</span>
    </>
  ),
  description = "Let's identify where your business can improve visibility, generate more opportunities and grow.",
  ctaLabel = "Book A Call",
}: FinalCtaBannerProps) => (
  <section className="container py-20">
    <div className="relative glass-card p-10 md:p-16 text-center overflow-hidden">
      <div className="aurora-bg z-0" aria-hidden />
      <div className="relative z-10">
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
        )}
        <h2 className="font-display text-3xl md:text-5xl font-bold">{title}</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{description}</p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
