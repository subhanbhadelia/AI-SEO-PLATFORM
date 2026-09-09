import { cn } from "@/lib/utils";

type TickerVariant = "subtle" | "contrast" | "oversized";
type TickerSpeed = "slow" | "normal";

interface PhraseTickerProps {
  phrases: string[];
  variant?: TickerVariant;
  speed?: TickerSpeed;
  className?: string;
}

const speeds: Record<TickerSpeed, string> = {
  slow: "animate-marquee-slow",
  normal: "animate-marquee",
};

export const PhraseTicker = ({
  phrases,
  variant = "subtle",
  speed = "slow",
  className,
}: PhraseTickerProps) => {
  const loop = [...phrases, ...phrases];

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        variant === "subtle" && "border-y border-border bg-secondary py-[18px]",
        variant === "contrast" && "border-y border-primary/20 bg-primary py-4",
        variant === "oversized" && "border-y border-border bg-secondary/40 py-6 md:py-8",
        className,
      )}
      aria-hidden
    >
      <div className={cn("flex w-max whitespace-nowrap", speeds[speed])}>
        {loop.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className={cn(
              "inline-flex items-center",
              variant === "subtle" && "text-[15px] text-muted-foreground",
              variant === "contrast" && "text-sm md:text-base font-medium tracking-wide text-primary-foreground",
              variant === "oversized" && "font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground/80",
            )}
          >
            <span className="px-4 md:px-6">{phrase}</span>
            <span
              className={cn(
                "select-none",
                variant === "subtle" && "text-primary/60",
                variant === "contrast" && "text-primary-foreground/50",
                variant === "oversized" && "text-primary px-2 md:px-4",
              )}
            >
              {variant === "oversized" ? "•" : "•"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
