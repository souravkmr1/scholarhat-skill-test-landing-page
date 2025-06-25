import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Palette, Cpu, Trophy, Target, Zap } from "lucide-react";
const categories = [{
  name: ".NET",
  icon: Code,
  color: "bg-purple-500"
}, {
  name: "Cloud",
  icon: Cloud,
  color: "bg-blue-500"
}, {
  name: "Database",
  icon: Database,
  color: "bg-green-500"
}, {
  name: "Frontend",
  icon: Palette,
  color: "bg-pink-500"
}, {
  name: "Backend",
  icon: Cpu,
  color: "bg-orange-500"
}];
export const HeroSection = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory(prev => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400">
                <Trophy className="w-4 h-4 mr-2" />
                Prove Your Mastery
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Test Your Tech Skills.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {" "}Prove Your Mastery.
                </span>
              </h1>
              <p className="text-xl text-blue-200 max-w-lg">
                Choose your challenge from a wide range of developer categories and showcase your expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              
              
              
            </div>

            <div className="flex items-center gap-4 text-sm text-blue-300">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>10,000+ Tests Taken</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>5,000+ Developers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-4 opacity-20">
              {categories.map((category, index) => {
              const Icon = category.icon;
              return <div key={category.name} className={`p-6 rounded-xl ${category.color} transform transition-all duration-500 ${index === currentCategory ? 'scale-110 opacity-100' : 'opacity-40'}`}>
                    <Icon className="w-8 h-8 text-white mx-auto" />
                    <p className="text-center text-white mt-2 font-medium">{category.name}</p>
                  </div>;
            })}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <p className="text-2xl font-bold">Choose Your Challenge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};