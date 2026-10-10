"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, Code2, Palette, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";

type ToolCategory = "all" | "seo" | "dev" | "adobe";

interface ToolItem {
    name: string;
    category: "seo" | "dev" | "adobe";
    categoryLabel: string;
    description: string;
    highlight: string;
    iconLight: string;
    iconDark?: string;
    tags: string[];
}

const allTools: ToolItem[] = [
    // 1. SEO TOOLS
    {
        name: "Ahrefs",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "Comprehensive backlink analysis, competitor keyword gap discovery, SERP ranking telemetry, and site audit crawler.",
        highlight: "Competitor Keywords & Backlinks",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/ahrefs-wordmark-light.svg`,
        iconDark: `${ASSETS_PREFIX}/assets/images/seo_tools/ahrefs-wordmark-dark.svg`,
        tags: ["Keyword Gap", "Backlink Profile", "Site Audit"],
    },
    {
        name: "Semrush",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "In-depth domain overview, keyword magic research tool, on-page optimization ideas, and organic search tracking.",
        highlight: "Domain Analytics & SERP Track",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/semrush.svg`,
        tags: ["Keyword Magic", "SERP Tracker", "PPC Intel"],
    },
    {
        name: "Google Ads",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "Precision PPC campaign architecture, high-intent keyword bidding, quality score optimization, and cost-per-click (CPC) management.",
        highlight: "PPC & CPC Bidding Optimization",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/google-ads.svg`,
        tags: ["PPC Campaigns", "CPC Reduction", "High-Intent Keywords"],
    },
    {
        name: "Google Analytics 4 (GA4)",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "Event tracking telemetry, user behavior flow, acquisition channel attribution, and funnel conversion tracking.",
        highlight: "Traffic Telemetry & Conversions",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/google-analytics.svg`,
        tags: ["User Attribution", "Custom Events", "Funnel Analytics"],
    },
    {
        name: "Google Search Console",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "Index coverage validation, search query performance, click-through rates (CTR), sitemap telemetry, and core web vitals.",
        highlight: "Indexing Health & CTR Growth",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/google-search-console.svg`,
        tags: ["Query Performance", "Crawl Budget", "Index Health"],
    },
    {
        name: "Google Tag Manager",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "Custom dataLayer triggers, tag orchestration, conversion tracking tags, and event listener deployment without code redeploy.",
        highlight: "Tag Orchestration & DataLayer",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/google-tag-manager.svg`,
        tags: ["Event Triggers", "DataLayer", "Conversion Tags"],
    },
    {
        name: "SEO Site Checkup",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "Instant technical diagnostic scans, page speed audits, structured data check, mobile usability, and security score.",
        highlight: "Technical Health & Meta Score",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/seo-site-checkup.svg`,
        tags: ["Audit Score", "Mobile Speed", "Technical Fixes"],
    },
    {
        name: "Google Gemini AI",
        category: "seo",
        categoryLabel: "SEO & Growth",
        description: "AI-powered prompt engineering for content optimization, search intent semantics, and answer engine content preparation.",
        highlight: "Generative Search & AI Prompts",
        iconLight: `${ASSETS_PREFIX}/assets/images/seo_tools/google-gemini.svg`,
        tags: ["AEO Content", "Prompt Strategy", "Semantic Intent"],
    },

    // 2. DEVELOPING & DEPLOYMENT TOOLS
    {
        name: "React.js",
        category: "dev",
        categoryLabel: "Web Development",
        description: "Component-based architecture, hooks, state management, and building high-performance modern user interfaces.",
        highlight: "Reactive UI & Component Architecture",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/React.svg`,
        tags: ["React 19", "Hooks", "Component Logic"],
    },
    {
        name: "Next.js",
        category: "dev",
        categoryLabel: "Web Development",
        description: "Full-stack framework featuring App Router, Server Components, SSG, SSR, dynamic routing, and SEO optimization.",
        highlight: "App Router & Production SSR/SSG",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/Next.js.svg`,
        tags: ["App Router", "SSR / SSG", "Core Web Vitals"],
    },
    {
        name: "TypeScript & JavaScript",
        category: "dev",
        categoryLabel: "Web Development",
        description: "Type-safe robust web code, modern ES6+ features, asynchronous logic, API integration, and dynamic client behavior.",
        highlight: "Type-Safe & Dynamic Logic",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/TypeScript.svg`,
        tags: ["TypeScript", "ES6+ Logic", "DOM & APIs"],
    },
    {
        name: "HTML5 & CSS3 / Tailwind",
        category: "dev",
        categoryLabel: "Web Development",
        description: "Semantic accessible markup, modern CSS grid and flexbox systems, Tailwind CSS utility classes, and custom tokens.",
        highlight: "Semantic & Responsive UI Design",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/HTML5.svg`,
        tags: ["Tailwind CSS", "Semantic HTML5", "Responsive Grid"],
    },
    {
        name: "Git & GitHub",
        category: "dev",
        categoryLabel: "Deployment & Cloud",
        description: "Distributed version control, pull requests, automated GitHub Actions workflows, and collaborative codebase branching.",
        highlight: "Version Control & Automation",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/GitHub.svg`,
        iconDark: `${ASSETS_PREFIX}/assets/images/dev_tools/github-dark.svg`,
        tags: ["Git Flow", "GitHub Actions", "CI/CD"],
    },
    {
        name: "AWS (Amazon Web Services)",
        category: "dev",
        categoryLabel: "Deployment & Cloud",
        description: "Cloud hosting, S3 bucket storage configuration, asset pipelines, and scalable cloud infrastructure deployment.",
        highlight: "Cloud Storage & Scalable Hosting",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/aws.svg`,
        iconDark: `${ASSETS_PREFIX}/assets/images/dev_tools/amazon-web-services.svg`,
        tags: ["AWS S3", "Cloud Hosting", "Asset Pipelines"],
    },
    {
        name: "cPanel Servers",
        category: "dev",
        categoryLabel: "Deployment & Cloud",
        description: "Live web production deployment, DNS zone configuration, SSL certificate deployment, FTP/SSH, and database setups.",
        highlight: "Server Administration & Live Deploy",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/cpanel-badge.svg`,
        tags: ["Live Hosting", "DNS & SSL", "File Manager / FTP"],
    },
    {
        name: "VS Code & Postman",
        category: "dev",
        categoryLabel: "Development Tools",
        description: "Modern IDE workflow with extensions, ESLint formatting, and API testing for RESTful endpoints.",
        highlight: "Developer Workflow & API Testing",
        iconLight: `${ASSETS_PREFIX}/assets/images/dev_tools/visual-studio-code.svg`,
        tags: ["VS Code", "Postman", "REST APIs"],
    },

    // 3. UI & ADOBE CREATIVE SUITE
    {
        name: "Adobe Photoshop",
        category: "adobe",
        categoryLabel: "Adobe Suite & UI",
        description: "High-resolution photo manipulation, digital advertising creatives, campaign banners, and composite raster graphics.",
        highlight: "Digital Retouching & Ad Banners",
        iconLight: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/photoshop.svg`,
        tags: ["Ad Creatives", "Photo Retouching", "Compositing"],
    },
    {
        name: "Adobe Illustrator",
        category: "adobe",
        categoryLabel: "Adobe Suite & UI",
        description: "Precision vector illustrations, bespoke brand iconography, logo systems, infographics, and scalable UI vectors.",
        highlight: "Precision Vector Art & Iconography",
        iconLight: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/illustrator.svg`,
        tags: ["Vector Art", "Logos & Marks", "Scalable Graphics"],
    },
    {
        name: "Adobe Premiere Pro",
        category: "adobe",
        categoryLabel: "Adobe Suite & UI",
        description: "Professional video editing, dynamic marketing reels, promotional campaign clips, color grading, and audio mastering.",
        highlight: "Promo Reels & Video Marketing",
        iconLight: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/premiere-pro.svg`,
        tags: ["Video Editing", "Social Reels", "Promo Videos"],
    },
    {
        name: "Adobe After Effects",
        category: "adobe",
        categoryLabel: "Adobe Suite & UI",
        description: "Motion graphics animation, kinetic typography, visual effects, logo reveals, and animated explainer assets.",
        highlight: "Motion Graphics & Kinetic Effects",
        iconLight: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/after-effects.svg`,
        tags: ["Motion Graphics", "Kinetic Typography", "Explainer Videos"],
    },
    {
        name: "Adobe InDesign",
        category: "adobe",
        categoryLabel: "Adobe Suite & UI",
        description: "Multi-page publication layouts, corporate pitch decks, brochures, magazines, and print-ready production files.",
        highlight: "Editorial Design & Presentation Decks",
        iconLight: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/indesign.svg`,
        tags: ["Editorial Layouts", "Brochures", "Pitch Decks"],
    },
    {
        name: "Adobe Creative Cloud",
        category: "adobe",
        categoryLabel: "Adobe Suite & UI",
        description: "Seamless asset synchronization across apps, shared libraries, vector typography kits, and collaborative reviews.",
        highlight: "Cross-App Cloud Sync & Assets",
        iconLight: `${ASSETS_PREFIX}/assets/images/icons/adobe_icons/creative-cloud.svg`,
        tags: ["Asset Libraries", "Cloud Sync", "Creative Ecosystem"],
    },
];

export function ToolsShowcase() {
    const [selectedTab, setSelectedTab] = React.useState<ToolCategory>("all");

    const filteredTools = React.useMemo(() => {
        if (selectedTab === "all") return allTools;
        return allTools.filter((tool) => tool.category === selectedTab);
    }, [selectedTab]);

    return (
        <section id="tools" className="py-20 relative scroll-mt-16">
            <div className="container max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-semibold text-primary mb-3">
                        <Wrench className="h-3.5 w-3.5" />
                        <span>Professional Tech &amp; Toolkit</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Tools &amp; Technical Capabilities
                    </h2>
                    <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
                        End-to-end expertise spanning data-driven digital marketing, modern frontend development, and production-ready Adobe creative suites.
                    </p>

                    {/* Quick Metric Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                            <Search className="w-3.5 h-3.5" /> 8+ SEO &amp; Growth Tools
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <Code2 className="w-3.5 h-3.5" /> 8+ Dev &amp; Cloud Deployment
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                            <Palette className="w-3.5 h-3.5" /> 6+ Adobe Creative Tools
                        </span>
                    </div>
                </div>

                {/* ReUI Style Tab Buttons */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex p-1.5 rounded-2xl bg-secondary/60 border border-border/80 gap-1.5 flex-wrap justify-center shadow-xs">
                        <button
                            onClick={() => setSelectedTab("all")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all",
                                selectedTab === "all"
                                    ? "bg-card text-foreground shadow-xs border border-border/80"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            )}
                        >
                            <span>All Tools</span>
                            <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-muted text-muted-foreground font-normal">
                                {allTools.length}
                            </span>
                        </button>
                        <button
                            onClick={() => setSelectedTab("seo")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all",
                                selectedTab === "seo"
                                    ? "bg-card text-foreground shadow-xs border border-border/80"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            )}
                        >
                            <Search className="w-4 h-4 text-primary" />
                            <span>1. SEO &amp; Marketing Tools</span>
                        </button>
                        <button
                            onClick={() => setSelectedTab("dev")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all",
                                selectedTab === "dev"
                                    ? "bg-card text-foreground shadow-xs border border-border/80"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            )}
                        >
                            <Code2 className="w-4 h-4 text-emerald-500" />
                            <span>2. Developing &amp; Cloud Tools</span>
                        </button>
                        <button
                            onClick={() => setSelectedTab("adobe")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all",
                                selectedTab === "adobe"
                                    ? "bg-card text-foreground shadow-xs border border-border/80"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            )}
                        >
                            <Palette className="w-4 h-4 text-purple-500" />
                            <span>3. UI &amp; Adobe Tools</span>
                        </button>
                    </div>
                </div>

                {/* Grid of Tools Cards */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
                >
                    <AnimatePresence>
                        {filteredTools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25, delay: index * 0.02 }}
                                className="group relative rounded-2xl bg-card border border-border/80 p-5 shadow-xs hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    {/* Card Top: Icon & Category Badge */}
                                    <div className="flex items-start justify-between gap-3 mb-3.5">
                                        <div className="relative w-12 h-12 rounded-xl bg-secondary/50 border border-border/70 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                                            <Image
                                                src={tool.iconLight}
                                                alt={tool.name}
                                                width={48}
                                                height={48}
                                                className={cn(
                                                    "w-full h-full object-contain",
                                                    tool.iconDark && "dark:hidden"
                                                )}
                                            />
                                            {tool.iconDark && (
                                                <Image
                                                    src={tool.iconDark}
                                                    alt={tool.name}
                                                    width={48}
                                                    height={48}
                                                    className="hidden dark:block w-full h-full object-contain"
                                                />
                                            )}
                                        </div>

                                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                                            {tool.categoryLabel}
                                        </span>
                                    </div>

                                    {/* Name & Highlight */}
                                    <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-xs font-semibold text-primary mt-0.5 mb-2">
                                        {tool.highlight}
                                    </p>

                                    {/* Description */}
                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                        {tool.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-border/60">
                                    {tool.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary/80 text-foreground/80 border border-border/40"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
