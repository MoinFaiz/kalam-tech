import contactBackground from "@/assets/ad941679927d9f1129b8bbc4647b8aef.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const isPhoneVisible = false;
  const isLocationVisible = false;

  return (
    <section className="w-full min-h-[850px] flex md:flex-row flex-col md:gap-24 gap-12 p-0 m-0 bg-warm-near-white">
      {/* Left Column: Full Image, no margin/padding, covers full height and width */}
      <div className="relative flex-1 md:basis-5/12 min-h-[800px] w-full p-0 m-0">
        <img
          src={contactBackground}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Right Column: Title at very top, then content below */}
      <div className="flex flex-col flex-1 md:basis-5/12 fade-in-up pr-8 md:pr-24 pt-8 md:pt-24 pb-8 md:pb-24 pl-4 md:pl-0">
        <h2 className="font-display text-4xl lg:text-6xl m-0 p-0 text-warm-dark-gray">
          <span className="font-normal">Ready to Build the</span>
          <br />
          <span className="font-bold text-warm-black">Future Together?</span>
        </h2>
        <div className="flex flex-col space-y-4 m-0 p-0 pt-24">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div>
              <div className="font-semibold text-2xl mb-2 text-foreground">Email</div>
              <a 
                href="mailto:intern.kalamtech@gmail.com"
                className="text-xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                intern.kalamtech@gmail.com
              </a>
            </div>
          </div>
          {isPhoneVisible && (
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="font-semibold text-2xl mb-2 text-foreground">Phone</div>
                <div className="text-xl text-muted-foreground">
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
          )}
          {isLocationVisible && (
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="font-semibold text-2xl mb-2 text-foreground">Location</div>
                <div className="text-xl text-muted-foreground">
                  Global Remote Team
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
