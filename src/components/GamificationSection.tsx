
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Users } from "lucide-react";

export const GamificationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Progress</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Level up your skills with our comprehensive tracking system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Progress Tracker */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5 text-blue-600" />
                Progress Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-500">2/10 tests</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2</div>
                    <div className="text-sm text-gray-500">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">89%</div>
                    <div className="text-sm text-gray-500">Avg Score</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="w-5 h-5 text-yellow-600" />
                Your Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">First Test Completed</p>
                    <p className="text-xs text-gray-500">Bronze Badge</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-400">5 Tests Completed</p>
                    <p className="text-xs text-gray-400">Silver Badge (Locked)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-400">10 Tests Completed</p>
                    <p className="text-xs text-gray-400">Gold Badge (Locked)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Highlights */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-green-600" />
                Recent Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    🎉 Saurav scored 90% in React Challenge!
                  </p>
                  <p className="text-xs text-green-600 mt-1">2 hours ago</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    🏅 Anjali just earned the Cloud Expert Badge!
                  </p>
                  <p className="text-xs text-blue-600 mt-1">4 hours ago</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">
                    💪 Rahul completed 5 tests this week!
                  </p>
                  <p className="text-xs text-purple-600 mt-1">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
