import { useState } from "react";
import { Menu, X, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dining", href: "/#dining" },
    { name: "Events", href: "/#events" },
    { name: "Turfs", href: "/#turfs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/30" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/ticpin-logo-black.png"
              alt="TicPin"
              className="h-6 lg:h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#login"
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm"
            >
              Login
            </a>
            <Button className="bg-primary hover:bg-primary/90 transition-all duration-200 rounded-full px-5 h-10 text-sm gap-2">
              <Ticket className="w-4 h-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 backdrop-blur-lg z-40 animate-fade-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-900 text-2xl font-semibold hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#login"
                className="text-gray-900 text-2xl font-semibold hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <Button
                className="bg-primary hover:bg-primary/90 transition-all duration-200 rounded-full px-8 h-12 text-base gap-2 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Ticket className="w-5 h-5" />
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
