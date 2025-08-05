import contactBackground from "@/assets/ad941679927d9f1129b8bbc4647b8aef.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const isPhoneVisible = false;
  const isLocationVisible = false;

  return (
    <section className="w-full bg-warm-near-white">
      {/* Mobile Layout: Stack vertically */}
      <div className="flex flex-col lg:hidden">
        {/* Mobile Image */}
        <div className="relative w-full h-64 sm:h-80">
          <img
            src={contactBackground}
            alt="Contact background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-near-white/20 to-transparent" />
        </div>
        
        {/* Mobile Content */}
        <div className="px-4 sm:px-6 py-8 sm:py-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-warm-dark-gray text-center sm:text-left leading-tight">
            <span className="font-normal block">Ready to Build the</span>
            <span className="font-bold text-warm-black block">Future Together?</span>
          </h2>
          
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-lg sm:text-xl mb-2 text-foreground">Email</div>
                <a 
                  href="mailto:intern.kalamtech@gmail.com"
                  className="text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors cursor-pointer break-all"
                >
                  intern.kalamtech@gmail.com
                </a>
              </div>
            </div>
            
            {isPhoneVisible && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-lg sm:text-xl mb-2 text-foreground">Phone</div>
                  <div className="text-base sm:text-lg text-muted-foreground">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>
            )}
            
            {isLocationVisible && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-lg sm:text-xl mb-2 text-foreground">Location</div>
                  <div className="text-base sm:text-lg text-muted-foreground">
                    Global Remote Team
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout: Side by side */}
      <div className="hidden lg:flex min-h-[850px]">
        {/* Desktop Image */}
        <div className="relative flex-1 basis-5/12 min-h-[800px]">
          <img
            src={contactBackground}
            alt="Contact background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Desktop Content */}
        <div className="flex flex-col flex-1 basis-5/12 fade-in-up pr-24 pt-24 pb-24">
          <h2 className="font-display text-4xl xl:text-6xl mb-24 text-warm-dark-gray">
            <span className="font-normal">Ready to Build the</span>
            <br />
            <span className="font-bold text-warm-black">Future Together?</span>
          </h2>
          
          <div className="flex flex-col space-y-4">
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
      </div>
    </section>
  );
};

export default ContactSection;