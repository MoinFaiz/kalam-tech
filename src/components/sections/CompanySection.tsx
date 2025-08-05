import companyBackground from "@/assets/5a48194af9d0d4d80ccf4d2d38718672.jpg";
import logo from "@/assets/logo2_dark.png";

const CompanySection = () => {
  const areStatsVisible = false;
  return (
    <section className="bg-warm-beige-medium relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden relative min-h-[70vh] flex items-center justify-center">
        {/* Mobile Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 w-14 h-auto sm:w-16 transition-all duration-300"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
        />

        {/* Mobile Background */}
        <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
          <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden">
            <img
              src={companyBackground}
              alt="Technology workspace"
              className="w-full h-full object-cover opacity-25 sm:opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-warm-beige-medium/30" />
          </div>
        </div>
        
        {/* Mobile Content */}
        <div className="fade-in-up px-6 sm:px-8 py-12 sm:py-16 w-full text-center bg-transparent relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-warm-dark-gray leading-tight">
            <span className="font-normal block">We are a technology studio</span>
            <span className="font-bold text-warm-black block">driven by engineering and strategic thinking.</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-snug mx-auto max-w-2xl">
            Specializing in AI, cloud infrastructure, and modular design, we build systems that are not just functional, but transformational.
          </p>

          {areStatsVisible && (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto">
              <div className="text-center p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-[850px] items-center justify-center">
        {/* Desktop Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="absolute top-12 left-12 z-20 w-56 h-auto transition-all duration-300"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
        />

        {/* Desktop Background */}
        <div className="absolute inset-0 flex items-center justify-center p-1">
          <div className="relative w-3/4 h-3/4 rounded-xl overflow-hidden transition-all duration-300">
            <img
              src={companyBackground}
              alt="Technology workspace"
              className="w-full h-full object-cover opacity-35 transform scale-105 hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-warm-beige-medium/20" />
          </div>
        </div>
        
        {/* Desktop Content */}
        <div className="fade-in-up px-64 py-24 w-full mx-auto text-center bg-transparent rounded-xl relative z-10">
          <h2 className="font-display text-6xl mb-20 text-warm-dark-gray">
            <span className="font-normal">We are a technology studio</span>{" "}
            <span className="font-bold text-warm-black">driven by engineering and strategic thinking.</span>
          </h2>

          <p className="text-4xl text-muted-foreground mb-8 leading-snug mx-auto max-w-4xl">
            Specializing in AI, cloud infrastructure, and modular design, we build systems that are not just functional, but transformational.
          </p>

          {areStatsVisible && (
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-gradient mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-gradient mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;