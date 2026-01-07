import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

interface CTASectionProps {
  ctaImage: string;
}

const CTASection = ({ ctaImage }: CTASectionProps) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 animate-scale-in">
              <span className="text-transparent bg-clip-text" style={{
                WebkitTextStroke: '2px hsl(var(--foreground))'
              }}>
                Ready to
              </span>
              <br />
              <span className="text-transparent bg-clip-text" style={{
                WebkitTextStroke: '2px hsl(var(--foreground))'
              }}>
                Experience?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Let's get your tickets booked
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-full px-8 h-14 text-lg gap-3 shadow-lg hover:shadow-2xl"
              >
                Start Booking
                <div className="flex items-center gap-2">
                  <Apple className="w-5 h-5" />
                  <Play className="w-5 h-5" />
                </div>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10">
            <div className="relative">
              <img
                src={ctaImage}
                alt="Get ready to book"
                className="w-full h-auto rounded-2xl object-cover animate-float shadow-2xl"
              />
              <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
