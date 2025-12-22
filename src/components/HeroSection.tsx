import heroImage from "@/assets/hero-image.jpg";
import magnumLogo from "@/assets/magnum-logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Magnum Launch Event 2026 - Premium ice cream innovation showcase"
          className="w-full h-full object-cover"
        />
        <div className="gradient-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-20">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={magnumLogo}
            alt="Magnum Logo"
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 rounded-xl shadow-elegant bg-background/90 p-2"
          />
        </div>

        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Magnum Launch Event
          <span className="block text-gradient mt-2">2026</span>
        </h1>

        <p 
          className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          12–14 January 2026
        </p>

        <p 
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-light animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          Experience innovation. Celebrate excellence. Shape the future.
        </p>

        <div 
          className="animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-elegant hover:scale-105"
          >
            Discover More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
