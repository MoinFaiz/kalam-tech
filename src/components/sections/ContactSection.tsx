import contactBackground from "@/assets/ad941679927d9f1129b8bbc4647b8aef.jpg";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { getAzureFunctionUrl } from "@/config/api";

const ContactSection = () => {
  const isEmailVisible = false;
  const isPhoneVisible = false;
  const isLocationVisible = false;
  const isGoogleFormVisible = false;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Get the appropriate Azure Function URL based on environment
      const azureFunctionUrl = getAzureFunctionUrl();

      const response = await fetch(azureFunctionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-warm-dark-gray text-center sm:text-left leading-tight">
            <span className="font-normal block">Ready to Build the</span>
            <span className="font-bold text-warm-black block">
              Future Together?
            </span>
          </h2>

          <div className="flex flex-col space-y-3 sm:space-y-4">
            {/* Contact Info */}
            {isEmailVisible && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-lg sm:text-xl mb-2 text-foreground">
                    Email
                  </div>
                  <a
                    href="mailto:intern.kalamtech@gmail.com"
                    className="text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors cursor-pointer break-all"
                  >
                    intern.kalamtech@gmail.com
                  </a>
                </div>
              </div>
            )}

            {isPhoneVisible && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-lg sm:text-xl mb-2 text-foreground">
                    Phone
                  </div>
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
                  <div className="font-semibold text-lg sm:text-xl mb-2 text-foreground">
                    Location
                  </div>
                  <div className="text-base sm:text-lg text-muted-foreground">
                    Global Remote Team
                  </div>
                </div>
              </div>
            )}

            {/* Custom Contact Form */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-warm-light-gray">
              <h3 className="text-xl font-semibold mb-4 text-warm-dark-gray">
                Send us a message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-800">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-800">
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="mobile-name"
                    className="block text-sm font-medium text-warm-dark-gray mb-1"
                  >
                    Name *
                  </label>
                  <Input
                    id="mobile-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile-email"
                    className="block text-sm font-medium text-warm-dark-gray mb-1"
                  >
                    Email *
                  </label>
                  <Input
                    id="mobile-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile-message"
                    className="block text-sm font-medium text-warm-dark-gray mb-1"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="mobile-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Side by side */}
      <div className="hidden lg:flex min-h-[850px] gap-16">
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
          <h2 className="font-display text-4xl xl:text-6xl mb-8 text-warm-dark-gray">
            <span className="font-normal">Ready to Build the</span>
            <br />
            <span className="font-bold text-warm-black">Future Together?</span>
          </h2>

          <div className="flex flex-col space-y-2">
            {isEmailVisible && (
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-2xl mb-2 text-foreground">
                    Email
                  </div>
                  <a
                    href="mailto:intern.kalamtech@gmail.com"
                    className="text-xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    intern.kalamtech@gmail.com
                  </a>
                </div>
              </div>
            )}

            {isPhoneVisible && (
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-2xl mb-2 text-foreground">
                    Phone
                  </div>
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
                  <div className="font-semibold text-2xl mb-2 text-foreground">
                    Location
                  </div>
                  <div className="text-xl text-muted-foreground">
                    Global Remote Team
                  </div>
                </div>
              </div>
            )}

            {/* Custom Contact Form */}
            <div className="mt-8 p-8 bg-white rounded-lg shadow-sm border border-warm-light-gray">
              <h3 className="text-2xl font-semibold mb-6 text-warm-dark-gray">
                Send us a message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="desktop-name"
                      className="block text-lg font-medium text-warm-dark-gray mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="desktop-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full text-lg p-3"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="desktop-email"
                      className="block text-lg font-medium text-warm-dark-gray mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="desktop-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full text-lg p-3"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="desktop-message"
                    className="block text-lg font-medium text-warm-dark-gray mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="desktop-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    className="w-full text-lg p-3"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-primary hover:bg-gradient-primary/90 text-white text-lg px-8 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Google Form Embed */}
            {isGoogleFormVisible && (
              <div
                className="mt-8"
                style={{ maxWidth: "100%", overflow: "hidden" }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-warm-dark-gray">
                  Alternative: Use our Google Form
                </h3>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSckSbrk07u-d7zPkiajLy3IxUoyTmpLVzTY5TgrXyn5lEtYGQ/viewform?embedded=true"
                  width="480"
                  height="800"
                >
                  Loading…
                </iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
