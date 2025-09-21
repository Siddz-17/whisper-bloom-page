import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroShapes from "@/assets/hero-shapes.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full float opacity-60"></div>
        <div className="absolute top-32 right-20 w-6 h-6 border-2 border-gray-300 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-gray-100 rounded"></div>
        <div className="absolute bottom-20 right-32 w-3 h-3 bg-primary rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm font-medium text-accent-foreground mb-8 hover-lift">
            <MessageCircle className="w-4 h-4" />
            <span>Professional LinkedIn banners made easy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 hero-text">
            Create stunning
            <br />
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              LinkedIn banners
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Design professional LinkedIn banners in minutes. Stand out from the crowd with custom graphics that represent your personal brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-gray-900 font-semibold px-8 py-3 rounded-xl hover-lift"
            >
              Create Banner
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl hover-lift"
            >
              Watch Demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};