"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
    Layers,
    Handshake,
    Laptop,
    Video,
    Paintbrush,
    Search,
    Rocket,
    Zap,
    Gem,
    HelpCircle,
    ChevronDown,
    CheckCircle2,
    XCircle,
    ArrowRight,
    MessageCircle,
    Mail,
    Phone,
    Clock,
    ShieldCheck,
    Cpu,
    Compass,
    Check,
    ExternalLink
} from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";
import PlanetEarth from "@/components/PlanetEarth";

// 1. Core Services Data
interface ServiceItem {
    id: string;
    title: string;
    category: string;
    icon: React.ElementType;
    description: string;
    accentGlow: string;
    accentBorder: string;
    badgeColor: string;
    deliverables: string[];
    techStack: string[];
}

const CORE_SERVICES: ServiceItem[] = [
    {
        id: "web-dev",
        title: "Full-Stack Web Development",
        category: "Engineering",
        icon: Laptop,
        description:
            "Architecting high-performance websites and dynamic web applications built with Next.js 16, React 19, TypeScript, and modern headless architectures.",
        accentGlow: "from-blue-500/20 via-cyan-500/10 to-transparent",
        accentBorder: "hover:border-blue-500/50",
        badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        deliverables: [
            "Responsive Web Apps & Custom Portals",
            "Performance Optimization & Core Web Vitals",
            "REST & Serverless API Integrations",
            "SEO-Ready Structure & Accessibility",
            "Domain, SSL & Cloud Deployment"
        ],
        techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "Serverless APIs"]
    },
    {
        id: "motion-design",
        title: "Video & Motion Graphics",
        category: "Creative Media",
        icon: Video,
        description:
            "Creating captivating motion graphics, commercial reels, logo reveals, and explanatory video edits that hold attention and elevate brand storytelling.",
        accentGlow: "from-purple-500/20 via-pink-500/10 to-transparent",
        accentBorder: "hover:border-purple-500/50",
        badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        deliverables: [
            "High-Impact Logo Reveal Animations",
            "Social Media Reels, Shorts & Promo Ads",
            "Product Explainer & Feature Videos",
            "Corporate Presentations & Screen Graphics",
            "Full 4K Ultra-HD Master Delivery"
        ],
        techStack: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Sound Design", "4K Video"]
    },
    {
        id: "graphic-design",
        title: "Brand Identity & Graphic Design",
        category: "Visual Design",
        icon: Paintbrush,
        description:
            "Designing distinct brand identities, precision vector art, marketing collateral, and UI style guides that establish immediate market authority.",
        accentGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
        accentBorder: "hover:border-amber-500/50",
        badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
        deliverables: [
            "Logo Suites & Brand Style Guidelines",
            "Marketing Kits, Business Cards & Stationery",
            "Social Media Design Kits & Templates",
            "Custom Vector Illustrations & Iconography",
            "Print-Ready & Digital Master Assets"
        ],
        techStack: ["Adobe Illustrator", "Photoshop", "Figma", "Vector Art", "Typography", "Brand Systems"]
    },
    {
        id: "ai-search-optimization",
        title: "AI Search & Growth (AEO & GEO)",
        category: "Growth & Visibility",
        icon: Search,
        description:
            "Future-proofing your organic presence for both classical Google SERP rankings and Generative AI engines like ChatGPT, Google Gemini, and Perplexity.",
        accentGlow: "from-emerald-500/20 via-teal-500/10 to-transparent",
        accentBorder: "hover:border-emerald-500/50",
        badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        deliverables: [
            "Generative Engine Optimization (GEO for AI citations)",
            "Answer Engine Optimization (AEO schema structures)",
            "Semantic Entity Authority & Knowledge Graphs",
            "Technical Search Audits & Speed Tuning",
            "Targeted Keyword Strategy & Competitor Analysis"
        ],
        techStack: ["GEO Strategy", "AEO Snippets", "Google Search Console", "JSON-LD Schemas", "Technical SEO"]
    }
];

// 2. Workflow Process Data ("How We Work")
interface WorkflowStep {
    number: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    description: string;
    timeline: string;
    deliverables: string[];
}

const WORKFLOW_STEPS: WorkflowStep[] = [
    {
        number: "01",
        title: "Discovery & Strategy",
        subtitle: "Scoping & Architectural Blueprint",
        icon: Compass,
        description:
            "We unpack your business goals, target audience, technical specifications, and design preferences into a clear roadmap with realistic milestones.",
        timeline: "Days 1 – 3",
        deliverables: ["Project Scope Document", "Milestone Roadmap", "Technical Architecture Plan"]
    },
    {
        number: "02",
        title: "Design & Prototyping",
        subtitle: "Visual Conception & Wireframing",
        icon: Layers,
        description:
            "Translating requirements into visual wireframes, interactive UI prototypes, and creative styleboards, ensuring full alignment before coding begins.",
        timeline: "Days 4 – 10",
        deliverables: ["High-Fidelity Wireframes", "Interactive Prototype", "Approved Design System"]
    },
    {
        number: "03",
        title: "Engineering & Polish",
        subtitle: "Type-Safe Code & Micro-Interactions",
        icon: Cpu,
        description:
            "Writing modular, responsive Next.js/React code, implementing fluid animations, integrating backend endpoints, and optimizing performance scores.",
        timeline: "Days 11 – 25",
        deliverables: ["Full-Stack Codebase", "Cross-Browser Testing", "Core Web Vitals Optimization"]
    },
    {
        number: "04",
        title: "Deployment & Growth",
        subtitle: "Live Release & Ongoing Support",
        icon: Rocket,
        description:
            "Configuring custom domains, SSL certificates, search engine submission, and handing over all production assets backed by a 30-day warranty.",
        timeline: "Launch & Beyond",
        deliverables: ["Live Production Deployment", "Full Source Code Handover", "30 Days Post-Launch Support"]
    }
];

// 3. Pricing Tiers Data
interface PricingTier {
    id: string;
    name: string;
    price: string;
    period: string;
    badge?: string;
    highlighted?: boolean;
    description: string;
    icon: React.ElementType;
    features: { text: string; included: boolean }[];
    idealFor: string;
    turnaround: string;
    ctaLabel: string;
    ctaHref: string;
}

const PRICING_TIERS: PricingTier[] = [
    {
        id: "starter",
        name: "Starter",
        price: "₹10,000",
        period: "per project",
        description: "Essential kickstart for personal branding, portfolio showcases, or clean landing pages.",
        icon: Zap,
        idealFor: "Freelancers, Creators & Small Businesses",
        turnaround: "7 – 10 Days Turnaround",
        ctaLabel: "Get Started with Starter",
        ctaHref: "/contact?plan=Starter#contact-intake-card",
        features: [
            { text: "1–3 Page Responsive Web Layout", included: true },
            { text: "Clean Modern Design & Mobile Optimized", included: true },
            { text: "Contact Form with Email Notifications", included: true },
            { text: "Basic SEO & Meta Tag Structure", included: true },
            { text: "Domain & Hosting Setup Assistance", included: true },
            { text: "Motion Graphics & Promo Videos", included: false },
            { text: "Generative AI Search Optimization (GEO)", included: false },
            { text: "Advanced Custom Integrations", included: false }
        ]
    },
    {
        id: "professional",
        name: "Professional",
        price: "₹25,000",
        period: "per project",
        badge: "Most Popular",
        highlighted: true,
        description: "Complete digital growth package combining full-stack development, media branding, and SEO.",
        icon: Rocket,
        idealFor: "Startups, Agencies & Growing Brands",
        turnaround: "14 – 21 Days Turnaround",
        ctaLabel: "Choose Professional Plan",
        ctaHref: "/contact?plan=Professional#contact-intake-card",
        features: [
            { text: "Up to 6 Custom Pages / Dynamic Application", included: true },
            { text: "Next.js 16 + React 19 + TypeScript Stack", included: true },
            { text: "Logo Animation or Promotional Video Reel", included: true },
            { text: "Core Web Vitals Performance Optimization", included: true },
            { text: "Answer Engine (AEO) Schema Entity Setup", included: true },
            { text: "Interactive Micro-Animations & Dark/Light Mode", included: true },
            { text: "Source Code & Asset Repository Handover", included: true },
            { text: "30 Days Dedicated Maintenance & Support", included: true }
        ]
    },
    {
        id: "custom",
        name: "Custom Enterprise",
        price: "Flexible",
        period: "tailored quotation",
        description: "Bespoke engineering and creative retainers for complex platforms, SaaS apps, and ongoing marketing.",
        icon: Gem,
        idealFor: "Established Companies & Complex Products",
        turnaround: "Tailored to Scope",
        ctaLabel: "Request Custom Quote",
        ctaHref: "/contact?plan=Custom#contact-intake-card",
        features: [
            { text: "Full-Stack Custom Web Architecture / SaaS UI", included: true },
            { text: "Comprehensive Brand Identity & Marketing Suite", included: true },
            { text: "Full Video Series & Motion Graphics Production", included: true },
            { text: "Generative Engine Optimization (ChatGPT/Gemini)", included: true },
            { text: "Custom Database & Third-Party API Integrations", included: true },
            { text: "Automated CI/CD Pipelines & Cloud Scalability", included: true },
            { text: "Direct Priority Communication Channel", included: true },
            { text: "Ongoing Retainer & Feature Iterations", included: true }
        ]
    }
];

// 4. FAQ Data
interface FaqItem {
    question: string;
    answer: string;
    category: string;
}

const FAQ_ITEMS: FaqItem[] = [
    {
        category: "Process & Delivery",
        question: "How long does a typical project take from start to finish?",
        answer:
            "Depending on the scope, a Starter package is delivered in 7 to 10 days, while a comprehensive Professional website or multi-media project typically takes 14 to 21 days. Custom enterprise solutions follow a milestone schedule agreed upon during our discovery phase."
    },
    {
        category: "Deliverables",
        question: "Do I receive all source code and master design files upon completion?",
        answer:
            "Yes! You receive 100% full ownership of all assets. For web projects, this includes the complete Git repository, production builds, and environment setups. For design and video, you get all vector source files (AI, PSD, Figma) and 4K video exports."
    },
    {
        category: "Payments",
        question: "How are project payments structured?",
        answer:
            "To keep collaboration transparent and fair, payments are milestone-based: typically a 50% deposit to commence work and secure timeline allocation, and the remaining 50% upon final review, approval, and live deployment handover."
    },
    {
        category: "AI & Search",
        question: "What makes Generative Engine Optimization (GEO) different from regular SEO?",
        answer:
            "While classical SEO aims for blue links on Google results pages, GEO (Generative Engine Optimization) trains AI models like ChatGPT, Google Gemini, and Perplexity to recognize your brand entity, cite your data, and recommend your services in direct conversational responses."
    },
    {
        category: "Revisions & Support",
        question: "What happens if I need revisions or adjustments after launch?",
        answer:
            "All packages include iterative review stages during design and development. In addition, every project comes with a 30-day post-launch warranty where any bugs, responsive tweaks, or minor text modifications are handled promptly at no extra charge."
    },
    {
        category: "Domain & Hosting",
        question: "Can you assist with domain registration and cloud hosting configuration?",
        answer:
            "Absolutely. I provide end-to-end guidance and setup for your custom domain, SSL certification, DNS records, and hosting providers (such as Vercel, AWS S3, GitHub Pages, or cPanel servers)."
    }
];

export function ServicesView() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [activeServiceTab, setActiveServiceTab] = useState<string>("all");
    const [emailInput, setEmailInput] = useState<string>("");
    const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(false);
    const [emailSuccess, setEmailSuccess] = useState<boolean>(false);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailInput || !emailInput.includes("@")) return;
        setIsSubmittingEmail(true);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: "Services Consultation Lead",
                    email: emailInput,
                    message: "Inquiry from Services CTA (Ready to Turn Your Vision Into a High-Performing Asset).",
                }),
            });
        } catch {
            // graceful fallback
        } finally {
            setIsSubmittingEmail(false);
            setEmailSuccess(true);
            setEmailInput("");
        }
    };

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const filteredServices = activeServiceTab === "all"
        ? CORE_SERVICES
        : CORE_SERVICES.filter(s => s.category.toLowerCase().includes(activeServiceTab.toLowerCase()));

    return (
        <div className="flex flex-col">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                {/* Background ambient lighting */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
                <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-violet-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center space-y-6"
                    >
                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Comprehensive Creative &amp; Engineering Services</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                            Transforming Ideas Into{" "}
                            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
                                High-Impact Digital Experiences
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Full-cycle Web Development, Motion Graphics &amp; Video Production, Brand Design, and Generative AI Search (AEO &amp; GEO) engineered to scale your brand.
                        </p>

                        {/* Quick Trust Highlights */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/70">
                                <Zap className="w-3.5 h-3.5 text-amber-500" /> 5+ Years Exp.
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/70">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Quality Focus
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/70">
                                <Clock className="w-3.5 h-3.5 text-primary" /> Rapid 7–21 Day Turnaround
                            </span>
                        </div>

                        {/* Hero Illustration with subtle glow */}
                        <div className="relative w-full max-w-3xl mx-auto aspect-video pt-6">
                            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />
                            <Image
                                src={`${ASSETS_PREFIX}/assets/images/svg/servicesmainlight.svg`}
                                alt="Services Engineering and Design Illustration"
                                fill
                                className="dark:hidden object-contain relative z-10 drop-shadow-md"
                                priority
                            />
                            <Image
                                src={`${ASSETS_PREFIX}/assets/images/svg/servicesmaindark.svg`}
                                alt="Services Engineering and Design Illustration"
                                fill
                                className="hidden dark:block object-contain relative z-10 drop-shadow-md"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CORE SERVICES SECTION */}
            <section id="services-grid" className="py-20 bg-secondary/15 border-t border-border/40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                            <Laptop className="w-3.5 h-3.5" />
                            <span>What I Specialize In</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Specialized Solutions Tailored for Growth
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg">
                            From robust web architectures to cinematic video assets and AI search visibility, every discipline is handled with master-level attention to detail.
                        </p>
                    </motion.div>

                    {/* Services Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {filteredServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={cn(
                                        "group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                        service.accentBorder
                                    )}
                                >
                                    {/* Ambient card glow */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10",
                                            service.accentGlow
                                        )}
                                    />

                                    <div>
                                        {/* Card Top Row */}
                                        <div className="flex items-center justify-between gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <span
                                                className={cn(
                                                    "px-3 py-1 rounded-full text-xs font-semibold border",
                                                    service.badgeColor
                                                )}
                                            >
                                                {service.category}
                                            </span>
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Deliverables Checklist */}
                                        <div className="space-y-3 pt-4 border-t border-border/50 mb-6">
                                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                Key Deliverables:
                                            </span>
                                            <ul className="space-y-2 text-sm text-foreground/90">
                                                {service.deliverables.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2.5">
                                                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Tech Stack & Action Footer */}
                                    <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                                        <div className="flex flex-wrap gap-1.5">
                                            {service.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-muted text-muted-foreground border border-border/60"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/contact?service=${encodeURIComponent(service.title)}#contact-intake-card`}
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0 group/link"
                                        >
                                            <span>Inquire Service</span>
                                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4-STEP WORKFLOW PROCESS ("HOW WE WORK") */}
            <section id="workflow" className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                            <Rocket className="w-3.5 h-3.5" />
                            <span>Structured Production Pipeline</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            How We Work: 4 Proven Steps to Success
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg">
                            A clear, disciplined process from initial idea to live deployment ensuring zero guesswork, complete visibility, and on-time delivery.
                        </p>
                    </motion.div>

                    {/* Steps Grid with Connectors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {WORKFLOW_STEPS.map((step, index) => {
                            const StepIcon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.12 }}
                                    className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
                                >
                                    {/* Number Watermark & Icon Header */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                                                <StepIcon className="w-5 h-5" />
                                            </div>
                                            <span className="text-3xl font-black text-muted-foreground/30 font-mono">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Step Info */}
                                        <div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                                                {step.timeline}
                                            </span>
                                            <h3 className="text-xl font-bold tracking-tight text-foreground mt-1 mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="text-xs font-medium text-muted-foreground/80 mb-3">
                                                {step.subtitle}
                                            </p>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Deliverables Box */}
                                    <div className="mt-6 pt-4 border-t border-border/50 space-y-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            Milestone Output:
                                        </span>
                                        <ul className="space-y-1.5 text-xs text-foreground/80">
                                            {step.deliverables.map((item, dIdx) => (
                                                <li key={dIdx} className="flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    <span className="leading-tight">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PRICING MODELS SECTION */}
            <section id="pricing" className="py-24 bg-secondary/20 border-t border-border/40 relative">
                {/* Ambient glow behind popular tier */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                            <Gem className="w-3.5 h-3.5" />
                            <span>Transparent Investment</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Straightforward Pricing Models
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg">
                            Predictable, value-driven pricing with no surprise fees. Pick the package that matches your current stage or request a custom quote.
                        </p>
                    </motion.div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                        {PRICING_TIERS.map((tier, index) => {
                            const TierIcon = tier.icon;
                            return (
                                <motion.div
                                    key={tier.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.12 }}
                                    className={cn(
                                        "relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300",
                                        tier.highlighted
                                            ? "bg-card border-2 border-primary shadow-2xl lg:-translate-y-2"
                                            : "bg-card border border-border shadow-md hover:shadow-xl hover:-translate-y-1"
                                    )}
                                >
                                    {/* Popular Badge */}
                                    {tier.badge && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                                            {tier.badge}
                                        </div>
                                    )}

                                    <div>
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                                                    {tier.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground mt-0.5">
                                                    {tier.idealFor}
                                                </p>
                                            </div>
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                                                <TierIcon className="w-6 h-6" />
                                            </div>
                                        </div>

                                        {/* Price display */}
                                        <div className="my-6 pb-6 border-b border-border/60">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                                                    {tier.price}
                                                </span>
                                                <span className="text-xs text-muted-foreground font-medium">
                                                    / {tier.period}
                                                </span>
                                            </div>
                                            <p className="text-xs text-primary font-semibold mt-2 flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {tier.turnaround}
                                            </p>
                                        </div>

                                        {/* Features List */}
                                        <div className="space-y-3 mb-8">
                                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                What&apos;s Included:
                                            </span>
                                            <ul className="space-y-2.5 text-sm">
                                                {tier.features.map((feat, fIdx) => (
                                                    <li
                                                        key={fIdx}
                                                        className={cn(
                                                            "flex items-start gap-2.5",
                                                            feat.included
                                                                ? "text-foreground/90 font-medium"
                                                                : "text-muted-foreground/50 line-through text-xs"
                                                        )}
                                                    >
                                                        {feat.included ? (
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                        ) : (
                                                            <XCircle className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                                                        )}
                                                        <span className="leading-snug">{feat.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="pt-4 border-t border-border/50">
                                        <Link
                                            href={tier.ctaHref}
                                            className={cn(
                                                "w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-md",
                                                tier.highlighted
                                                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25 hover:shadow-lg"
                                                    : "bg-secondary hover:bg-secondary/80 text-foreground border border-border"
                                            )}
                                        >
                                            <span>{tier.ctaLabel}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* EXPANDABLE FAQ ACCORDION SECTION */}
            <section id="faq" className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16 space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>Frequently Asked Questions</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Got Questions? Here Are Clear Answers
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg">
                            Answers to common questions regarding timelines, revision cycles, deliverables, and payment structures.
                        </p>
                    </motion.div>

                    {/* Accordion list */}
                    <div className="space-y-4">
                        {FAQ_ITEMS.map((item, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={cn(
                                        "rounded-2xl border transition-all duration-300 overflow-hidden bg-card",
                                        isOpen
                                            ? "border-primary/50 shadow-md bg-card"
                                            : "border-border/70 hover:border-border shadow-sm"
                                    )}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="flex items-center justify-between w-full p-5 sm:p-6 text-left transition-colors"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-3 pr-4">
                                            <div
                                                className={cn(
                                                    "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors",
                                                    isOpen
                                                        ? "bg-primary text-primary-foreground"
                                                        : "bg-muted text-muted-foreground"
                                                )}
                                            >
                                                {index + 1}
                                            </div>
                                            <h3 className="text-base sm:text-lg font-bold text-foreground">
                                                {item.question}
                                            </h3>
                                        </div>

                                        <div
                                            className={cn(
                                                "p-1.5 rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-transform duration-300 shrink-0",
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
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                            >
                                                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-muted-foreground border-t border-border/50">
                                                    <p className="leading-relaxed text-foreground/90 pt-3">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Quick Support Banner below FAQ */}
                    <div className="mt-12 p-6 rounded-2xl border border-border/80 bg-secondary/30 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-center sm:text-left">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-foreground">Have a specific question not covered here?</p>
                                <p className="text-xs text-muted-foreground">Feel free to message directly for an immediate reply.</p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/917358198244?text=Hi%20Karthick,%20I'd%20like%20to%20ask%20a%20question%20about%20your%20services!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors shrink-0"
                        >
                            <span>Chat on WhatsApp</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* CLOSING HIGH-CONVERTING CTA SECTION - REUI CTA-14 STYLE */}
            <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* 12-second pulsing blue bloom effect */}
                        <div
                            className="absolute -inset-1 sm:-inset-2 rounded-[32px] sm:rounded-[36px] bg-gradient-to-r from-cyan-500/25 via-blue-600/35 to-indigo-600/25 blur-2xl sm:blur-3xl -z-10 animate-pulse pointer-events-none"
                            style={{ animationDuration: "12s" }}
                        />

                        {/* Main CTA-14 Card Container */}
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-950 py-8 sm:py-10 px-6 sm:px-10 lg:px-12 text-neutral-100 shadow-2xl">
                            {/* 3px dot mesh background */}
                            <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-35 pointer-events-none" />

                            {/* Earth Visual Canvas - Full card coverage for seamless curvature without any clipping */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
                                {/* Ambient atmosphere glow */}
                                <div className="absolute right-0 top-0 w-[420px] h-[320px] bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                                <PlanetEarth />
                            </div>

                            {/* Left Content Column */}
                            <div className="relative z-10 max-w-md sm:max-w-lg flex flex-col space-y-3.5 text-left">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-neutral-800 bg-neutral-900/90 text-neutral-300 text-[11px] font-medium tracking-wide backdrop-blur-sm w-fit shadow-sm">
                                    <Handshake className="w-3 h-3 text-cyan-400" />
                                    <span>Let&apos;s Build Together</span>
                                </div>

                                {/* Heading */}
                                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-white leading-snug">
                                    Ready to Turn Your Vision Into a{" "}
                                    <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
                                        High-Performing Asset?
                                    </span>
                                </h2>

                                {/* Description */}
                                <p className="text-neutral-400 text-xs sm:text-sm max-w-sm sm:max-w-md leading-relaxed font-normal">
                                    Whether you need a full web application, cinematic video reels, or an AI search strategy, let&apos;s discuss your requirements and get started.
                                </p>

                                {/* CTA-14 Input Group Form (Matching ReUI CTA-14) */}
                                <div className="space-y-2.5 pt-1">
                                    <form
                                        onSubmit={handleEmailSubmit}
                                        className="flex items-center gap-2 max-w-sm"
                                    >
                                        <div className="relative flex-1">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500 text-xs font-mono">
                                                @
                                            </div>
                                            <input
                                                aria-label="Email address"
                                                type="email"
                                                required
                                                value={emailInput}
                                                onChange={(e) => setEmailInput(e.target.value)}
                                                placeholder="Email"
                                                className="w-full h-9 rounded-lg border border-neutral-800 bg-neutral-900/90 pl-8 pr-3 text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-700 transition-colors"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmittingEmail}
                                            className="group/btn inline-flex h-9 shrink-0 items-center justify-center gap-1.5 px-3.5 rounded-lg bg-white text-neutral-950 hover:bg-neutral-200 active:scale-[0.98] text-xs sm:text-sm font-medium transition-all disabled:opacity-50"
                                        >
                                            <span>{isSubmittingEmail ? "Sending..." : emailSuccess ? "Joined" : "Join"}</span>
                                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                                        </button>
                                    </form>

                                    {emailSuccess && (
                                        <p aria-live="polite" className="text-xs text-emerald-400 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1">
                                            <Check className="w-3.5 h-3.5" />
                                            <span>Thank you! We&apos;ll be in touch with you shortly.</span>
                                        </p>
                                    )}

                                    {/* Direct Quick Action Links */}
                                    <div className="flex flex-wrap items-center gap-3 pt-0.5 text-xs text-neutral-400">
                                        <Link
                                            href="/contact#contact-intake-card"
                                            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                                        >
                                            <Mail className="w-3.5 h-3.5 text-cyan-400" />
                                            <span className="underline underline-offset-4 decoration-neutral-800 hover:decoration-white">Start a Project</span>
                                            <ArrowRight className="w-3 h-3 text-neutral-500" />
                                        </Link>

                                        <span className="text-neutral-700 select-none">•</span>

                                        <a
                                            href="https://wa.me/917358198244?text=Hi%20Karthick,%20I'd%20like%20to%20discuss%20a%20project!"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-emerald-400 transition-colors"
                                        >
                                            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                                            <span>Chat on WhatsApp</span>
                                            <ExternalLink className="w-3 h-3 opacity-60" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
