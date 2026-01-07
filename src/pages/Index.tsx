import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CitiesSection from "@/components/CitiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import heroConcert from "@/assets/hero-concert.jpg";
import featureDiscover from "@/assets/feature-discover.jpg";
import featureFriends from "@/assets/feature-friends.jpg";
import ctaReady from "@/assets/cta-ready.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection heroImage={heroConcert} />

        <FeatureSection
          title="An event always ready for you"
          highlightedWord="you"
          description="Whether it's a thrilling concert or an exciting sports match, you'll always find an event worth attending. Book your tickets in seconds and never miss out!"
          image={featureDiscover}
          imageAlt="Friends discovering events together"
        />

        <FeatureSection
          title="Make new memories together"
          highlightedWord="memories"
          description="Meet amazing people who share your passion for live entertainment. Expand your circle and create unforgettable experiences with friends old and new!"
          image={featureFriends}
          imageAlt="Group of friends at a music festival"
          reversed
        />

        <CitiesSection />

        <CTASection ctaImage={ctaReady} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
