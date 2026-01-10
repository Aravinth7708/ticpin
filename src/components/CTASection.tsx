import { Button } from "@/components/ui/button";
import { Ticket, Download } from "lucide-react";

interface CTASectionProps {
  ctaImage: string;
}

const CTASection = ({ ctaImage }: CTASectionProps) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 lg:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
            Ready to start <span className="text-primary">booking</span>?
          </h2>

          <p className="text-base lg:text-xl text-gray-700 max-w-2xl mx-auto">
            Download the TicPin app for seamless bookings. Reserve dining tables, buy event tickets, and book turf slots—all with instant confirmation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all duration-300 rounded-full px-6 lg:px-8 h-12 lg:h-14 text-sm lg:text-base gap-2 w-full sm:w-auto"
            >
              <Download className="w-4 h-4 lg:w-5 lg:h-5" />
              Download App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary transition-all duration-300 rounded-full px-6 lg:px-8 h-12 lg:h-14 text-sm lg:text-base gap-2 w-full sm:w-auto"
            >
              <Ticket className="w-4 h-4 lg:w-5 lg:h-5" />
              Book Now
            </Button>
          </div>

          {/* Optional CTA Image - Hidden on mobile for better performance */}
          <div className="mt-12 relative hidden lg:block">
            <div className="relative">
              <img
                src={ctaImage}
                alt="Dining, events, and sports experiences"
                className="w-full max-w-2xl mx-auto h-auto object-cover shadow-2xl mix-blend-screen opacity-90"
                style={{ filter: 'saturate(1.1) contrast(1.05)' }}
              />
              <div className="absolute -inset-8 bg-primary/10 blur-[80px] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
