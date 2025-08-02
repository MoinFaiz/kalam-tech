import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const CompanySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h2 className="font-display font-bold text-3xl lg:text-display mb-6">
              We are a technology studio driven by{" "}
              <span className="text-gradient">engineering and strategic thinking</span>.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Specializing in AI, cloud infrastructure, and modular design, we build systems 
              that are not just functional, but transformational.
            </p>

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

            <Button className="btn-primary group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Contact Card */}
          <div className="fade-in-up">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="font-display font-semibold text-2xl mb-6">
                  Ready to Build the{" "}
                  <span className="text-gradient">Future Together?</span>
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Let's discuss how we can transform your vision into reality with 
                  cutting-edge technology solutions.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        intern.kalamtech@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">
                        Global Remote Team
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="btn-primary w-full group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;