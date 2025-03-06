
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center flex flex-col items-center gap-6 animate-appear">
            <p className="text-sm font-medium text-brand">404 Error</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">Page Not Found</h1>
            <p className="text-xl text-muted-foreground max-w-[550px] mx-auto">
              We couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <a href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Home
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
