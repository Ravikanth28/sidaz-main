"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "Windows";
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  downloadLink?: string;
  downloads?: { name: string; url: string; description: string }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "study-sync",
    title: "Study Sync",
    category: "Mobile",
    description: "Comprehensive learning management ecosystem streamlining academic operations with real-time Firebase sync. Revolutionizing how students and educators interact.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Flutter", "Firebase", "Real-time"],
    link: "#",
    featured: true
  },
  {
    id: "lactation-hub",
    title: "Global Breastfeeding Clinic",
    category: "Web",
    description: "Global digital health platform for breastfeeding support with virtual consultations. Connecting health professionals and mothers worldwide.",
    image: "/images/team/gbc-logo.png",
    tags: ["Next.js", "Sanity CMS", "Tailwind"],
    link: "https://www.globalbreastfeedingclinic.com/"
  },
  {
    id: "lab-assistant",
    title: "Lab Assistant",
    category: "Windows",
    description: "Enterprise-grade Windows application for monitoring labs during tests, providing real-time oversight, remote management, and academic integrity assurance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    tags: ["Windows", "Desktop App", "Monitoring"],
    downloadLink: "#",
    featured: true
  }
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { setModalOpen, setPortfolioInView } = useModal();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPortfolioInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setPortfolioInView]);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full min-h-screen py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)
        `
      }}
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span>Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 font-extrabold italic">
              Innovations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Delivering high-impact digital solutions that redefine industry standards and empower businesses.
          </motion.p>
        </div>

        {/* Focused Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`project-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleOpenModal(project)}
              className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-zinc-900 border border-white/5 hover:border-violet-500/30 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              <div className="p-10 relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 text-[10px] font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                  {project.featured && (
                    <div className="flex items-center gap-1.5 p-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Featured</span>
                    </div>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors tracking-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold text-zinc-500 bg-black/40 border border-white/5 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence onExitComplete={() => setModalOpen(false)}>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-5xl bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 z-10 flex flex-col max-h-[90vh] shadow-[0_0_100px_-30px_rgba(139,92,246,0.3)]"
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-8 right-8 z-20 p-3 rounded-full bg-black/50 hover:bg-white hover:text-black text-white transition-all border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-[25rem] w-full shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
              </div>

              <div className="p-12 md:p-16 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full uppercase tracking-widest">
                        {selectedProject.category}
                      </span>
                      {selectedProject.featured && (
                        <span className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
                          <Sparkles className="w-4 h-4" /> Award Winning
                        </span>
                      )}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a href={selectedProject.github} className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10">
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {selectedProject.link && (
                      <a href={selectedProject.link} className="px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-xl">
                        <span>Launch Project</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">The Solution</h4>
                    <p className="text-2xl text-zinc-300 leading-relaxed font-medium">
                      {selectedProject.description}
                    </p>
                    <div className="mt-12 p-8 rounded-[2rem] bg-white/5 border border-white/5">
                      <h5 className="text-white font-bold mb-4">Core Philosophy</h5>
                      <p className="text-zinc-400 leading-relaxed text-lg">
                        We approached this project with a focus on extreme scalability and visceral user experiences.
                        By leveraging a cutting-edge tech stack, we ensured that the final product not only met
                        but exceeded technical requirements while maintaining an emotional connection with the users.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-5 py-2.5 text-xs font-bold text-zinc-300 bg-white/5 rounded-2xl border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/5">
                      <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Impact</h4>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-violet-500" />
                          <p className="text-white font-bold">100% Reliability</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                          <p className="text-white font-bold">Award-winning UI</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <p className="text-white font-bold">Seamless Integration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}