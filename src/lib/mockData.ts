import type { ResumeData } from "@/types/resume";

export function generateMockResumeData(fileName: string): ResumeData {
  return {
    name: "Alex Johnson",
    title: "Senior Full-Stack Developer",
    summary:
      "Experienced full-stack developer with 6+ years building scalable web applications. Proficient in React, Node.js, Python, and cloud infrastructure. Strong background in agile methodologies and team leadership.",
    skills: [
      { name: "React", level: "expert", category: "Frontend" },
      { name: "TypeScript", level: "expert", category: "Languages" },
      { name: "Node.js", level: "advanced", category: "Backend" },
      { name: "Python", level: "advanced", category: "Languages" },
      { name: "PostgreSQL", level: "advanced", category: "Database" },
      { name: "AWS", level: "intermediate", category: "Cloud" },
      { name: "Docker", level: "intermediate", category: "DevOps" },
      { name: "GraphQL", level: "advanced", category: "API" },
      { name: "TailwindCSS", level: "expert", category: "Frontend" },
      { name: "Git", level: "expert", category: "Tools" },
      { name: "CI/CD", level: "intermediate", category: "DevOps" },
      { name: "MongoDB", level: "intermediate", category: "Database" },
    ],
    experience: [
      {
        title: "Senior Full-Stack Developer",
        company: "TechCorp Inc.",
        duration: "2021 – Present",
        highlights: [
          "Led team of 5 developers on microservices migration",
          "Reduced API latency by 40% through caching strategy",
          "Built real-time analytics dashboard serving 10K+ users",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "StartupXYZ",
        duration: "2019 – 2021",
        highlights: [
          "Developed customer-facing React application from scratch",
          "Implemented OAuth2 authentication system",
          "Integrated Stripe payment processing pipeline",
        ],
      },
      {
        title: "Junior Developer",
        company: "WebAgency",
        duration: "2017 – 2019",
        highlights: [
          "Built 15+ responsive websites for clients",
          "Maintained legacy PHP applications",
        ],
      },
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "State University",
        year: "2017",
      },
    ],
    recommendations: [
      {
        id: "1",
        title: "Senior Frontend Engineer",
        company: "Stripe",
        location: "San Francisco, CA (Remote)",
        matchScore: 94,
        salary: "$180K – $220K",
        skills: ["React", "TypeScript", "GraphQL", "CSS"],
        description:
          "Build and maintain Stripe's payment dashboard used by millions of businesses worldwide.",
        type: "Full-time",
      },
      {
        id: "2",
        title: "Staff Software Engineer",
        company: "Vercel",
        location: "Remote",
        matchScore: 89,
        salary: "$190K – $250K",
        skills: ["React", "Node.js", "TypeScript", "AWS"],
        description:
          "Work on Next.js infrastructure and developer tools powering the modern web.",
        type: "Full-time",
      },
      {
        id: "3",
        title: "Full-Stack Developer",
        company: "Notion",
        location: "New York, NY (Hybrid)",
        matchScore: 86,
        salary: "$160K – $200K",
        skills: ["React", "PostgreSQL", "Python", "TypeScript"],
        description:
          "Join the productivity tools team building collaborative workspace features.",
        type: "Full-time",
      },
      {
        id: "4",
        title: "Platform Engineer",
        company: "Datadog",
        location: "Boston, MA (Remote)",
        matchScore: 78,
        salary: "$170K – $210K",
        skills: ["Python", "AWS", "Docker", "PostgreSQL"],
        description:
          "Design and scale monitoring infrastructure for enterprise cloud observability.",
        type: "Full-time",
      },
      {
        id: "5",
        title: "React Developer",
        company: "Shopify",
        location: "Remote",
        matchScore: 82,
        salary: "$150K – $190K",
        skills: ["React", "TypeScript", "GraphQL", "Node.js"],
        description:
          "Build merchant-facing tools and e-commerce experiences for Shopify's admin platform.",
        type: "Full-time",
      },
      {
        id: "6",
        title: "Backend Engineer",
        company: "Linear",
        location: "Remote",
        matchScore: 72,
        salary: "$160K – $200K",
        skills: ["Node.js", "PostgreSQL", "TypeScript", "GraphQL"],
        description:
          "Work on the backend systems powering the fastest project management tool.",
        type: "Full-time",
      },
    ],
  };
}
