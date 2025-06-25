
import { Button } from "@/components/ui/button";
import { Play, Trophy, Share2, Target } from "lucide-react";

export const MobileFooter = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
      <div className="flex gap-3">
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
          <Target className="w-4 h-4 mr-2" />
          Start Test
        </Button>
        <Button variant="outline" size="sm" className="px-3">
          <Trophy className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="sm" className="px-3">
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
