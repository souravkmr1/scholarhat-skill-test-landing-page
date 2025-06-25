
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Palette, Cpu, ArrowRight } from "lucide-react";

const categories = [
  {
    name: ".NET",
    icon: Code,
    description: "Master .NET Framework and Core technologies",
    tests: [".NET Core", "ASP.NET", "Entity Framework", "C#"],
    count: 12,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700"
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Prove your cloud infrastructure expertise",
    tests: ["Azure", "AWS", "Docker", "Kubernetes"],
    count: 18,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700"
  },
  {
    name: "Databases",
    icon: Database,
    description: "Test your database design and query skills",
    tests: ["SQL Server", "MongoDB", "PostgreSQL", "Redis"],
    count: 8,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700"
  },
  {
    name: "Frontend",
    icon: Palette,
    description: "Showcase your modern web development skills",
    tests: ["React", "Angular", "Vue.js", "TypeScript"],
    count: 15,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700"
  },
  {
    name: "Programming",
    icon: Cpu,
    description: "Challenge your algorithmic thinking",
    tests: ["C#", "Python", "Java", "System Design"],
    count: 22,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700"
  }
];

export const CategoryCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Challenge</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our comprehensive range of skill tests designed for developers at every level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className={`${category.bgColor} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className={`${category.textColor} bg-white`}>
                      {category.count} tests
                    </Badge>
                  </div>
                  <CardTitle className={`text-xl ${category.textColor}`}>{category.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.tests.slice(0, 3).map((test) => (
                      <Badge key={test} variant="outline" className="text-xs">
                        {test}
                      </Badge>
                    ))}
                    {category.tests.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.tests.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button className={`flex-1 bg-gradient-to-r ${category.color} hover:opacity-90 text-white`}>
                      Start Test
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="sm" className={`${category.textColor} border-current`}>
                      View All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
