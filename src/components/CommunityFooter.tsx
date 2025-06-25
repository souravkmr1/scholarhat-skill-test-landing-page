
import { Button } from "@/components/ui/button";

export const CommunityFooter = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Start your skill assessment journey today and discover where you stand in your field
        </p>
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
        >
          Take Your First Test
        </Button>
      </div>
    </div>
  );
};
