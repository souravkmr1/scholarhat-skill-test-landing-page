
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
          description: "Share link has been copied to your clipboard.",
        });
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
                <Trophy className="w-8 h-8 text-yellow-400" />
                Share Your Achievement
              </CardTitle>
              <p className="text-xl text-blue-100 mt-2">
                Show the world your coding expertise
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Auto-generated share preview:</h3>
                <div className="bg-white text-gray-900 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      YN
                    </div>
                    <div>
                      <p className="font-semibold">Your Name</p>
                      <p className="text-sm text-gray-500">Just now</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-3">
                    🎯 I scored 93% in the Azure DevOps Test! Take your shot on ScholarHat.
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-100 text-blue-700">#AzureDevOps</Badge>
                    <Badge className="bg-green-100 text-green-700">#SkillTest</Badge>
                    <Badge className="bg-purple-100 text-purple-700">#ScholarHat</Badge>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  onClick={() => handleShare('linkedin')}
                  className="bg-blue-600 hover:bg-blue-700 text-white h-12"
                >
                  <LinkedinIcon className="w-5 h-5 mr-2" />
                  Share on LinkedIn
                </Button>
                <Button
                  onClick={() => handleShare('twitter')}
                  className="bg-sky-500 hover:bg-sky-600 text-white h-12"
                >
                  <TwitterIcon className="w-5 h-5 mr-2" />
                  Tweet Your Score
                </Button>
                <Button
                  onClick={() => handleShare('whatsapp')}
                  className="bg-green-600 hover:bg-green-700 text-white h-12"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp It
                </Button>
                <Button
                  onClick={() => handleShare('copy')}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 h-12"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Link
                </Button>
              </div>

              <div className="text-center">
                <p className="text-blue-100 mb-4">
                  Ready to earn your next achievement?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                    Take Another Test
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                    Challenge a Friend
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
