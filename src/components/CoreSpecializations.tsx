"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
    Sparkles,
    Search,
    Globe,
    Code2,
    Laptop,
    Palette,
    Rocket,
    Cloud,
    Server,
    ExternalLink,
    CheckCircle2,
    Layers,
    Cpu,
    ArrowUpRight,
    TrendingUp,
    Columns3
} from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";

interface SpecializationItem {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    imageAspect: string;
    icon: React.ElementType;
    accentColor: string;
    accentGlow: string;
    accentBorder: string;
    description: string;
    highlights: string[];
    tags: string[];
    actionHref?: string;
    actionLabel?: string;
}

const specializations: SpecializationItem[] = [
    {
        id: "seo-aeo-geo",
        badge: "Search & Answer Intelligence",
        title: "SEO, AEO & GEO Core",
        subtitle: "Future-Ready Search, Answer Engines & Generative Visibility",
        image: `${ASSETS_PREFIX}/assets/images/digital-art.jpg`,
        imageAlt: "SEO, AEO and GEO Core Digital Intelligence vector artwork",
        imageAspect: "aspect-square max-h-[280px]",
        icon: Search,
        accentColor: "from-blue-500/20 via-indigo-500/10 to-transparent",
        accentGlow: "bg-blue-500/15",
        accentBorder: "group-hover:border-blue-500/40",
        description:
            "Optimizing not just for traditional search engines (Google SERP), but for Answer Engines (AEO) and Generative AI Engines (GEO like ChatGPT, Gemini, and Perplexity) to maximize organic reach.",
        highlights: [
            "Generative Engine Optimization (GEO) tailored for ChatGPT, Google Gemini, and Perplexity AI citations.",
            "Answer Engine Optimization (AEO) targeting rich snippets, voice search schemas, and direct AI responses.",
            "Technical Google SERP architecture, Core Web Vitals acceleration, and semantic entity graph authority."
        ],
        tags: ["Google SERP", "ChatGPT & Gemini", "Perplexity GEO", "Schema Entities", "Organic Reach", "AEO Snippets"],
        actionHref: "/services",
        actionLabel: "Explore SEO Strategy"
    },
    {
        id: "web-apps",
        badge: "Frontend Engineering",
        title: "Static & Dynamic Web Apps",
        subtitle: "Blazing Fast Pages & Robust Interactive Applications",
        image: `${ASSETS_PREFIX}/assets/images/webapps.svg`,
        imageAlt: "Static and Dynamic Web Applications responsive architecture diagram",
        imageAspect: "aspect-[16/10]",
        icon: Code2,
        accentColor: "from-cyan-500/20 via-teal-500/10 to-transparent",
        accentGlow: "bg-cyan-500/15",
        accentBorder: "group-hover:border-cyan-500/40",
        description:
            "Building lightning-fast static pages and robust dynamic applications with React, Next.js, and TypeScript, backed by seamless API integrations and responsive UI styling.",
        highlights: [
            "Next.js 16 App Router & React 19 architecture with static site generation (SSG) and server-side streaming.",
            "End-to-end TypeScript strict typing, resilient component systems, and Tailwind CSS 4 styling.",
            "Seamless API integrations, serverless microservice functions, dynamic forms, and responsive fluid viewports."
        ],
        tags: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS 4", "Serverless APIs", "SSG / SSR"],
        actionHref: "/portfolio",
        actionLabel: "View Web Projects"
    },
    {
        id: "design-deployment",
        badge: "Creative to Cloud",
        title: "Design to Live Deployment",
        subtitle: "Vector Precision, Marketing Content & Zero-Downtime Releases",
        image: `${ASSETS_PREFIX}/assets/images/media.png`,
        imageAlt: "Design to Live Deployment media marketing and production workflow",
        imageAspect: "aspect-[16/7]",
        icon: Palette,
        accentColor: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
        accentGlow: "bg-violet-500/15",
        accentBorder: "group-hover:border-violet-500/40",
        description:
            "Complete workflow from vector art & video marketing in Adobe Suite to version-controlled deployment across Git, AWS S3 buckets, and live cPanel production servers.",
        highlights: [
            "Adobe Creative Cloud mastery spanning precision Illustrator vector art, Photoshop manipulation, and Premiere video reels.",
            "Version-controlled delivery through Git with automated CI/CD pipelines and regression testing.",
            "Multi-environment deployment architecture spanning high-speed AWS S3 cloud buckets, GitHub Pages, and production cPanel servers."
        ],
        tags: ["Adobe Suite", "Vector Graphics", "Git CI/CD", "AWS S3 Buckets", "cPanel Servers", "Video Marketing"],
        actionHref: "/gallery",
        actionLabel: "Browse Creative Works"
    }
];

export function CoreSpecializations() {
    const [activeCard, setActiveCard] = React.useState<string | null>(null);

    return (
        <section
            id="capabilities"
            className="relative py-24 bg-gradient-to-b from-background via-secondary/15 to-background overflow-hidden border-t border-border/40"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-10 right-10 w-[400px] h-[250px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                        <Columns3 className="w-3.5 h-3.5 text-primary" />
                        <span>Core Architectural Pillars</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                        Bridging <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 bg-clip-text text-transparent">AI Search, Code & Design</span>
                    </h2>

                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        An integrated, full-cycle approach delivering high-ranking organic visibility, responsive high-performance web applications, and seamless end-to-end creative workflows.
                    </p>
                </motion.div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {specializations.map((item, index) => {
                        const IconComponent = item.icon;
                        const isExpanded = activeCard === item.id;

                        return (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                onMouseEnter={() => setActiveCard(item.id)}
                                onMouseLeave={() => setActiveCard(null)}
                                className={cn(
                                    "group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 backdrop-blur-xl p-6 sm:p-7 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5",
                                    item.accentBorder
                                )}
                            >
                                {/* Gradient highlight overlay */}
                                <div
                                    className={cn(
                                        "absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10",
                                        item.accentColor
                                    )}
                                />

                                <div className="space-y-6">
                                    {/* Top Bar: Icon, Badge, Arrow */}
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={cn(
                                                    "w-11 h-11 rounded-xl flex items-center justify-center border border-border/80 shadow-sm transition-transform duration-300 group-hover:scale-110",
                                                    item.accentGlow
                                                )}
                                            >
                                                <IconComponent className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                                                    Pillar 0{index + 1}
                                                </span>
                                                <p className="text-xs font-semibold text-primary">{item.badge}</p>
                                            </div>
                                        </div>

                                        {item.actionHref && (
                                            <Link
                                                href={item.actionHref}
                                                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors"
                                                aria-label={`Learn more about ${item.title}`}
                                            >
                                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </Link>
                                        )}
                                    </div>

                                    {/* Image Container */}
                                    <div
                                        className={cn(
                                            "relative w-full rounded-xl overflow-hidden border border-border/60 bg-muted/30 shadow-inner flex items-center justify-center p-3",
                                            item.imageAspect
                                        )}
                                    >
                                        <div className="relative w-full h-full min-h-[160px]">
                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt}
                                                fill
                                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Subtle Vignette overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent pointer-events-none" />
                                    </div>

                                    {/* Title & Core Description */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs font-medium text-muted-foreground/90">
                                            {item.subtitle}
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Highlights Checklist */}
                                    <div className="space-y-2.5 pt-2 border-t border-border/50">
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">
                                            Key Capabilities
                                        </p>
                                        <ul className="space-y-2 text-xs text-foreground/90">
                                            {item.highlights.map((point, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                    <span className="leading-snug">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer Tags & CTA */}
                                <div className="mt-6 pt-4 border-t border-border/50 space-y-4">
                                    {/* Tag Pills */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary text-secondary-foreground border border-border/60 transition-colors group-hover:border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action link */}
                                    {item.actionHref && item.actionLabel && (
                                        <Link
                                            href={item.actionHref}
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline group/btn pt-1"
                                        >
                                            <span>{item.actionLabel}</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                        </Link>
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
