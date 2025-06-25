
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Trophy, Share2, X, Plus } from "lucide-react";

export const FloatingActionWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <Card className="mb-4 w-64 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4 space-y-3">
            <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
              <Play className="w-4 h-4 mr-2" />
              Start New Test
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Trophy className="w-4 h-4 mr-2" />
              View Leaderboard
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Share2 className="w-4 h-4 mr-2" />
              Share My Score
            </Button>
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Plus className="w-6 h-6 text-white" />
        )}
      </Button>
    </div>
  );
};
