export interface JobRole {
    id: string;
    title: string;
    type: "Onsite" | "Remote" | "Hybrid";
    location: string;
    description: string;
    requirements: string[];
    details: string;
    features: string[];
}

export interface Internship {
    id: string;
    title: string;
    duration: string;
    mentorship: string;
    description: string;
    benefits: string[];
}

export const jobRoles: JobRole[] = [
    {
        id: "devops",
        title: "Senior DevOps Engineer",
        type: "Remote",
        location: "Global",
        description: "Architect and maintain our high-frequency cloud infrastructure. Optimize CI/CD pipelines and ensure system reliability.",
        requirements: ["Expertise in AWS & Kubernetes", "Infrastructure as Code (Terraform)", "Scripting proficiency in Python/Shell"],
        details: "As a Senior DevOps Engineer at SIDAZ, you will lead the evolution of our cloud-native infrastructure. You'll be responsible for building resilient, scalable systems that support our AI and SaaS platforms. We value automation over manual tasks and precision over speed.",
        features: [
            "Zero-downtime Deployment Pipelines",
            "Auto-scaling Kubernetes Cluster Management",
            "Advanced Monitoring & Observability Stack",
            "Cloud Cost Optimization & Security Auditing"
        ]
    },
    {
        id: "uiux",
        title: "Lead UI/UX Designer",
        type: "Hybrid",
        location: "Remote / Puducherry",
        description: "Define the visual language of our next-gen products. Create immersive, user-centric experiences that set industry standards.",
        requirements: ["Expertise in Figma & Prototyping", "Strong design system knowledge", "Motion design experience (Framer/GSAP)"],
        details: "Join our design collective to bridge the gap between complex technology and human intuition. You'll own the end-to-end design process, from user research to interactive prototypes. We're looking for someone who obsesses over micro-interactions and visual harmony.",
        features: [
            "Design System Architecture",
            "High-Fidelity Interaction Prototyping",
            "User Experience Research & Testing",
            "Visual Brand Evolution for Products"
        ]
    },
    {
        id: "cybersec",
        title: "Cybersecurity Analyst",
        type: "Onsite",
        location: "Puducherry, India",
        description: "Protect our digital frontiers. Conduct vulnerability assessments, manage incident responses, and ensure total data integrity.",
        requirements: ["CEH or OSCP Certification", "Deep understanding of network security", "Penetration testing experience"],
        details: "Security is at the heart of everything we build. As part of our Cybersecurity team, you'll act as both an architect and a guardian. You'll identify vulnerabilities before they can be exploited and build defense-in-depth strategies for our global clients.",
        features: [
            "Real-time Threat Monitoring & Response",
            "Comprehensive Penetration Testing",
            "Secure Software Development Lifecycle (SSDLC)",
            "Compliance & Security Posture Audits"
        ]
    }
];

export const internships: Internship[] = [
    {
        id: "int-ai",
        title: "AI Development Intern",
        duration: "3 Months",
        mentorship: "CTO & AI Researchers",
        description: "Work on custom LLMs and neural network pipelines.",
        benefits: ["Direct mentorship", "Real project impact", "PPO opportunity"]
    },
    {
        id: "int-tools",
        title: "AI Tools Intern",
        duration: "3 Months",
        mentorship: "Senior Product Engineers",
        description: "Build autonomous agents and workflow utilities.",
        benefits: ["Deep tech exposure", "Startup culture", "Certification"]
    },
    {
        id: "int-web",
        title: "Full Stack (SaaS) Intern",
        duration: "3 Months",
        mentorship: "Lead Developers",
        description: "Develop scalable multi-tenant web platforms.",
        benefits: ["Next.js mastery", "Full-stack ownership", "Paid internship"]
    },
    {
        id: "int-mobile",
        title: "Mobile App Development Intern",
        duration: "3 Months",
        mentorship: "Mobile Tech Leads",
        description: "Create cross-platform experiences using Flutter.",
        benefits: ["Native-quality design skills", "App store deployment", "Team collab"]
    },
    {
        id: "int-cloud",
        title: "Cloud Infrastructure Intern",
        duration: "3 Months",
        mentorship: "DevOps Lead",
        description: "Learn Kubernetes and cloud-native architecture.",
        benefits: ["AWS/Azure training", "IaC experience", "Production access"]
    },
    {
        id: "int-cyber",
        title: "Cybersecurity Intern",
        duration: "3 Months",
        mentorship: "Security Architects",
        description: "Assist in vulnerability scans and security audits.",
        benefits: ["Ethical hacking skills", "Security tools access", "Expert guidance"]
    },
    {
        id: "int-uiux",
        title: "UI/UX Design Intern",
        duration: "3 Months",
        mentorship: "Lead Designers",
        description: "Design intuitive interfaces and design systems.",
        benefits: ["Portfolio building", "Figma best practices", "Direct feedback"]
    },
    {
        id: "int-block",
        title: "Blockchain Intern",
        duration: "3 Months",
        mentorship: "Web3 Engineers",
        description: "Develop smart contracts and dApp interfaces.",
        benefits: ["Web3 expertise", "Solidity training", "Cutting-edge projects"]
    },
    {
        id: "int-consult",
        title: "Tech Strategy Intern",
        duration: "3 Months",
        mentorship: "Management Team",
        description: "Conduct market research and technical roadmapping.",
        benefits: ["Strategic thinking", "Client interaction", "Business of tech"]
    }
];
