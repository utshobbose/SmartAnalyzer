import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, DollarSign, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { JobRecommendation } from "@/types/resume";
import MatchScoreRing from "./MatchScoreRing";

interface JobRecommendationsProps {
  jobs: JobRecommendation[];
}

const JobRecommendations = ({ jobs }: JobRecommendationsProps) => {
  const [search, setSearch] = useState("");

  const filtered = jobs
    .filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Filter by title, company, or skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
        <span className="text-sm text-muted-foreground">
          {filtered.length} job{filtered.length !== 1 ? "s" : ""} found
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
              <MatchScoreRing score={job.matchScore} />
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                {job.salary}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {job.type}
              </span>
            </div>

            <Button variant="outline" size="sm" className="w-full gap-2">
              <ExternalLink className="w-3 h-3" />
              View Details
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
