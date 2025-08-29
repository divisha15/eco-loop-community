import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Recycle, Gift } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Join your community with smart location-based pricing",
      details: "From ₹10/month in rural areas to ₹199/month in premium locations"
    },
    {
      icon: Recycle,
      title: "Track & Segregate",
      description: "Segregate waste at source and track your impact",
      details: "Earn eco-points for proper biodegradable and recyclable separation"
    },
    {
      icon: Gift,
      title: "Earn Rewards",
      description: "Redeem points for discounts and community benefits",
      details: "Get vouchers, badges, and contribute to local clean-up projects"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your waste management in three easy steps and become an Eco Hero in your community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full shadow-card-eco hover:shadow-eco transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-eco rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-16 w-32 h-0.5 bg-gradient-eco"></div>
                    )}
                  </div>
                  
                  <div className="text-2xl font-bold text-foreground mb-2">
                    Step {index + 1}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-lg">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-eco-green font-medium bg-eco-green/10 rounded-lg p-3">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;