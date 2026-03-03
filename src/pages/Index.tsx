import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ResumeUpload from "@/components/ResumeUpload";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardView from "@/components/DashboardView";
import type { ResumeData } from "@/types/resume";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleResumeAnalyzed = (data: ResumeData) => {
    setResumeData(data);
    setIsAnalyzing(false);
  };

  if (resumeData) {
    return <DashboardView data={resumeData} onBack={() => setResumeData(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ResumeUpload
        onAnalyzing={() => setIsAnalyzing(true)}
        onAnalyzed={handleResumeAnalyzed}
        isAnalyzing={isAnalyzing}
      />
      <FeaturesSection />
    </div>
  );
};

export default Index;
