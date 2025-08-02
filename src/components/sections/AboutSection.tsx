import { Target, Eye, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h2 className="font-display font-bold text-3xl lg:text-display mb-6">
              Engineering Tomorrow's{" "}
              <span className="text-gradient">Digital Infrastructure</span>
            </h2>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className={`flex gap-4 stagger-fade`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="fade-in-up">
            <Card className="card-elevated p-8 text-center">
              <div className="w-full h-64 lg:h-80 bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                <div className="text-primary/60">
                  <svg 
                    className="w-20 h-20 mx-auto mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">
                Technology Studio
              </h3>
              <p className="text-muted-foreground">
                Driven by engineering excellence and strategic thinking, 
                specializing in AI, cloud infrastructure, and modular design.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;