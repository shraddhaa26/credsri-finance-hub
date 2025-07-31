import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from "lucide-react";
import credsriLogo from "@/assets/credsri-logo.png";

const Footer = () => {
  const loanServices = [
    { name: "Personal Loan", href: "#personal-loan" },
    { name: "Home Loan", href: "#home-loan" },
    { name: "Business Loan", href: "#business-loan" },
    { name: "Loan Against Property", href: "#loan-against-property" },
    { name: "SME Loan", href: "#sme-loan" },
    { name: "Project Financing", href: "#project-financing" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "EMI Calculator", href: "#calculator" },
    { name: "Apply Online", href: "#apply" },
    { name: "Track Application", href: "#track" },
    { name: "Customer Support", href: "#support" },
    { name: "Terms & Conditions", href: "#terms" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={credsriLogo} alt="CREDSRI HOLDINGS" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">CREDSRI HOLDINGS</h3>
                <p className="text-xs text-blue-200">Financial Services</p>
              </div>
            </div>
            
            <p className="text-blue-100 leading-relaxed">
              Your trusted financial partner providing transparent, fast, and reliable 
              loan solutions for all your financial needs. We believe in transparency 
              and high-level customer satisfaction.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">info@credsriholdings.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Loan Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Loan Services</h4>
            <ul className="space-y-3">
              {loanServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-blue-100 hover:text-white transition-colors hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Connected</h4>
            <p className="text-blue-100">
              Subscribe to our newsletter for the latest updates on loan offers and financial tips.
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-100 text-sm">
              © 2024 CREDSRI HOLDINGS. All rights reserved. | 
              <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-1">Terms of Service</a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </button>
          </div>
          
          <div className="mt-4 text-xs text-blue-200 text-center">
            <p>
              CREDSRI HOLDINGS is a registered NBFC with RBI. All loan products are subject to approval. 
              Terms and conditions apply. Please read all scheme related documents carefully.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;