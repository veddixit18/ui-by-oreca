
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Nova Tech transformed our outdated website into a modern digital experience that's dramatically increased our conversion rates. Their team was incredibly professional and responsive throughout the entire process.",
    author: "Sarah Johnson",
    role: "Marketing Director, GreenLeaf Solutions",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    content: "We approached Nova Tech to develop our mobile app, and they delivered beyond our expectations. The app is intuitive, fast, and our customers love it. What impressed me most was their attention to detail and commitment to quality.",
    author: "Michael Chen",
    role: "CEO, TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 3,
    content: "Working with Nova Tech on our e-commerce platform was a game-changer for our business. They carefully understood our needs and created a solution that has significantly improved our operational efficiency and customer experience.",
    author: "Emma Rodriguez",
    role: "Operations Manager, Retail Innovations",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    content: "The UI/UX design work that Nova Tech did for our SaaS platform completely revitalized our product. User engagement is up, and we've received countless compliments on the intuitive interface and clean aesthetics.",
    author: "David Thompson",
    role: "Product Manager, CloudSoft",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
            <MessageSquare className="mr-1 h-3.5 w-3.5" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from some of our satisfied clients
          </p>
        </div>

        <div className="mt-12">
          <div className="relative mx-auto max-w-3xl">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={cn(
                  "absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out",
                  index === activeIndex
                    ? "opacity-100 translate-x-0 shadow-xl"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <CardContent className="p-6 md:p-10">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-16 w-16">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="rounded-full object-cover"
                      />
                      <span className="absolute right-0 bottom-0 h-4 w-4 rounded-full bg-brand" />
                    </div>
                  </div>
                  
                  <blockquote className="mb-6 text-center text-lg md:text-xl italic text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Static card for proper height */}
            <Card className="invisible">
              <CardContent className="p-6 md:p-10">
                <div className="mb-6 flex justify-center">
                  <div className="relative h-16 w-16">
                    <div className="rounded-full h-full w-full" />
                  </div>
                </div>
                <blockquote className="mb-6 text-center text-lg md:text-xl">
                  {testimonials[0].content}
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold">{testimonials[0].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[0].role}</div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation controls */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    index === activeIndex ? "bg-brand" : "bg-muted-foreground/20 hover:bg-muted-foreground/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
