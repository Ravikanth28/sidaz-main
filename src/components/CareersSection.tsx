"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Clock, Users, ArrowRight, Mail, Sparkles, CheckCircle2, X, ArrowUpRight } from "lucide-react";
import { jobRoles, internships, JobRole } from "@/data/careers-data";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/ModalContext";

function JobCard({ job, onClick }: { job: JobRole; onClick: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
    const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            layoutId={`job-${job.id}`}
            onClick={onClick}
            transition={{
                layout: {
                    type: "spring",
                    stiffness: 800,
                    damping: 50,
                    mass: 0.4,
                    delay: 0
                }
            }}
            style={{ perspective: 1000 }}
            className="group relative cursor-pointer"
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 group-hover:border-violet-500/30 transition-colors duration-500 overflow-hidden shadow-2xl will-change-transform transform-gpu"
            >
                {/* Interactive Shine */}
                <motion.div
                    style={{
                        background: useTransform(
                            [shineX, shineY],
                            ([sx, sy]) => `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.08) 0%, transparent 80%)`
                        ),
                    }}
                    className="absolute inset-0 z-30 pointer-events-none"
                />

                <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                        <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                            job.type === "Remote" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                job.type === "Hybrid" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                                    "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        )}>
                            {job.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-medium uppercase tracking-widest">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors mb-2">
                            {job.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                            {job.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 2).map((req, i) => (
                            <span key={i} className="px-2.5 py-1 text-[10px] font-medium text-zinc-500 bg-white/5 border border-white/5 rounded-full">
                                {req}
                            </span>
                        ))}
                    </div>

                    <div className="pt-4 flex items-center gap-2 text-violet-400 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                        View Details
                        <ArrowRight className="w-3 h-3" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function InternshipCard({ intern, onApply }: { intern: any; onApply: (t: string, ty: string) => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
    const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="group relative"
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-violet-500/30 transition-colors duration-500 shadow-2xl overflow-hidden will-change-transform transform-gpu"
            >
                <motion.div
                    style={{
                        background: useTransform(
                            [shineX, shineY],
                            ([sx, sy]) => `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.08) 0%, transparent 80%)`
                        ),
                    }}
                    className="absolute inset-0 z-30 pointer-events-none"
                />

                <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                        <div className="p-2 rounded-xl bg-violet-600/10 border border-violet-500/20">
                            <GraduationCap className="w-5 h-5 text-violet-400" />
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                            <Clock className="w-3 h-3" />
                            {intern.duration}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">{intern.title}</h4>
                        <p className="text-[10px] text-violet-400 font-bold uppercase tracking-widest mb-3">Mentorship: {intern.mentorship}</p>
                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                            {intern.description}
                        </p>
                    </div>

                    <button
                        onClick={() => onApply(intern.title, "Internship")}
                        className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Apply Now
                        <Mail className="w-3.5 h-3.5" />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CareersSection() {
    const [activeTab, setActiveTab] = useState<"jobs" | "internships">("jobs");
    const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);
    const { setModalOpen } = useModal();

    const COMPANY_EMAIL = "sidaztechnologies@gmail.com";

    const handleApply = (title: string, type: string) => {
        const email = COMPANY_EMAIL;
        const subject = encodeURIComponent(`Application: ${title} (${type}) - SIDAZ`);
        const body = encodeURIComponent(
            `Hi SIDAZ Team,\n\nI am interested in applying for the ${title} role.\n\nMy Details:\n- Name: \n- Phone: \n- Portfolio/GitHub: \n- Experience Summary: \n\nPlease find my resume attached.\n\nBest regards,`
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Join our Mission</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Your Journey <span className="text-zinc-500">Starts Here.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-400 max-w-xl mx-auto"
                    >
                        We're looking for visionaries to help us define the future of technology and design.
                    </motion.p>

                    {/* Tab Switcher */}
                    <div className="flex justify-center mt-12">
                        <div className="relative p-1.5 bg-zinc-900 border border-white/10 rounded-2xl flex gap-2">
                            <button
                                onClick={() => setActiveTab("jobs")}
                                className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "jobs" ? "text-black" : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                Professional Roles
                                {activeTab === "jobs" && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 bg-white rounded-xl -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab("internships")}
                                className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "internships" ? "text-black" : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                Internship Program
                                {activeTab === "internships" && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 bg-white rounded-xl -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="container mx-auto px-4 max-w-6xl relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeTab === "jobs" ? (
                        <motion.div
                            key="jobs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {jobRoles.map((job) => (
                                <JobCard key={job.id} job={job} onClick={() => {
                                    setSelectedJob(job);
                                    setModalOpen(true);
                                }} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="internships"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {internships.map((intern) => (
                                <InternshipCard
                                    key={intern.id}
                                    intern={intern}
                                    onApply={handleApply}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Detail Modal for Job Roles */}
            <AnimatePresence onExitComplete={() => setModalOpen(false)}>
                {selectedJob && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto outline-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            onClick={() => setSelectedJob(null)}
                            className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
                        />

                        <motion.div
                            layoutId={`job-${selectedJob.id}`}
                            className="relative w-full max-w-4xl bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 z-10 flex flex-col max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,1)] will-change-transform"
                            transition={{
                                layout: {
                                    type: "spring",
                                    stiffness: 800,
                                    damping: 50,
                                    mass: 0.4,
                                    delay: 0
                                }
                            }}
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-8 right-8 z-20 p-2.5 rounded-full bg-black/50 hover:bg-white hover:text-black text-white transition-all border border-white/10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="h-40 w-full bg-gradient-to-b from-violet-600/20 to-transparent shrink-0" />

                            <div className="px-8 pb-12 md:px-14 overflow-y-auto custom-scrollbar">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <span className="px-4 py-1.5 rounded-full bg-violet-600/10 text-violet-400 text-[10px] font-black uppercase tracking-[0.2em] border border-violet-500/20">
                                                    {selectedJob.type}
                                                </span>
                                                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {selectedJob.location}
                                                </span>
                                            </div>
                                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                                                {selectedJob.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-[1fr_350px] gap-16">
                                        <div className="space-y-12">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-6">Mission & Impact</h4>
                                                <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                                                    {selectedJob.details}
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-6">Core Responsibilities</h4>
                                                <div className="grid gap-4">
                                                    {selectedJob.features.map((feature, i) => (
                                                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                                            <div className="w-8 h-8 rounded-full bg-violet-600/20 flex items-center justify-center shrink-0 mt-1">
                                                                <CheckCircle2 className="w-4 h-4 text-violet-500" />
                                                            </div>
                                                            <span className="text-zinc-300 leading-relaxed font-medium">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="space-y-8"
                                        >
                                            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                                <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">Job Requirements</h4>
                                                <ul className="space-y-5">
                                                    {selectedJob.requirements.map((req, i) => (
                                                        <li key={i} className="text-sm text-zinc-400 flex items-center gap-3 font-medium">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500/50" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    handleApply(selectedJob.title, selectedJob.type);
                                                    setSelectedJob(null);
                                                }}
                                                className="group/btn w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-violet-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(139,92,246,0.2)] active:scale-[0.98]"
                                            >
                                                Submit Application
                                                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                            </button>

                                            <p className="text-center text-zinc-500 text-[9px] font-bold uppercase tracking-widest">
                                                Standard response time: 24-48 Hours
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Redesigned Bottom Section - Service Page Style */}
            <section className="container mx-auto px-4 max-w-5xl text-center pb-20">
                <div
                    className="relative p-12 md:p-16 rounded-[3rem] bg-zinc-900 border border-white/5 overflow-hidden text-left"
                    style={{
                        background: `
              radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 0% 0%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)
            `
                    }}
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Ready to scale?</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Engineering <br />
                                <span className="text-zinc-500 italic">Careers.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                We're not just looking for employees; we're looking for partners in innovation.
                                Our team integrates deeply across diverse tech stacks to ensure we're always
                                at the forefront of digital evolution.
                            </p>
                        </div>

                        <div className="bg-white/[0.03] rounded-[2rem] p-8 border border-white/10 backdrop-blur-sm">
                            <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Contact Admissions</h4>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-violet-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-1">General Inquiries</p>
                                        <a href={`mailto:${COMPANY_EMAIL}`} className="text-lg font-bold text-white hover:text-violet-400 transition-colors">
                                            {COMPANY_EMAIL}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start pt-4 border-t border-white/5">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-1">Our Location</p>
                                        <p className="text-lg font-bold text-white">
                                            Puducherry, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleApply("General Collaboration", "Partnership")}
                                className="mt-8 flex items-center justify-center gap-2 w-full h-14 rounded-2xl bg-white text-black font-bold hover:bg-zinc-200 transition-all active:scale-[0.98]"
                            >
                                Inquire Directly
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
