import logo from "@/assets/logo2_dark.png";

const NewFooter = () => {
  return (
    <footer className="bg-warm-dark-gray text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center space-y-6">
          {/* Mobile Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Company Logo"
              className="w-24 h-auto sm:w-32"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          
          {/* Mobile Company Info */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md mx-auto">
              Engineering tomorrow's digital infrastructure through intelligent systems and strategic thinking.
            </p>
            <p className="text-xs sm:text-sm text-white/60">
              © 2025 KalamTech. All rights reserved.
            </p>
          </div>
          
          {/* Mobile Contact */}
          <div className="pt-4 border-t border-white/20">
            <a 
              href="mailto:intern.kalamtech@gmail.com"
              className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
            >
              intern.kalamtech@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block px-12 xl:px-28 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Desktop Logo & Description */}
          <div className="flex-1 max-w-md">
            <img
              src={logo}
              alt="Company Logo"
              className="w-40 h-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/80 leading-relaxed mb-4">
              Engineering tomorrow's digital infrastructure through intelligent systems and strategic thinking.
            </p>
            <p className="text-sm text-white/60">
              © 2025 KalamTech. All rights reserved.
            </p>
          </div>
          
          {/* Desktop Contact */}
          <div className="flex-shrink-0">
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <a 
              href="mailto:intern.kalamtech@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              intern.kalamtech@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;