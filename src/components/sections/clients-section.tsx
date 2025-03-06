
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const clients = [
  { id: 1, name: "Acme Corp", logo: "https://via.placeholder.com/150x60?text=ACME" },
  { id: 2, name: "Globex", logo: "https://via.placeholder.com/150x60?text=GLOBEX" },
  { id: 3, name: "Initech", logo: "https://via.placeholder.com/150x60?text=INITECH" },
  { id: 4, name: "Massive Dynamic", logo: "https://via.placeholder.com/150x60?text=MASSIVE" },
  { id: 5, name: "Umbrella Corp", logo: "https://via.placeholder.com/150x60?text=UMBRELLA" },
  { id: 6, name: "Stark Industries", logo: "https://via.placeholder.com/150x60?text=STARK" },
  { id: 7, name: "Wayne Enterprises", logo: "https://via.placeholder.com/150x60?text=WAYNE" },
];

export function ClientsSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl font-medium mb-4 text-gradient">Trusted by Leading Companies</h2>
            <p className="text-muted-foreground">
              We've helped businesses of all sizes transform their digital presence
            </p>
          </div>
          
          <div className="w-full overflow-hidden">
            <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
              {clients.map((client, index) => (
                <div 
                  key={client.id}
                  className={cn(
                    "transition-all duration-500 grayscale hover:grayscale-0 hover:scale-110",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                    isInView && `transition-delay-${index * 100}`
                  )}
                  style={{ 
                    transitionDelay: isInView ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-8 object-contain max-w-[120px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
