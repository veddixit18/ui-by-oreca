
import { Check, Code, Palette, BarChart, MessageSquare, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "From simple landing pages to complex web applications, we create responsive, fast, and secure websites.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces designed with a focus on usability and visual appeal.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to increase your online presence and drive meaningful engagement.",
    icon: <BarChart className="h-6 w-6" />,
  },
  {
    title: "Consulting",
    description: "Expert advice on technology strategy, digital transformation, and product development.",
    icon: <MessageSquare className="h-6 w-6" />,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We provide end-to-end digital solutions to help businesses transform and thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={cn(
                "bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden group",
                "animate-appear opacity-0",
                index === 0 && "[animation-delay:100ms]",
                index === 1 && "[animation-delay:200ms]",
                index === 2 && "[animation-delay:300ms]",
                index === 3 && "[animation-delay:400ms]",
                index === 4 && "[animation-delay:500ms]",
              )}
            >
              <div className="absolute right-0 top-0 h-16 w-16 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-2xl group-hover:bg-brand/20 transition-all duration-500" />
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-brand mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mr-2 text-brand" />
                    <span>Expert team</span>
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mr-2 text-brand" />
                    <span>Fast delivery</span>
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mr-2 text-brand" />
                    <span>Support &amp; maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
