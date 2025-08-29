import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MapPin } from "lucide-react";

const PricingTiers = () => {
  const tiers = [
    {
      name: "Rural/Community",
      price: "₹10-20",
      period: "/month",
      description: "Perfect for rural and low-income communities",
      features: [
        "Basic waste pickup service",
        "Eco-points tracking",
        "Community leaderboard",
        "Weekly pickup schedule",
        "Basic complaint system"
      ],
      badge: "Most Affordable",
      badgeColor: "bg-eco-earth"
    },
    {
      name: "Mid-Income Areas",
      price: "₹49-99",
      period: "/month",
      description: "Ideal for growing neighborhoods and mid-income areas",
      features: [
        "Everything in Rural plan",
        "Bi-weekly pickup service",
        "Premium eco-rewards",
        "Priority customer support",
        "Waste analytics dashboard",
        "Badge achievements"
      ],
      badge: "Most Popular",
      badgeColor: "bg-eco-green"
    },
    {
      name: "Premium Areas",
      price: "₹99-199",
      period: "/month",
      description: "Premium service for affluent communities",
      features: [
        "Everything in Mid-Income plan",
        "Daily pickup availability",
        "Premium rewards & vouchers",
        "Dedicated account manager",
        "Advanced AI analytics",
        "Exclusive community events",
        "Priority donation matching"
      ],
      badge: "Premium",
      badgeColor: "bg-eco-blue"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Location-Based Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Fair pricing that adapts to your community's economic profile. We believe sustainability should be accessible to everyone.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">Auto-detected based on PIN code or GPS</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card-eco hover:shadow-eco transition-all duration-300 transform hover:-translate-y-2 ${
                index === 1 ? 'ring-2 ring-eco-green scale-105' : ''
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Badge className={`${tier.badgeColor} text-white px-4 py-1`}>
                    {tier.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-eco-green mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full shadow-button-eco transition-all duration-300 ${
                    index === 1 
                      ? 'bg-eco-green hover:bg-eco-green/90 text-white' 
                      : 'bg-primary hover:bg-primary-hover text-primary-foreground'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include our satisfaction guarantee and can be cancelled anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;