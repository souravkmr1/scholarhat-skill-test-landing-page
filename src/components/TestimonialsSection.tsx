
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Developer",
    company: "Tech Corp",
    avatar: "PS",
    rating: 5,
    text: "ScholarHat skill tests helped me identify my weak areas and improve significantly. The .NET tests are particularly comprehensive!",
    category: ".NET",
    score: 94
  },
  {
    name: "James Miller",
    role: "DevOps Engineer",
    company: "Cloud Solutions",
    avatar: "JM",
    rating: 5,
    text: "The cloud certification tests are spot-on with real-world scenarios. Helped me ace my Azure certification!",
    category: "Cloud",
    score: 91
  },
  {
    name: "Lisa Zhang",
    role: "Frontend Developer",
    company: "Design Studio",
    avatar: "LZ",
    rating: 5,
    text: "React tests are challenging and up-to-date with latest practices. Great way to validate your skills!",
    category: "Frontend",
    score: 89
  }
];

export const TestimonialsSection = () => {
  return (
    <Card className="bg-white border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Quote className="w-6 h-6 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-900">What Developers Say</h3>
        </div>
        
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold`}>
                  {testimonial.avatar}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.category}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {testimonial.score}%
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                  
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-center text-blue-700 font-medium">
            Join 5,000+ developers who've improved their skills with ScholarHat!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
