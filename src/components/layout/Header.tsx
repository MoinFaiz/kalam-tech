import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center transform transition-transform duration-200 hover:scale-105">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-display font-semibold text-lg sm:text-xl">
              <span className="text-gradient">Kalam</span> <span className="hidden sm:inline">Technologies</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="btn-primary hover:scale-105 transform transition-transform duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary rounded-lg hover:bg-primary/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 py-4">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg hover:bg-primary/5"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg hover:bg-primary/5"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg hover:bg-primary/5"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-all duration-200 py-3 px-4 rounded-lg hover:bg-primary/5"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="pt-2 px-4">
              <Button className="btn-primary w-full hover:scale-105 transform transition-transform duration-200">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
