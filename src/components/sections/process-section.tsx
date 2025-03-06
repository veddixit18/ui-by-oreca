
import { cn } from "@/lib/utils";
import { CheckCircle2, CircleSlash, Code2, FileCode, Lightbulb, MessageSquare, Rocket, Zap } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We learn about your business, goals, and vision to create a tailored digital strategy.",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    id: 2,
    title: "Planning",
    description: "We outline the project scope, timeline, and deliverables to ensure alignment and clear expectations.",
    icon: <MessageSquare className="h-8 w-8" />,
  },
  {
    id: 3,
    title: "Design",
    description: "Our designers create intuitive, engaging interfaces that align with your brand identity.",
    icon: <FileCode className="h-8 w-8" />,
  },
  {
    id: 4,
    title: "Development",
    description: "Our engineers build scalable, maintainable code using modern technologies and best practices.",
    icon: <Code2 className="h-8 w-8" />,
  },
  {
    id: 5,
    title: "Testing",
    description: "Rigorous quality assurance ensures your product is reliable, secure, and user-friendly.",
    icon: <CircleSlash className="h-8 w-8" />,
  },
  {
    id: 6,
    title: "Launch",
    description: "We deploy your solution with careful planning to ensure a smooth transition.",
    icon: <Rocket className="h-8 w-8" />,
  },
  {
    id: 7,
    title: "Support",
    description: "Ongoing maintenance and optimization keep your digital products performing at their best.",
    icon: <CheckCircle2 className="h-8 w-8" />,
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
            <Zap className="mr-1 h-3.5 w-3.5" />
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">Our Process</h2>
          <p className="text-lg text-muted-foreground">
            A streamlined approach to delivering exceptional digital solutions
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connection line */}
          <div className="absolute left-[50%] top-0 h-full w-px bg-border/60 md:left-[15%] lg:left-[21%]" />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={step.id}
                className="relative flex flex-col md:flex-row md:gap-16 items-center md:items-start"
              >
                {/* Circle on timeline */}
                <div className="absolute left-[50%] md:left-[15%] lg:left-[21%] -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div 
                  className={cn(
                    "flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-0",
                    "md:w-5/12 md:pr-16 md:pt-3 lg:w-1/4",
                    "animate-appear opacity-0",
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto md:order-2",
                    index === 0 && "[animation-delay:100ms]",
                    index === 1 && "[animation-delay:200ms]",
                    index === 2 && "[animation-delay:300ms]",
                    index === 3 && "[animation-delay:400ms]",
                    index === 4 && "[animation-delay:500ms]",
                    index === 5 && "[animation-delay:600ms]",
                    index === 6 && "[animation-delay:700ms]",
                  )}
                >
                  <div className="mb-4 rounded-full bg-muted p-2.5 ring-1 ring-border/50">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
