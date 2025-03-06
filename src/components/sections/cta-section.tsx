
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Glow } from "@/components/ui/glow";

export function CtaSection() {
  return (
    <section className="relative bg-muted overflow-hidden">
      <div className="relative z-10 container py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-appear">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground animate-appear opacity-0 [animation-delay:150ms]">
            Let's collaborate to create stunning, functional digital experiences that help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-appear opacity-0 [animation-delay:300ms]">
            <Button asChild size="lg" className="group">
              <a href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/portfolio">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow
          variant="center"
          className="animate-glow"
        />
      </div>
    </section>
  );
}
