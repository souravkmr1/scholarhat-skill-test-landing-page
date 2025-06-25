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
  return;
};