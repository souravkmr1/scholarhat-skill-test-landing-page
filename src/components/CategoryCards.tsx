
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Cloud, Database, Palette, Cpu, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All Courses",
    icon: Code,
    description: "All available skill tests",
    tests: [],
    count: 75,
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-50",
    textColor: "text-gray-700"
  },
  {
    id: "dotnet",
    name: ".NET Platform",
    icon: Code,
    description: "Master .NET Framework and Core technologies",
    tests: [
      { name: "ASP.NET Core Foundations", description: "Learn ASP.NET Core fundamentals" },
      { name: "ASP.NET MVC with Web API", description: "Build MVC applications with Web API" },
      { name: ".NET Design Patterns", description: "Master design patterns in .NET" },
      { name: ".NET Microservices", description: "Build microservices with .NET" }
    ],
    count: 12,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700"
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Prove your cloud infrastructure expertise",
    tests: [
      { name: "AWS Cloud Practitioner", description: "AWS fundamentals and best practices" },
      { name: "Azure Fundamentals", description: "Microsoft Azure cloud basics" },
      { name: "Docker Foundations", description: "Containerization with Docker" },
      { name: "Git & GitHub Mastery", description: "Version control and collaboration" }
    ],
    count: 18,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700"
  },
  {
    id: "databases",
    name: "Databases",
    icon: Database,
    description: "Test your database design and query skills",
    tests: [
      { name: "SQL Server Foundations", description: "Master SQL Server fundamentals" },
      { name: "MongoDB for Beginners", description: "NoSQL database concepts" },
      { name: "PostgreSQL Advanced", description: "Advanced PostgreSQL features" },
      { name: "Redis Caching", description: "In-memory data structure store" }
    ],
    count: 8,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700"
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: Palette,
    description: "Showcase your modern web development skills",
    tests: [
      { name: "ReactJS Foundations", description: "Build modern React applications" },
      { name: "Angular Foundations", description: "Complete Angular development" },
      { name: "Vue.js Essentials", description: "Progressive Vue.js framework" },
      { name: "TypeScript Mastery", description: "Type-safe JavaScript development" }
    ],
    count: 15,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700"
  },
  {
    id: "programming",
    name: "Programming",
    icon: Cpu,
    description: "Challenge your algorithmic thinking",
    tests: [
      { name: "Data Structures & Algorithms", description: "Core CS concepts and problem solving" },
      { name: "Node.js Foundations", description: "Server-side JavaScript development" },
      { name: "Python Fundamentals", description: "Python programming basics" },
      { name: "System Design", description: "Scalable system architecture" }
    ],
    count: 22,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700"
  }
];

export const CategoryCards = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const getFilteredCategories = () => {
    if (selectedTab === "all") {
      return categories.slice(1); // Exclude the "All Courses" category from display
    }
    return categories.filter(category => category.id === selectedTab);
  };

  const getTestsToDisplay = () => {
    if (selectedTab === "all") {
      return [];
    }
    const category = categories.find(cat => cat.id === selectedTab);
    return category?.tests || [];
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Challenge</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our comprehensive range of skill tests designed for developers at every level
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredCategories().map((category) => {
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
                      <div className="flex gap-2">
                        <Button 
                          className={`flex-1 bg-gradient-to-r ${category.color} hover:opacity-90 text-white`}
                          onClick={() => setSelectedTab(category.id)}
                        >
                          View Tests
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.tests.map((test, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index} className={`${category.bgColor} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className={`text-lg ${category.textColor}`}>{test.name}</CardTitle>
                            <CardDescription className="text-gray-600 mt-1">
                              {test.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex gap-2">
                          <Button className={`flex-1 bg-gradient-to-r ${category.color} hover:opacity-90 text-white`}>
                            Get Started Free
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
