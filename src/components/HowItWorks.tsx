import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Brain, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Start the conversation",
    description: "Simply type your message or question. Our AI is ready to engage on any topic that interests you."
  },
  {
    number: "02", 
    icon: Brain,
    title: "AI understands context",
    description: "Advanced language processing ensures your AI companion grasps nuances, emotions, and intent."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Get intelligent responses",
    description: "Receive thoughtful, relevant answers that move the conversation forward naturally."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with AI conversations is simple and intuitive
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2 tracking-wider">
                    STEP {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-gray-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-gray-200 mb-2">
                          {step.number}
                        </div>
                        <step.icon className="w-12 h-12 text-gray-400 mx-auto" />
                      </div>
                    </div>
                    
                    {/* Connecting line (except for last step) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
                        <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-gray-900 font-semibold px-8 py-3 rounded-xl hover-lift"
            >
              Try it now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
