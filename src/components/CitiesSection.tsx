const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

const CitiesSection = () => {
  return (
    <section className="py-16 lg:py-24 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-xl lg:text-2xl font-semibold text-muted-foreground mb-8 animate-fade-up">
          Cities we operate in
        </h3>
        <div className="flex flex-wrap gap-4 lg:gap-6">
          {cities.map((city, index) => (
            <a
              key={city}
              href={`#${city.toLowerCase()}`}
              className="px-6 py-3 bg-secondary hover:bg-muted rounded-full text-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in"
              style={{ animationDelay: `${index * 0.05}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {city}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
