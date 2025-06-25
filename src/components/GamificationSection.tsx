
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Star, Target, Zap, TrendingUp } from "lucide-react";

export const GamificationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Track Your Progress</h2>
          <p className="text-xl text-gray-600">
            Earn badges, climb the leaderboard, and showcase your achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Progress Tracker</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Tests Completed</span>
                    <span className="font-medium">2/10</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Categories Explored</span>
                    <span className="font-medium">3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Average Score</span>
                    <span className="font-medium text-green-600">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Your Badges</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-medium">Bronze</p>
                  <p className="text-xs text-gray-500">First Test</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-medium">Silver</p>
                  <p className="text-xs text-gray-500">5 Tests</p>
                </div>
                <div className="text-center opacity-50">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-medium">Gold</p>
                  <p className="text-xs text-gray-500">10 Tests</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Recent Highlights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                  <Zap className="w-4 h-4 text-green-600" />
                  <div className="text-sm">
                    <p className="font-medium">Saurav scored 90% in React!</p>
                    <p className="text-gray-500 text-xs">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                  <Award className="w-4 h-4 text-blue-600" />
                  <div className="text-sm">
                    <p className="font-medium">Anjali earned Cloud Expert!</p>
                    <p className="text-gray-500 text-xs">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-purple-50 rounded-lg">
                  <Trophy className="w-4 h-4 text-purple-600" />
                  <div className="text-sm">
                    <p className="font-medium">New .NET record set!</p>
                    <p className="text-gray-500 text-xs">6 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
