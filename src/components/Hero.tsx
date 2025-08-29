import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-eco.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl md:text-5xl font-bold text-eco-leaf mb-4 tracking-wider">
            ECOSPHERE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            From Overflowing
            <span className="bg-gradient-eco bg-clip-text text-transparent"> Landfills </span>
            to Circular
            <span className="text-eco-leaf"> Communities</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be the Change Where You Live! Connect with your community to turn waste into rewards and build a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-button-eco transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              Start Your Eco Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-eco-leaf hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const featuresSection = document.querySelector('section:nth-of-type(2)');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-leaf mb-2">10K+</div>
              <div className="text-white/80">Active Eco Warriors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-blue mb-2">500T</div>
              <div className="text-white/80">Waste Recycled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;