import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Recycle, 
  Calendar, 
  MessageSquare, 
  Trophy, 
  TrendingUp, 
  Heart,
  Smartphone,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Recycle,
      title: "Waste Tracker & Rewards",
      description: "Track biodegradable & recyclable waste. Earn eco-points for proper segregation at source.",
      badge: "Core Feature"
    },
    {
      icon: Calendar,
      title: "Smart Pickup Scheduling",
      description: "Easy schedule and reschedule pickup with flexible timing that works for your community.",
      badge: "Convenience"
    },
    {
      icon: MessageSquare,
      title: "Complaint System",
      description: "Report missed pickups, delays, or improper handling with our responsive support system.",
      badge: "Support"
    },
    {
      icon: Trophy,
      title: "EcoCoins and Coupons",
      description: "Compete with neighbors, earn badges like 'Waste Warrior' and 'Plastic-Free Champ'.",
      badge: "Fun"
    },
    {
      icon: TrendingUp,
      title: "AI-Driven Analytics",
      description: "Track community trends, improvements, and get personalized sustainability insights.",
      badge: "Smart Tech"
    },
    {
      icon: Heart,
      title: "Community Donations",
      description: "Donate eco-points to local clean-up projects and environmental initiatives.",
      badge: "Community"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Seamless experience across all devices with offline capability for remote areas.",
      badge: "Accessibility"
    },
    {
      icon: Users,
      title: "Eco Fleet",
      description: "Local collectors earn per kg collected, creating sustainable employment opportunities.",
      badge: "Economic Impact"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="text-eco-green"> Sustainable Living</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive features designed to make waste management rewarding, community-driven, and environmentally impactful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card-eco hover:shadow-eco transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm group"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-eco rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-eco-green/10 text-eco-green border-eco-green/20">
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-card-eco">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-eco-green rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Live Impact Tracking</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-eco-blue rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Real-time Rewards</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-eco-earth rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">Community Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;