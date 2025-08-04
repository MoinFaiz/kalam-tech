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
    <section className="w-full min-h-[850px] flex md:flex-row flex-col md:gap-24 gap-12 p-0 m-0 bg-warm-beige-medium">
      {/* Left Column: Full Image, no margin/padding, covers full height and width */}
      <div className="relative flex-1 md:basis-5/12 min-h-[850px] w-full p-0 m-0">
        <img
          src={aboutBackground}
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Right Column: Mission, Vision, Philosophy */}
      <div className="flex-1 md:basis-5/12 flex flex-col fade-in-up pr-8 md:pr-32 pt-8 md:pt-24">
        <div className="mb-16 fade-in-up text-left">
          <h2 className="font-display text-4xl lg:text-6xl text-warm-dark-gray">
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
    </section>
  );
};

export default AboutSection;