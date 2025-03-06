
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const services = [
  "Website Consultation", "App Development Planning", 
  "UI/UX Design Review", "Digital Marketing Strategy",
  "Technical Support", "Project Scoping"
];

export function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Appointment scheduled!",
        description: `Your appointment has been scheduled for ${format(selectedDate!, "PPPP")} at ${selectedTime}`,
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-appear">
          <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-2">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold">Appointment Scheduled!</h3>
          <p className="text-muted-foreground">
            We've scheduled your appointment for {selectedDate && format(selectedDate, "PPPP")} at {selectedTime}.
            A confirmation email has been sent to your inbox.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setIsSubmitted(false)}
          >
            Schedule another appointment
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-appear opacity-0 [animation-delay:100ms]">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select onValueChange={setSelectedService} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional notes (optional)</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className={cn(
                      "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                      "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2",
                      "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    )}
                    placeholder="Tell us more about your project or questions"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-appear opacity-0 [animation-delay:300ms]">
              <h3 className="text-xl font-semibold">Schedule</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <Label>Select a date</Label>
                  </div>
                  <div className="border rounded-md p-2">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => 
                        date < new Date() || 
                        date.getDay() === 0 || 
                        date.getDay() === 6
                      }
                      className="pointer-events-auto"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Label>Select a time</Label>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={cn(
                          "justify-center hover:shadow-sm transition-all duration-200",
                          selectedTime === time && "bg-brand hover:bg-brand/90"
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full md:w-auto animate-appear opacity-0 [animation-delay:500ms]"
            disabled={!selectedDate || !selectedTime || !selectedService || isLoading}
          >
            {isLoading ? "Scheduling..." : "Schedule Appointment"}
          </Button>
        </form>
      )}
    </div>
  );
}
