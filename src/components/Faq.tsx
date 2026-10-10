"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
    HelpCircle,
    ChevronDown,
    MessageCircle,
    Mail,
    Phone,
    Sparkles,
    Send,
    ExternalLink,
    CheckCircle2,
    ArrowRight,
    MessageSquareText
} from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";

interface FaqItem {
    id: string;
    category: "general" | "seo" | "dev" | "creative";
    question: string;
    answer: string;
    highlights?: string[];
}

const faqData: FaqItem[] = [
    {
        id: "services",
        category: "general",
        question: "What core services and solutions do you specialize in?",
        answer:
            "I provide end-to-end digital solutions spanning three core pillars: Modern Frontend Web Development (React 19, Next.js 16, TypeScript), Advanced Search & Generative AI Optimization (SEO, AEO, and GEO), and High-Impact Creative Content (Adobe Illustrator vector graphics, Premiere Pro video reels, and brand identity).",
        highlights: [
            "Full-cycle development from vector design to production deployment.",
            "Integrated organic search & generative AI citation strategies.",
            "Pixel-perfect responsive design with modern Tailwind CSS."
        ]
    },
    {
        id: "geo-aeo",
        category: "seo",
        question: "How do SEO, AEO, and GEO differ, and why are all three critical?",
        answer:
            "Traditional SEO optimizes for Google search rankings and backlinks. Answer Engine Optimization (AEO) targets direct answers, voice queries, and rich featured snippets. Generative Engine Optimization (GEO) strategically structures semantic entities and topical authority so AI engines like ChatGPT, Google Gemini, and Perplexity actively cite your brand in generative responses.",
        highlights: [
            "AEO targets immediate position-zero answers and structured schemas.",
            "GEO trains AI engines to recognize and cite your entity as the canonical authority.",
            "Combined approach maximizes visibility across classic SERPs and conversational AI."
        ]
    },
    {
        id: "web-apps",
        category: "dev",
        question: "Can you build and deploy both static and dynamic web applications?",
        answer:
            "Yes! I build high-performance static websites (SSG) for lightning-fast delivery as well as dynamic web applications (SSR / Serverless) with React, Next.js, TypeScript, and robust API integrations. Every project includes responsive styling, secure form processing, and zero-downtime deployment pipelines.",
        highlights: [
            "Sub-second load times with optimized asset delivery.",
            "Type-safe architecture ensuring reliability and scalability.",
            "Continuous deployment across Git, AWS S3, or cPanel servers."
        ]
    },
    {
        id: "workflow",
        category: "creative",
        question: "What is your workflow from design concept to live production?",
        answer:
            "I manage the complete production pipeline: starting with vector art, wireframing, and video assets in Adobe Creative Suite (Illustrator, Photoshop, Premiere Pro), translating designs into modular React components, managing code versions via Git, and deploying to cloud buckets (AWS S3) or production hosts with automated CI/CD.",
        highlights: [
            "Unified design and engineering workflow eliminating agency friction.",
            "Version-controlled asset management and clean Git commit history.",
            "Automated build checks ensuring flawless cross-device performance."
        ]
    },
    {
        id: "collaboration",
        category: "general",
        question: "Are you available for freelance projects or full-time opportunities?",
        answer:
            "Yes! I am open to freelance collaborations, consulting, and full-time engineering and marketing roles. Whether you need a brand-new web application, an SEO/AEO audit, or high-converting creative assets, feel free to reach out directly.",
        highlights: [
            "Flexible engagement models for startups, agencies, and businesses.",
            "Fast project turnaround with transparent communication.",
            "Direct access via WhatsApp or email for ongoing milestones."
        ]
    },
    {
        id: "timeline",
        category: "general",
        question: "How quickly can we kick off a new project?",
        answer:
            "We can begin immediately upon scoping your goals. Once we align on requirements, deliverable milestones, and timelines, initial concepts and architecture typically begin within 24 to 48 hours.",
        highlights: [
            "Rapid onboarding and clear project roadmap.",
            "Interactive milestone reviews throughout development.",
            "Dedicated post-launch support and performance tracking."
        ]
    }
];

const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General & Hiring" },
    { id: "seo", label: "SEO & AI (GEO/AEO)" },
    { id: "dev", label: "Web Applications" },
    { id: "creative", label: "Design & Workflow" }
] as const;

export function Faq() {
    const [openId, setOpenId] = React.useState<string | null>("services");
    const [activeCategory, setActiveCategory] = React.useState<string>("all");

    const filteredFaqs = React.useMemo(() => {
        if (activeCategory === "all") return faqData;
        return faqData.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    const toggleFaq = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section
            id="faq"
            className="relative py-24 bg-gradient-to-b from-background via-secondary/15 to-background overflow-hidden border-t border-border/40"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 right-10 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                    {/* LEFT COLUMN: Vector Illustration, Header, and Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 flex flex-col justify-between space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                                <HelpCircle className="w-3.5 h-3.5" />
                                <span>Got Questions? We Have Answers</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                                Frequently Asked{" "}
                                <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
                                    Questions
                                </span>
                            </h2>

                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                Everything you need to know about our web development capabilities, AI search strategies, creative workflows, and project collaborations.
                            </p>
                        </div>

                        {/* High-Impact FAQ Vector Illustration */}
                        <div className="relative w-full aspect-square max-w-[380px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border/70 bg-gradient-to-b from-card/80 to-secondary/30 p-6 shadow-xl group">
                            <div className="relative w-full h-full">
                                <Image
                                    src={`${ASSETS_PREFIX}/assets/images/faq.svg`}
                                    alt="FAQ Assistance and Support Vector Illustration"
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Floating Helper Tag */}
                            <div className="absolute bottom-4 left-4 right-4 bg-background/85 backdrop-blur-md rounded-xl p-3 border border-border/80 shadow-md flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-semibold text-foreground">Have a specific question?</span>
                                </div>
                                <span className="text-[11px] text-muted-foreground font-medium">Instant Support</span>
                            </div>
                        </div>

                        {/* ACTION BUTTONS: Contact Button & Chat Me Button */}
                        <div className="space-y-4 pt-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Still have unanswered queries? Let&apos;s talk:
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* 1. CONTACT BUTTON */}
                                <Link
                                    href="/contact"
                                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Contact Me</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                {/* 2. CHAT ME BUTTON (WhatsApp Direct) */}
                                <a
                                    href="https://wa.me/qr/GTP2HAM2XOBJF1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                    </span>
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Chat with Me</span>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                                </a>
                            </div>

                            {/* Additional Quick Contact Card */}
                            <div className="flex items-center justify-between p-3.5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm text-xs text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-3.5 h-3.5 text-primary" />
                                    <span>Direct phone:</span>
                                </div>
                                <a
                                    href="tel:+917358198244"
                                    className="font-semibold text-foreground hover:text-primary transition-colors"
                                >
                                    +91 73581 98244
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Category Filter & Interactive Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap gap-2 pb-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={cn(
                                        "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200",
                                        activeCategory === cat.id
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "bg-secondary/70 text-secondary-foreground hover:bg-secondary border border-border/60"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Accordion List */}
                        <div className="space-y-3.5">
                            {filteredFaqs.map((faq, index) => {
                                const isOpen = openId === faq.id;

                                return (
                                    <div
                                        key={faq.id}
                                        className={cn(
                                            "rounded-2xl border transition-all duration-300 overflow-hidden bg-card/80 backdrop-blur-xl",
                                            isOpen
                                                ? "border-primary/50 shadow-lg shadow-primary/5 bg-card"
                                                : "border-border/70 hover:border-border hover:bg-card/95 shadow-sm"
                                        )}
                                    >
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="flex items-center justify-between w-full p-5 sm:p-6 text-left transition-colors"
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-center gap-3 pr-4">
                                                <div
                                                    className={cn(
                                                        "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors",
                                                        isOpen
                                                            ? "bg-primary text-primary-foreground"
                                                            : "bg-secondary text-muted-foreground"
                                                    )}
                                                >
                                                    {index + 1}
                                                </div>
                                                <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                                                    {faq.question}
                                                </h3>
                                            </div>

                                            <div
                                                className={cn(
                                                    "p-1.5 rounded-lg border border-border/80 bg-secondary/50 text-muted-foreground transition-transform duration-300 shrink-0",
                                                    isOpen && "rotate-180 bg-primary/10 text-primary border-primary/30"
                                                )}
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-muted-foreground border-t border-border/50 space-y-4">
                                                        <p className="leading-relaxed text-foreground/90 pt-3">
                                                            {faq.answer}
                                                        </p>

                                                        {faq.highlights && faq.highlights.length > 0 && (
                                                            <div className="rounded-xl border border-border/60 bg-secondary/30 p-4 space-y-2">
                                                                <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                                                                    Highlights
                                                                </p>
                                                                <ul className="space-y-1.5 text-xs text-foreground/85">
                                                                    {faq.highlights.map((item, hIdx) => (
                                                                        <li key={hIdx} className="flex items-start gap-2">
                                                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                                            <span className="leading-snug">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
