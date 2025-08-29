import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Leaf, 
  Target,
  TrendingUp,
  MapPin
} from "lucide-react";

const CommunityImpact = () => {
  const impactStats = [
    {
      icon: Users,
      title: "Active Communities",
      value: "250+",
      description: "Cities and neighborhoods making a difference",
      progress: 75
    },
    {
      icon: Leaf,
      title: "CO₂ Reduced",
      value: "1,200T",
      description: "Carbon footprint reduction this year",
      progress: 85
    },
    {
      icon: Target,
      title: "Waste Diverted",
      value: "500T",
      description: "From landfills to recycling centers",
      progress: 90
    },
    {
      icon: Award,
      title: "Eco Heroes",
      value: "10,000+",
      description: "Users making a daily impact",
      progress: 60
    }
  ];

  const topCommunities = [
    { name: "Green Gardens, Mumbai", points: 15420, badge: "Platinum" },
    { name: "Eco Valley, Bangalore", points: 12890, badge: "Gold" },
    { name: "Clean Creek, Delhi", points: 11650, badge: "Gold" },
    { name: "Sustainable Shores, Chennai", points: 9870, badge: "Silver" },
    { name: "Nature's Haven, Pune", points: 8420, badge: "Silver" }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Platinum": return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      case "Gold": return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "Silver": return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      default: return "bg-eco-green text-white";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Impact &
            <span className="text-eco-green"> Leaderboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how communities across India are transforming waste management and competing to become the most sustainable neighborhoods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Impact Statistics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-eco-green" />
              Real-Time Impact
            </h3>
            
            {impactStats.map((stat, index) => (
              <Card key={index} className="shadow-card-eco hover:shadow-eco transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-eco rounded-lg flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{stat.title}</h4>
                        <p className="text-sm text-muted-foreground">{stat.description}</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                  <div className="text-sm text-muted-foreground mt-2 text-right">
                    {stat.progress}% of annual goal
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Community Leaderboard */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-eco-green" />
              Top Eco-Hero Communities
            </h3>
            
            <Card className="shadow-card-eco border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {topCommunities.map((community, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 ${
                        index === 0 ? 'bg-gradient-to-r from-eco-green/10 to-eco-blue/10 border border-eco-green/20' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                          index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                          index === 2 ? 'bg-gradient-to-r from-yellow-600 to-yellow-800' :
                          'bg-eco-green'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            {community.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {community.points.toLocaleString()} eco-points
                          </div>
                        </div>
                      </div>
                      <Badge className={`${getBadgeColor(community.badge)} font-semibold`}>
                        {community.badge}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Want to see your community here?</p>
                  <p className="text-lg font-semibold text-primary">Join the competition today!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-gradient-eco rounded-full px-8 py-4 text-white shadow-button-eco">
            <div className="text-center">
              <div className="text-2xl font-bold">Real-time</div>
              <div className="text-sm opacity-90">Updates</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Tracking</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Transparent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;