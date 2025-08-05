import heroBackground from "@/assets/d27d87d2c024cbcc71e8b59d85e39709.jpg";
import logo from "@/assets/logo2_dark.png";

const HeroSection = () => {
  const areStatsVisible = false;
  return (
    <section id="home" className="relative overflow-hidden bg-warm-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Technology team collaboration"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-warm-dark-gray/20" />
      </div>

      {/* Logo - Responsive positioning */}
      <img
        src={logo}
        alt="Company Logo"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-12 lg:left-12 z-20 w-16 h-auto sm:w-20 md:w-24 lg:w-56 transition-all duration-300"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
      />

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 min-h-[100vh] flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="fade-in-up text-center max-w-4xl">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight text-white">
            Designing Systems That Think, Scale and Last.
          </h1>
          
          {areStatsVisible && (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 max-w-md mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">50+</div>
                <div className="text-xs sm:text-sm text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">5+</div>
                <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">99.9%</div>
                <div className="text-xs sm:text-sm text-white/80">Uptime SLA</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Support</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative z-10 py-20 lg:py-32 min-h-[850px] items-center">
        <div className="pl-28">
          <div className="fade-in-up text-left">
            <h1 className="font-display text-7xl max-w-7xl mb-6 leading-tight text-white">
              Designing Systems That Think, Scale and Last.
            </h1>

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
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="hidden sm:block absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;