
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCards } from "@/components/CategoryCards";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SocialSharingSection } from "@/components/SocialSharingSection";
import { FloatingActionWidget } from "@/components/FloatingActionWidget";
import { MobileFooter } from "@/components/MobileFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <CategoryCards />
      <WhyChooseSection />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <LeaderboardSection />
          <TestimonialsSection />
        </div>
      </div>
      <SocialSharingSection />
      <FloatingActionWidget />
      <MobileFooter />
    </div>
  );
};

export default Index;
