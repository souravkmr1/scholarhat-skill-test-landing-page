
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, LinkedinIcon, TwitterIcon, MessageCircle, Copy, Trophy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const SocialSharingSection = () => {
  const handleShare = (platform: string) => {
    const shareText = "I scored 93% in the Azure DevOps Test! Take your shot on ScholarHat.";
    const shareUrl = "https://scholarhat.com";
    let url = "";
    
    switch (platform) {
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareText + " " + shareUrl);
        toast({
          title: "Link copied!",
          description: "Share link has been copied to your clipboard."
        });
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Trophy className="w-4 h-4 mr-1" />
              Achievement Unlocked
            </Badge>
          </div>
          <CardTitle className="text-2xl">Share Your Success!</CardTitle>
          <p className="text-gray-600">Let others know about your excellent performance</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-medium">You scored 93% in Azure DevOps Test!</p>
            <p className="text-gray-500">Share this achievement with your network</p>
          </div>
          <div className="flex gap-3 justify-center">
            <Button 
              variant="outline" 
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2"
            >
              <TwitterIcon className="w-4 h-4" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleShare('whatsapp')}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleShare('copy')}
              className="flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy Link
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
