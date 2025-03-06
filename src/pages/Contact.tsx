
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/blocks/contact-form";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { Glow } from "@/components/ui/glow";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative bg-background py-16 md:py-24 overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-24">
              <div className="max-w-md animate-appear">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">Get in Touch</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a project in mind? Let's talk about how we can help bring your vision to life.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit us</h3>
                      <p className="text-muted-foreground">
                        123 Innovation Street<br />
                        Suite 200<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:hello@novatech.com" className="hover:text-brand transition-colors">
                          hello@novatech.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call us</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+14155552671" className="hover:text-brand transition-colors">
                          +1 (415) 555-2671
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 text-brand">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-lg border backdrop-blur-sm bg-card/30 p-6 md:p-8 animate-appear opacity-0 [animation-delay:200ms]">
                <ContactForm />
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
