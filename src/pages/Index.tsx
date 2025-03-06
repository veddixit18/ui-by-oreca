
import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { GitHubIcon } from "@/components/ui/icons";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroWithMockup
          title="Transforming Ideas Into Digital Reality"
          description="We design and develop beautiful websites and mobile apps that drive business growth and deliver exceptional user experiences."
          primaryCta={{
            text: "Start Your Project",
            href: "/contact",
          }}
          secondaryCta={{
            text: "View Our Work",
            href: "/portfolio",
            icon: <GitHubIcon className="mr-2 h-4 w-4" />,
          }}
          mockupImage={{
            alt: "Dashboard design for a web application",
            width: 1248,
            height: 765,
            src: "https://www.launchuicomponents.com/app-light.png"
          }}
        />
        
        <ServicesSection />
        <ProcessSection />
        <ClientsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
