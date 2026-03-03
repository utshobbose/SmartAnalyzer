import { motion } from "framer-motion";
import { Brain, Search, BarChart3, Shield, Zap, FileText } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "NLP Skill Extraction",
    description: "AI identifies your technical skills, soft skills, and domain expertise using Named Entity Recognition.",
  },
  {
    icon: Search,
    title: "Semantic Job Matching",
    description: "Embeddings & cosine similarity match your profile to relevant positions with precision.",
  },
  {
    icon: BarChart3,
    title: "Match Score Analytics",
    description: "Visual match percentages show exactly how well each job aligns with your profile.",
  },
  {
    icon: FileText,
    title: "Resume Summary",
    description: "Get an instant, structured overview of your experience, education, and key qualifications.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Upload and get recommendations in seconds — no waiting, no manual data entry.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your resume data is processed securely and never shared with third parties.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powered by advanced NLP and machine learning to deliver accurate, personalized job recommendations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
