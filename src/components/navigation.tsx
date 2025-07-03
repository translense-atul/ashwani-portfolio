import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-padding">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">Ashwani Upadhyay</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
