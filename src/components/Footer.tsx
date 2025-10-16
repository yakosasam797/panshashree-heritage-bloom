import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Our Process", path: "/process" },
    { name: "Heritage", path: "/heritage" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Flower2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold font-heading">Panshashree</div>
                <div className="text-xs text-primary-foreground/70">Rooted in Tradition</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Traditional cold-pressed coconut oil crafted with care in the coastal Karavali region. 
              Pure, natural, and chemical-free since 2013.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent smooth-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Contact Info</h3>
            <ul className="space-y-3">
               <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919591622649" className="text-sm text-primary-foreground/80 hover:text-accent smooth-transition block">
                    +91 95916 22649
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@panshashree.com"
                  className="text-sm text-primary-foreground/80 hover:text-accent smooth-transition"
                >
                  info@panshashree.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-foreground/80">
                  Mundaje Post, Belthangady (tq),<br />
                  Dakshina Kannada (dist), Karnataka
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Business Hours</h3>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm text-primary-foreground/80">
                <p>Monday - Saturday</p>
                <p className="font-semibold">9:00 AM - 6:00 PM</p>
                <p className="mt-2">Sunday: Closed</p>
              </div>
            </div>
            <a
              href="https://wa.me/919591622649?text=Hi%2C%20I'm%20interested%20in%20Panchashree%20coconut%20oil.%20I'd%20like%20to%20know%20more%20about..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="w-full">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Panshashree. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-accent smooth-transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-accent smooth-transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
