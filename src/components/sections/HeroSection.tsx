import heroBackground from "@/assets/d27d87d2c024cbcc71e8b59d85e39709.jpg";
import logo from "@/assets/logo2_dark.png";

const HeroSection = () => {
  const areStatsVisible = false;
  return (
    // TODO: I am changing in class name from 'min-h-screen' to 'min-h-[850px]'. Rethink
    <section id="home" className="relative py-20 lg:py-32 min-h-[850px] flex items-center overflow-hidden bg-warm-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Technology team collaboration"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-warm-dark-gray/20" />
      </div>

      {/* Logo Top Left */}
      <img
        src={logo}
        alt="Company Logo"
        className="absolute top-12 left-12 z-20 w-24 h-auto md:w-56"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
      />

      {/* Content */}
      <div className="relative z-10 pl-8 md:pl-28">
        <div className="fade-in-up text-left">
          {/* Main Headline */}
          <h1 className="font-display text-2xl md:text-7xl max-w-7xl mb-6 leading-tight break-words whitespace-normal text-left text-white">
            Designing Systems That Think, Scale and Last.
          </h1>

          {/* Stats */}
          {areStatsVisible && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;