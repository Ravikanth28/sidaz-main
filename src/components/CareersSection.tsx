"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Clock, Users, ArrowRight, Mail, Sparkles, CheckCircle2, X, ArrowUpRight } from "lucide-react";
import { jobRoles, internships, JobRole } from "@/data/careers-data";
import { cn } from "@/lib/utils";

export default function CareersSection() {
    const [activeTab, setActiveTab] = useState<"jobs" | "internships">("jobs");
    const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);

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
        <div className="py-20 space-y-20 min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center max-w-4xl pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
                >
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Join our Mission</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
                >
                    Your Journey <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 font-extrabold">
                        Starts Here.
                    </span>
                </motion.h1>

                {/* Tab Switcher */}
                <div className="flex justify-center mt-12 mb-16">
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
            </section>

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
                                <motion.div
                                    key={job.id}
                                    layoutId={`job-${job.id}`}
                                    onClick={() => setSelectedJob(job)}
                                    className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-violet-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                                            <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors mb-2">
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

                                        <div className="pt-4 flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                            View Details
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </motion.div>
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
                                <div
                                    key={intern.id}
                                    className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-violet-500/30 transition-all duration-500"
                                >
                                    <div className="space-y-6">
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
                                            <h4 className="text-lg font-bold text-white mb-2">{intern.title}</h4>
                                            <p className="text-xs text-violet-400 font-bold uppercase tracking-wider mb-3">Mentorship: {intern.mentorship}</p>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                {intern.description}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => handleApply(intern.title, "Internship")}
                                            className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            Apply Now
                                            <Mail className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Detail Modal for Job Roles */}
            <AnimatePresence>
                {selectedJob && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedJob(null)}
                            className="absolute inset-0 bg-black/90"
                        />

                        <motion.div
                            layoutId={`job-${selectedJob.id}`}
                            className="relative w-full max-w-3xl bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 z-10 flex flex-col max-h-[90vh] will-change-transform"
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/50 hover:bg-white hover:text-black text-white transition-all border border-white/10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="h-32 w-full bg-gradient-to-b from-violet-600/20 to-transparent shrink-0" />

                            <div className="px-8 pb-10 md:px-12 overflow-y-auto custom-scrollbar">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 rounded-full bg-violet-600/10 text-violet-400 text-[10px] font-bold uppercase tracking-widest border border-violet-500/20">
                                                    {selectedJob.type}
                                                </span>
                                                <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest flex items-center gap-1.5">
                                                    <MapPin className="w-3 h-3" />
                                                    {selectedJob.location}
                                                </span>
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                                                {selectedJob.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-12">
                                        <div className="md:col-span-2 space-y-8">
                                            <div>
                                                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Role Overview</h4>
                                                <p className="text-lg text-zinc-300 leading-relaxed">
                                                    {selectedJob.details}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Key Responsibilities</h4>
                                                <ul className="space-y-4">
                                                    {selectedJob.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-zinc-400">
                                                            <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                                                            <span className="leading-relaxed">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Requirements</h4>
                                                <ul className="space-y-3">
                                                    {selectedJob.requirements.map((req, i) => (
                                                        <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
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
                                                className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl"
                                            >
                                                Apply Now
                                                <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        </div>
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
        </div>
    );
}
