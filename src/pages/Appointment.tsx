
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppointmentForm } from "@/components/blocks/appointment-form";
import { Glow } from "@/components/ui/glow";

const Appointment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative bg-background py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="container max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gradient mb-4 animate-appear">
                Schedule an Appointment
              </h1>
              <p className="text-muted-foreground max-w-[600px] md:text-lg animate-appear opacity-0 [animation-delay:200ms]">
                Book a consultation with our team to discuss your project needs. We're here to help turn your ideas into reality.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 md:p-8 shadow-lg animate-appear opacity-0 [animation-delay:400ms]">
              <AppointmentForm />
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Glow
              variant="center"
              className="animate-appear-zoom opacity-0 [animation-delay:600ms]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
