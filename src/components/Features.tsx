import { Card } from "@/components/ui/card";
import { Brain, Zap, Shield, Users, MessageSquare, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Understanding",
    description: "Advanced AI that comprehends context, emotions, and subtle nuances in every conversation."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses with our optimized AI engine. No waiting, just flowing conversation."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations are encrypted and secure. We never store or share your personal data."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights and work together with AI assistance that understands your team dynamics."
  },
  {
    icon: MessageSquare,
    title: "Natural Dialogue",
    description: "Conversations that feel genuinely human, with personality and warmth in every interaction."
  },
  {
    icon: Sparkles,
    title: "Creative Partner",
    description: "From brainstorming to problem-solving, your AI companion helps unlock creative potential."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Why choose our AI chat?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our AI conversation experience extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-0 shadow-sm hover-lift bg-background"
            >
              <div className="bg-accent w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
