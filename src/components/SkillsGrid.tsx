import { motion } from "framer-motion";
import type { Skill } from "@/types/resume";

interface SkillsGridProps {
  skills: Skill[];
}

const levelColors: Record<Skill["level"], string> = {
  beginner: "bg-muted text-muted-foreground",
  intermediate: "bg-info/10 text-info",
  advanced: "bg-primary/10 text-primary",
  expert: "bg-success/10 text-success",
};

const levelWidths: Record<Skill["level"], string> = {
  beginner: "w-1/4",
  intermediate: "w-1/2",
  advanced: "w-3/4",
  expert: "w-full",
};

const SkillsGrid = ({ skills }: SkillsGridProps) => {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="space-y-8 max-w-3xl">
      {categories.map((category) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border bg-card p-6 shadow-card"
        >
          <h3 className="font-display font-semibold text-foreground mb-4">{category}</h3>
          <div className="space-y-3">
            {skills
              .filter((s) => s.category === category)
              .map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground w-28 shrink-0">
                    {skill.name}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`h-full rounded-full bg-primary ${levelWidths[skill.level]}`}
                    />
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full capitalize ${levelColors[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
