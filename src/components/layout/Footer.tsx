
import { MdEmail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import TermsOfService from "@/components/pages/TermsOfService";
import CookiePolicy from "@/components/pages/CookiePolicy";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMainFooterVisible = false;

  const footerLinks = {
    services: [
      { name: "AI & Machine Learning", href: "#services", visible: true },
      { name: "Data Engineering", href: "#services", visible: true },
      { name: "System Architecture", href: "#services", visible: true },
      { name: "Security & Compliance", href: "#services", visible: true },
    ],
    company: [
      { name: "About Us", href: "#about", visible: false },
      { name: "Our Team", href: "#team", visible: false },
      { name: "Careers", href: "#careers", visible: false },
      { name: "Blog", href: "#blog", visible: false },
    ],
    resources: [
      { name: "Documentation", href: "#docs", visible: false },
      { name: "Case Studies", href: "#case-studies", visible: false },
      { name: "White Papers", href: "#resources", visible: false },
      { name: "Support", href: "#support", visible: false },
    ],
  };

  const socialLinks = [
    { icon: SiGithub, href: "#", label: "GitHub", visible: false },
    { icon: SiLinkedin, href: "#", label: "LinkedIn", visible: false },
    { icon: SiX, href: "#", label: "Twitter", visible: false },
    {
      icon: MdEmail,
      href: "mailto:intern.kalamtech@gmail.com",
      label: "Email",
      visible: true,
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        {isMainFooterVisible && (
          <div className="py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <span className="font-display font-semibold text-xl text-white">
                    Kalam Technologies
                  </span>
                </div>

                <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed max-w-md">
                  Engineering tomorrow's digital infrastructure with systems
                  that think, scale, and last.
                </p>

                <div className="flex space-x-4">
                  {socialLinks
                    .filter((social) => social.visible)
                    .map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                </div>
              </div>

              {/* Right Column - Links */}
              {(() => {
                // Build columns array based on visible items
                const columns = [];
                if (
                  footerLinks.services.filter((link) => link.visible).length > 0
                ) {
                  columns.push(
                    <div key="services">
                      <h3 className="font-semibold text-white mb-4">
                        Services
                      </h3>
                      <ul className="space-y-3">
                        {footerLinks.services
                          .filter((link) => link.visible)
                          .map((link) => (
                            <li key={link.name}>
                              <a
                                href={link.href}
                                className="text-primary-foreground/80 hover:text-white transition-colors"
                              >
                                {link.name}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  );
                }
                if (
                  footerLinks.company.filter((link) => link.visible).length > 0
                ) {
                  columns.push(
                    <div key="company">
                      <h3 className="font-semibold text-white mb-4">Company</h3>
                      <ul className="space-y-3">
                        {footerLinks.company
                          .filter((link) => link.visible)
                          .map((link) => (
                            <li key={link.name}>
                              <a
                                href={link.href}
                                className="text-primary-foreground/80 hover:text-white transition-colors"
                              >
                                {link.name}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  );
                }
                if (
                  footerLinks.resources.filter((link) => link.visible).length >
                  0
                ) {
                  columns.push(
                    <div key="resources">
                      <h3 className="font-semibold text-white mb-4">
                        Resources
                      </h3>
                      <ul className="space-y-3">
                        {footerLinks.resources
                          .filter((link) => link.visible)
                          .map((link) => (
                            <li key={link.name}>
                              <a
                                href={link.href}
                                className="text-primary-foreground/80 hover:text-white transition-colors"
                              >
                                {link.name}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  );
                }
                // Set grid columns dynamically
                const gridCols =
                  columns.length === 1
                    ? "md:grid-cols-1"
                    : columns.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-3";
                return (
                  <div className={`grid ${gridCols} gap-8`}>{columns}</div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} Kalam Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-primary-foreground/80 hover:text-white transition-colors focus:outline-none">
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <PrivacyPolicy />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-primary-foreground/80 hover:text-white transition-colors focus:outline-none">
                    Terms of Service
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <TermsOfService />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-primary-foreground/80 hover:text-white transition-colors focus:outline-none">
                    Cookie Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <CookiePolicy />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
