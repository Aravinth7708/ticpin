import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CitiesSection from "@/components/CitiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import heroAthletes from "@/assets/hero-athletes.png";
import featureSportsPeople from "@/assets/feature-sports-people.png";
import ctaSports from "@/assets/cta-sports.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Content wrapper */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection heroImage={heroAthletes} />

          <FeatureSection
            title="Reserve your table at top "
            highlightedWord="restaurants"
            description="Browse through hundreds of dining options, check real-time availability, and book your table instantly. From fine dining to casual eateries, find the perfect spot for any occasion."
            image="/restaurant-dining.jpg"
            imageAlt="Dining experiences"
          />

          <FeatureSection
            title="Book tickets for amazing events"
            highlightedWord="events"
            description="Never miss out on concerts, shows, festivals, and live performances. Get instant booking confirmation and secure your seats for unforgettable experiences."
            image="/events-concerts.jpg"
            imageAlt="Live events and entertainment"
            reversed
          />

          <FeatureSection
            title="Secure turf slots for your game"
            highlightedWord="turf"
            description="Find and book sports turfs near you. Whether it's football, cricket, or badminton, book your slot in seconds and play at your convenience."
            image="/sports-turf.png"
            imageAlt="Sports turf booking"
          />

          <CitiesSection />

          <CTASection ctaImage={ctaSports} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
