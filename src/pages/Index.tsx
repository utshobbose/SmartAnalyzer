import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ResumeUpload from "@/components/ResumeUpload";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardView from "@/components/DashboardView";
import AuthModal from "@/components/AuthModal";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react";
import type { ResumeData } from "@/types/resume";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleResumeAnalyzed = (data: ResumeData) => {
    setResumeData(data);
    setIsAnalyzing(false);
  };

  if (resumeData) {
    return <DashboardView data={resumeData} onBack={() => setResumeData(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Nav bar with auth */}
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
        {user ? (
          <>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <User className="w-4 h-4" /> {user.name}
            </span>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-1.5" /> Sign Out
            </Button>
          </>
        ) : (
          <Button size="sm" onClick={() => setAuthOpen(true)}>
            <LogIn className="w-4 h-4 mr-1.5" /> Sign In
          </Button>
        )}
      </div>

      <HeroSection />
      <ResumeUpload
        onAnalyzing={() => setIsAnalyzing(true)}
        onAnalyzed={handleResumeAnalyzed}
        isAnalyzing={isAnalyzing}
        onAuthRequired={() => setAuthOpen(true)}
      />
      <FeaturesSection />

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
};

export default Index;