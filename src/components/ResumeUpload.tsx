import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { generateMockResumeData } from "@/lib/mockData";
import type { ResumeData } from "@/types/resume";

interface ResumeUploadProps {
  onAnalyzing: () => void;
  onAnalyzed: (data: ResumeData) => void;
  isAnalyzing: boolean;
}

const ResumeUpload = ({ onAnalyzing, onAnalyzed, isAnalyzing }: ResumeUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFile = useCallback(
    (file: File) => {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
        return;
      }
      setFileName(file.name);
      onAnalyzing();

      // Simulate AI analysis
      setTimeout(() => {
        const data = generateMockResumeData(file.name);
        onAnalyzed(data);
        toast({
          title: "Resume Analyzed!",
          description: "Your resume has been successfully parsed and matched.",
        });
      }, 3000);
    },
    [onAnalyzing, onAnalyzed, toast]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <section className="py-20 px-4" id="upload">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`relative rounded-2xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
              isDragging
                ? "border-primary bg-accent shadow-glow"
                : "border-border bg-card hover:border-primary/40 hover:shadow-card"
            }`}
          >
            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      Analyzing {fileName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Extracting skills, experience & matching jobs...
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {["Parsing PDF", "NLP Analysis", "Job Matching"].map((step, i) => (
                      <span
                        key={step}
                        className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground animate-pulse"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      Upload Your Resume
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Drag & drop a PDF or click to browse
                    </p>
                  </div>
                  <label>
                    <Button variant="default" className="cursor-pointer" asChild>
                      <span>
                        <FileText className="w-4 h-4 mr-2" />
                        Choose PDF File
                      </span>
                    </Button>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                  </label>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeUpload;
