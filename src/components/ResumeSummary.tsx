import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FileText } from "lucide-react";
import type { ResumeData } from "@/types/resume";

interface ResumeSummaryProps {
  data: ResumeData;
}

const ResumeSummary = ({ data }: ResumeSummaryProps) => {
  return (
    <div className="space-y-6 max-w-3xl">
      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border bg-card p-6 shadow-card"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-foreground">Professional Summary</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{data.summary}</p>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-border bg-card p-6 shadow-card"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-foreground">Experience</h3>
        </div>
        <div className="space-y-6">
          {data.experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-border">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
              <h4 className="font-semibold text-foreground">{exp.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {exp.company} · {exp.duration}
              </p>
              <ul className="space-y-1">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border border-border bg-card p-6 shadow-card"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-foreground">Education</h3>
        </div>
        <div className="space-y-3">
          {data.education.map((edu, i) => (
            <div key={i}>
              <h4 className="font-semibold text-foreground">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground">
                {edu.institution} · {edu.year}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeSummary;
