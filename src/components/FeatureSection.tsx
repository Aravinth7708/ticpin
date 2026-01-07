interface FeatureSectionProps {
  title: string;
  highlightedWord: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

const FeatureSection = ({
  title,
  highlightedWord,
  description,
  image,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) => {
  const titleParts = title.split(highlightedWord);

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`relative ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative group">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02] shadow-xl"
              />
              {/* Decorative shapes */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10 hidden lg:block transition-transform duration-500 group-hover:rotate-6" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-2xl -z-10 hidden lg:block transition-transform duration-500 group-hover:-rotate-6" />
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className={`${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-up">
              {titleParts[0]}
              <span className="text-gradient">{highlightedWord}</span>
              {titleParts[1]}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
