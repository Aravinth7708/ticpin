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
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`${reversed ? 'lg:order-2' : 'lg:order-1'} space-y-4 lg:space-y-6 order-first`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              {titleParts[0]}
              <span className="text-primary">{highlightedWord}</span>
              {titleParts[1]}
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className={`relative ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-contain max-h-[500px] mix-blend-screen opacity-90"
                style={{ filter: 'saturate(1.1) contrast(1.05)' }}
              />
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/15 blur-[80px] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
