import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-display font-semibold text-xl">
              <span className="text-gradient">Kalam</span> Technologies
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="btn-primary">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button className="btn-primary w-full mt-4">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
