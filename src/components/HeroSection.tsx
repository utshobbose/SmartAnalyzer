import { motion } from "framer-motion";
import { Brain, FileText, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero py-24 md:py-32">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/80 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Resume Intelligence</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-primary-foreground mb-6 leading-[1.1]">
            Your Resume,{" "}
            <span className="text-gradient-primary">Decoded</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            Upload your resume and let AI extract skills, match you with ideal jobs, 
            and show exactly where you stand. No guesswork.
          </p>

          <div className="flex items-center justify-center gap-6 text-primary-foreground/40 text-sm">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>PDF Support</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>NLP Analysis</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Smart Matching</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
