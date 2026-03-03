import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, User, Briefcase, GraduationCap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ResumeData } from "@/types/resume";
import ResumeSummary from "./ResumeSummary";
import SkillsGrid from "./SkillsGrid";
import JobRecommendations from "./JobRecommendations";

interface DashboardViewProps {
  data: ResumeData;
  onBack: () => void;
}

const DashboardView = ({ data, onBack }: DashboardViewProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-display font-bold text-foreground">
                {data.name}
              </h1>
              <p className="text-sm text-muted-foreground">{data.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground bg-accent px-3 py-1 rounded-full">
              {data.recommendations.length} jobs matched
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList className="bg-muted p-1 rounded-xl">
            <TabsTrigger value="recommendations" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-card">
              <Target className="w-4 h-4" />
              Job Matches
            </TabsTrigger>
            <TabsTrigger value="summary" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-card">
              <User className="w-4 h-4" />
              Resume Summary
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-lg gap-2 data-[state=active]:bg-card data-[state=active]:shadow-card">
              <Briefcase className="w-4 h-4" />
              Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations">
            <JobRecommendations jobs={data.recommendations} />
          </TabsContent>

          <TabsContent value="summary">
            <ResumeSummary data={data} />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsGrid skills={data.skills} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardView;
