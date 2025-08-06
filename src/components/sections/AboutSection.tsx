import { Target, Eye, Heart } from "lucide-react";
import aboutBackground from "@/assets/a8104187c3b4710360dc82bf8d0ba894.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Engineering smart systems that scale operations, automate complexity, and evolve with technology."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "A future where infrastructure is invisible, intelligent, and infinitely scalable—fueling innovation and expanding the bounds of imagination."
    },
    {
      icon: Heart,
      title: "Philosophy",
      description: "We believe the best technology is purposeful, elegant, and human-centered—built to enhance capabilities, spark creativity, and fuel innovation."
    }
  ];

  return (
    <section className="w-full bg-warm-beige-medium">
      {/* Mobile Layout: Stack vertically */}
      <div className="flex flex-col lg:hidden">
        {/* Mobile Image - Shorter height, better proportions */}
        <div className="relative w-full h-64 sm:h-80">
          <img
            src={aboutBackground}
            alt="About us background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-beige-medium/20 to-transparent" />
        </div>
        
        {/* Mobile Content */}
        <div className="px-4 sm:px-6 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12 fade-in-up text-center sm:text-left">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-warm-dark-gray leading-tight">
              <span className="font-normal block">Engineering Tomorrow's</span>
              <span className="font-bold text-warm-black block">Digital Infrastructure</span>
            </h2>
          </div>
          
          <div className="space-y-8 sm:space-y-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`flex gap-4 items-start stagger-fade`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl mb-2 sm:mb-3 text-warm-dark-gray font-normal">
                    <span className="font-bold text-warm-black">{value.title}</span>
                  </h3>
                  <p className="text-warm-dark-gray leading-relaxed text-base sm:text-lg font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout: Side by side */}
      <div className="hidden lg:flex min-h-[850px] gap-16">
        {/* Desktop Image */}
        <div className="relative flex-1 basis-5/12 min-h-[850px]">
          <img
            src={aboutBackground}
            alt="About us background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Desktop Content */}
        <div className="flex-1 basis-5/12 flex flex-col fade-in-up pr-32 pt-24 pl-0">
          <div className="mb-16 fade-in-up text-left">
            <h2 className="font-display text-4xl xl:text-6xl text-warm-dark-gray">
              <span className="font-normal">Engineering Tomorrow's</span>
              <br />
              <span className="font-bold text-warm-black">Digital Infrastructure</span>
            </h2>
          </div>
          
          <div className="space-y-16">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`flex gap-4 items-start stagger-fade`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-3 text-warm-dark-gray font-normal">
                    <span className="font-bold text-warm-black">{value.title}</span>
                  </h3>
                  <p className="text-warm-dark-gray leading-relaxed text-xl text-justify font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;