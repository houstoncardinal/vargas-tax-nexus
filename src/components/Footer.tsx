import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  Calculator
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Individual Tax Returns",
    "Business Tax Services", 
    "Tax Planning",
    "IRS Resolution",
    "Bookkeeping Services",
    "Financial Consulting"
  ];

  const quickLinks = [
    "About Us",
    "Services",
    "Contact",
    "Tax Calendar",
    "Tax Resources",
    "Client Portal"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-secondary mr-2" />
              <h3 className="text-xl font-bold">Vargas Tax Services</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Family-owned tax preparation services with over 25 years of experience. 
              Maximizing refunds and ensuring compliance for individuals and businesses in Houston, TX.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '')}`} 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground font-medium">(832) 287-9056</p>
                  <p className="text-primary-foreground/60 text-sm">Mon-Fri: 9AM-6PM</p>
                  <p className="text-primary-foreground/60 text-sm">Sat: 9AM-2PM (Tax Season)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground font-medium">info@vargastaxservices.com</p>
                  <p className="text-primary-foreground/60 text-sm">24hr response time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground font-medium">Houston, Texas</p>
                  <p className="text-primary-foreground/60 text-sm">Serving Greater Houston Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} Vargas Tax Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;