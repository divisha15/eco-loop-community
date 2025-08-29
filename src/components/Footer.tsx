import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Recycle, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Leaf
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-eco rounded-lg flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EcoWaste</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming communities through sustainable waste management. 
              From overflowing landfills to circular communities - be the change where you live!
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "How It Works",
                "Pricing",
                "Communities",
                "Impact Reports",
                "Success Stories",
                "Blog & Tips"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <Leaf className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                "Waste Collection",
                "Recycling Programs",
                "Community Analytics",
                "Eco-Rewards System",
                "Educational Resources",
                "Corporate Partnerships"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <Leaf className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="text-primary-foreground">hello@ecowaste.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <p className="text-primary-foreground">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Office</p>
                  <p className="text-primary-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-white text-primary hover:bg-white/90 w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Stay Updated on Sustainability</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Get weekly tips, community updates, and exclusive eco-rewards delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-eco-green hover:bg-eco-green/90 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} EcoWaste Platform. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;