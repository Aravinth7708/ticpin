import { Button } from "@/components/ui/button";
import { Apple, Play, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      {/* Diagonal accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-accent transform -skew-y-1" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="z-10 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 animate-scale-in">
              The easiest way
              <br />
              to book <span className="text-gradient animate-gradient">tickets</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Discover amazing events near you and book your spot in seconds. From concerts to sports, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
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
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg border-border hover:bg-secondary hover:scale-105 transition-all duration-300 gap-2 shadow-md"
              >
                Explore Events
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 order-1 lg:order-2">
            <div className="relative">
              <img
                src={heroImage}
                alt="Excited fans at a concert"
                className="w-full h-auto rounded-2xl object-cover animate-float"
              />
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
