
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, BarChart, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get detailed feedback and scoring immediately after completing your test",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Earn recognized certificates that validate your skills to employers",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: BarChart,
    title: "Detailed Analytics",
    description: "Track your progress with comprehensive performance analytics",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "Peer Comparison",
    description: "See how you rank against other professionals in your field",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Zap,
    title: "Adaptive Testing",
    description: "Questions adjust to your skill level for accurate assessment",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">ScholarHat</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to provide the most accurate and valuable skill assessment experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
