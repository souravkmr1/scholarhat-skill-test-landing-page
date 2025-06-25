
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Medal, Award, Crown } from "lucide-react";

const leaderboardData = {
  overall: [
    { rank: 1, name: "Alex Chen", score: 95, tests: 8, avatar: "AC" },
    { rank: 2, name: "Sarah Wilson", score: 92, tests: 12, avatar: "SW" },
    { rank: 3, name: "Raj Patel", score: 89, tests: 6, avatar: "RP" },
    { rank: 4, name: "Emily Davis", score: 87, tests: 9, avatar: "ED" },
    { rank: 5, name: "Michael Brown", score: 85, tests: 7, avatar: "MB" },
  ],
  dotnet: [
    { rank: 1, name: "Sarah Wilson", score: 98, tests: 5, avatar: "SW" },
    { rank: 2, name: "Alex Chen", score: 94, tests: 3, avatar: "AC" },
    { rank: 3, name: "David Kim", score: 91, tests: 4, avatar: "DK" },
  ],
  cloud: [
    { rank: 1, name: "Raj Patel", score: 96, tests: 4, avatar: "RP" },
    { rank: 2, name: "Emily Davis", score: 93, tests: 6, avatar: "ED" },
    { rank: 3, name: "Alex Chen", score: 90, tests: 2, avatar: "AC" },
  ],
};

export const LeaderboardSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('overall');

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-500" />;
      default:
        return <Trophy className="w-5 h-5 text-gray-400" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-500";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-400";
      case 3:
        return "bg-gradient-to-r from-orange-400 to-orange-500";
      default:
        return "bg-gradient-to-r from-blue-400 to-blue-500";
    }
  };

  return (
    <Card className="bg-white border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Live Leaderboard
          </CardTitle>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overall">All Categories</SelectItem>
              <SelectItem value="dotnet">.NET</SelectItem>
              <SelectItem value="cloud">Cloud & DevOps</SelectItem>
              <SelectItem value="frontend">Frontend</SelectItem>
              <SelectItem value="database">Database</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData[selectedCategory as keyof typeof leaderboardData]?.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center gap-4 p-4 rounded-lg ${
                user.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'bg-gray-50'
              } hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${getRankColor(user.rank)}`}>
                  {user.rank}
                </div>
                {getRankIcon(user.rank)}
              </div>
              
              <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold`}>
                {user.avatar}
              </div>
              
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.tests} tests completed</p>
              </div>
              
              <Badge className="bg-green-100 text-green-700 border-green-200">
                {user.score}%
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" className="w-full">
            View Full Leaderboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
