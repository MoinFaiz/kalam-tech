import companyBackground from "@/assets/5a48194af9d0d4d80ccf4d2d38718672.jpg";
import logo from "@/assets/logo2_dark.png";

const CompanySection = () => {
  const areStatsVisible = false;
  return (
    <section className="py-0 min-h-[850px] flex items-center justify-center bg-warm-beige-medium relative">
      {/* Logo Top Left */}
      <img
        src={logo}
        alt="Company Logo"
        className="absolute top-4 left-4 md:top-12 md:left-12 z-20 w-24 h-auto md:w-56"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
      />
      {/* Centered Background Image */}
      <div className="absolute inset-0 flex items-center justify-center p-1">
        <div className="relative w-3/4 h-3/4 rounded-xl overflow-hidden">
          <img
            src={companyBackground}
            alt="Technology workspace"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0" />
        </div>
      </div>
      
      <div className="fade-in-up px-8 md:px-64 py-12 md:py-24 w-full mx-auto text-center bg-transparent rounded-xl relative z-10">
        <h2 className="font-display text-4xl lg:text-6xl mb-20 text-warm-dark-gray">
          <span className="font-normal">We are a technology studio driven by</span> <span className="font-bold text-warm-black">engineering and strategic thinking.</span>
        </h2>

        <p className="text-4xl text-muted-foreground mb-8 leading-snug mx-auto whitespace-normal">
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
    </section>
  );
};

export default CompanySection;
