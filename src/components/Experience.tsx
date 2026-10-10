"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Briefcase, ExternalLink, MapPin, Calendar, Building2, Sparkles, Diamond } from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";

interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    employmentType: string;
    period: string;
    duration: string;
    location: string;
    locationType: string;
    description: string;
    skills: string[];
    logoLight: string;
    logoDark?: string;
    isMultiRole?: boolean;
    roles?: {
        title: string;
        period: string;
        duration: string;
        locationType: string;
        description: string;
        skills: string[];
        media?: {
            title: string;
            description: string;
            imageLight: string;
            imageDark?: string;
        };
    }[];
}

const experiences: ExperienceItem[] = [
    {
        id: "ipa-abacus",
        title: "Digital Marketing Manager",
        company: "IDEAL PLAY ABACUS INDIA PVT.LTD.",
        employmentType: "Full-time",
        period: "Jan 2026 - Present",
        duration: "Current",
        location: "Chennai, Tamil Nadu, India",
        locationType: "On-site",
        description:
            "Leading digital marketing initiatives at IPA Abacus India, focusing on performance marketing, content strategy, and lead generation to scale brand presence and franchise admissions across India. Managing multi-channel acquisition funnels, Google Ads PPC campaigns with high-intent keywords, and SEO/AEO/GEO optimization.",
        skills: [
            "Performance Marketing",
            "Google Ads (PPC)",
            "Search Engine Optimization (SEO)",
            "AEO & GEO Strategy",
            "Lead Generation",
            "Cost-Per-Click (CPC)",
            "Brand Strategy",
        ],
        logoLight: `${ASSETS_PREFIX}/assets/images/company/IPAABACUSLOGO.svg`,
    },
    {
        id: "optimista",
        title: "Digital Marketing Manager",
        company: "Optimista Training and Development India Pvt Ltd",
        employmentType: "Full-time",
        period: "Oct 2025 - Dec 2025",
        duration: "3 mos",
        location: "Chennai, Tamil Nadu, India",
        locationType: "On-site",
        description:
            "Directed high-performing digital marketing campaigns, student enrollment acquisition funnels, and organic SEO architecture. Orchestrated Google Ads display and search campaigns, achieving optimized CPC and higher keyword conversion rates while managing social marketing.",
        skills: [
            "Digital Marketing Strategy",
            "Google Ads Campaigns",
            "Keyword Research",
            "Conversion Rate Optimization (CRO)",
            "Social Media Advertising",
            "Organic Search Growth",
        ],
        logoLight: `${ASSETS_PREFIX}/assets/images/company/optimistalogolight.svg`,
        logoDark: `${ASSETS_PREFIX}/assets/images/company/optimistalogodark.svg`,
    },
    {
        id: "guires",
        title: "Search Engine Optimization Team Lead",
        company: "Guires Ltd UK",
        employmentType: "Full-time",
        period: "Jul 2025 - Aug 2025",
        duration: "2 mos",
        location: "Chennai, Tamil Nadu, India",
        locationType: "On-site",
        description:
            "Led SEO team operations for UK and global operations. Drove comprehensive technical SEO audits, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO) for AI search engines, competitive gap analysis, and on-page ranking improvements using Ahrefs and Semrush.",
        skills: [
            "Technical SEO Audits",
            "AEO (Answer Engine Optimization)",
            "GEO (Generative Engine Optimization)",
            "Team Leadership",
            "Ahrefs & Semrush",
            "Competitor Intelligence",
        ],
        logoLight: `${ASSETS_PREFIX}/assets/images/company/guires.svg`,
    },
    {
        id: "interior-studio",
        title: "Senior Digital Marketing Executive",
        company: "60/40 Interior Studio",
        employmentType: "Full-time",
        period: "Mar 2025 - May 2025",
        duration: "3 mos",
        location: "Chennai, Tamil Nadu, India",
        locationType: "On-site",
        description:
            "Managed digital marketing and targeted local SEO campaigns for architectural interior design client acquisition. Monitored CPC keyword bidding, generated high-intent customer leads, and designed social media creative assets to elevate brand authority.",
        skills: [
            "Local SEO Optimization",
            "Google Ads CPC Management",
            "Lead Generation Funnels",
            "High-Intent Keywords",
            "Social Media Campaigns",
        ],
        logoLight: `${ASSETS_PREFIX}/assets/images/company/6040InteriorStudio.png`,
    },
    {
        id: "rsoft",
        title: "RSoft Technologies Private Limited",
        company: "RSoft Technologies Private Limited",
        employmentType: "Full-time",
        period: "Dec 2021 - Feb 2025",
        duration: "3 yrs 3 mos",
        location: "Chennai, Tamil Nadu, India",
        locationType: "On-site",
        description: "",
        skills: [],
        logoLight: `${ASSETS_PREFIX}/assets/images/svg/light/rsoft.svg`,
        logoDark: `${ASSETS_PREFIX}/assets/images/svg/dark/rsoftdark.svg`,
        isMultiRole: true,
        roles: [
            {
                title: "Digital Marketing Specialist",
                period: "Dec 2021 - Feb 2025",
                duration: "3 yrs 3 mos",
                locationType: "On-site",
                description:
                    "As a Digital Marketing Executive & Specialist, crafted and executed impactful digital campaigns that drove business growth. Led keyword research with Ahrefs and Semrush, ran Google Ads campaigns with optimized CPC, configured Google Tag Manager and GA4 telemetry, and established consistent organic ranking.",
                skills: [
                    "Customer Relationship Management (CRM)",
                    "Google Ads & PPC Campaigns",
                    "Search Engine Optimization (SEO)",
                    "Google Tag Manager",
                    "Google Analytics (GA4)",
                    "Conversion Tracking",
                ],
                media: {
                    title: "Digital Marketing Campaign Portfolio",
                    description:
                        "Specialized in crafting and executing impactful campaigns that drive business growth with top-notch keywords.",
                    imageLight: `${ASSETS_PREFIX}/assets/images/svg/light/digitalmarketing.svg`,
                    imageDark: `${ASSETS_PREFIX}/assets/images/svg/dark/digitalmarketingdark.svg`,
                },
            },
            {
                title: "Motion Graphic Designer",
                period: "Dec 2021 - Feb 2025",
                duration: "3 yrs 3 mos",
                locationType: "On-site",
                description:
                    "Designed dynamic vector animations, comic-style marketing graphics, corporate explainer videos, and branding collateral using Adobe After Effects, Premiere Pro, Illustrator, and Photoshop.",
                skills: [
                    "Adobe After Effects",
                    "Adobe Premiere Pro",
                    "Adobe Illustrator",
                    "Adobe Photoshop",
                    "Motion Graphics & Storytelling",
                ],
            },
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 relative scroll-mt-16">
            <div className="container max-w-5xl">
                {/* Section Header with ReUI styling */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-semibold text-primary mb-3">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>Career History</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            Work Experience
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-xl text-sm md:text-base">
                            Track record of leading digital marketing, performance advertising, SEO/AEO/GEO optimization, and creative motion design.
                        </p>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/karthick-p-b48985208/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold border border-border bg-card hover:bg-accent hover:text-accent-foreground text-foreground shadow-xs transition-colors self-start md:self-auto"
                    >
                        <Image
                            src={`${ASSETS_PREFIX}/assets/images/icons/linkedin.svg`}
                            alt="LinkedIn"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        <span>View on LinkedIn</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                </div>

                {/* LinkedIn-Style Experience Main Card */}
                <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs">
                    <div className="flex items-center justify-between pb-6 border-b border-border/60 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Experience</h3>
                                <p className="text-xs text-muted-foreground">Verified professional trajectory</p>
                            </div>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Available for roles
                        </span>
                    </div>

                    <div className="space-y-10">
                        {experiences.map((exp, index) => {
                            const isLast = index === experiences.length - 1;

                            if (exp.isMultiRole && exp.roles) {
                                return (
                                    <div
                                        key={exp.id}
                                        className={cn(
                                            "relative",
                                            !isLast && "pb-10 border-b border-border/60"
                                        )}
                                    >
                                        {/* Company Header */}
                                        <div className="flex items-start gap-4">
                                            {/* Company Logo */}
                                            <div className="relative w-14 h-14 shrink-0 rounded-xl bg-white dark:bg-zinc-900 border border-border/80 p-2 flex items-center justify-center shadow-xs overflow-hidden">
                                                <Image
                                                    src={exp.logoLight}
                                                    alt={exp.company}
                                                    width={56}
                                                    height={56}
                                                    className={cn(
                                                        "w-full h-full object-contain",
                                                        exp.logoDark && "dark:hidden"
                                                    )}
                                                />
                                                {exp.logoDark && (
                                                    <Image
                                                        src={exp.logoDark}
                                                        alt={exp.company}
                                                        width={56}
                                                        height={56}
                                                        className="hidden dark:block w-full h-full object-contain"
                                                    />
                                                )}
                                            </div>

                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-foreground">
                                                    {exp.company}
                                                </h4>
                                                <p className="text-xs md:text-sm text-muted-foreground">
                                                    {exp.employmentType} · {exp.duration}
                                                </p>
                                                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                                                    <MapPin className="w-3.5 h-3.5 inline text-muted-foreground/70" />
                                                    {exp.location}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Nested Roles with LinkedIn vertical connecting timeline bar */}
                                        <div className="relative ml-7 mt-6 pl-8 border-l-2 border-border/80 space-y-8">
                                            {exp.roles.map((subRole, rIdx) => (
                                                <div key={rIdx} className="relative group">
                                                    {/* Timeline node dot */}
                                                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background ring-4 ring-card transition-transform group-hover:scale-125" />

                                                    <div>
                                                        <h5 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                                            {subRole.title}
                                                        </h5>
                                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground mt-0.5">
                                                            <span>{subRole.period} · {subRole.duration}</span>
                                                            <span>•</span>
                                                            <span>{subRole.locationType}</span>
                                                        </div>

                                                        <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">
                                                            {subRole.description}
                                                        </p>

                                                        {/* Media Card Thumbnail if present */}
                                                        {subRole.media && (
                                                            <div className="mt-3.5 flex items-center gap-3.5 p-3 rounded-xl border border-border/80 bg-secondary/30 max-w-lg hover:border-primary/40 transition-colors">
                                                                <div className="w-16 h-12 rounded-lg bg-primary/10 border border-primary/20 shrink-0 overflow-hidden flex items-center justify-center p-1">
                                                                    <Image
                                                                        src={subRole.media.imageLight}
                                                                        alt={subRole.media.title}
                                                                        width={64}
                                                                        height={48}
                                                                        className={cn(
                                                                            "w-full h-full object-contain",
                                                                            subRole.media.imageDark && "dark:hidden"
                                                                        )}
                                                                    />
                                                                    {subRole.media.imageDark && (
                                                                        <Image
                                                                            src={subRole.media.imageDark}
                                                                            alt={subRole.media.title}
                                                                            width={64}
                                                                            height={48}
                                                                            className="hidden dark:block w-full h-full object-contain"
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div className="min-w-0 flex-1">
                                                                    <p className="text-xs font-semibold text-foreground truncate">
                                                                        {subRole.media.title}
                                                                    </p>
                                                                    <p className="text-[11px] text-muted-foreground line-clamp-2">
                                                                        {subRole.media.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Skills tags */}
                                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                                            {subRole.skills.map((skill, sIdx) => (
                                                                <span
                                                                    key={sIdx}
                                                                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-secondary/80 text-secondary-foreground border border-border/50"
                                                                >
                                                                    {sIdx === 0 && <Diamond className="w-2.5 h-2.5 text-primary" />}
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className={cn(
                                        "flex flex-col sm:flex-row items-start gap-4 group",
                                        !isLast && "pb-8 border-b border-border/60"
                                    )}
                                >
                                    {/* Company Logo */}
                                    <div className="relative w-14 h-14 shrink-0 rounded-xl bg-white dark:bg-zinc-900 border border-border/80 p-2 flex items-center justify-center shadow-xs overflow-hidden transition-transform group-hover:scale-105">
                                        <Image
                                            src={exp.logoLight}
                                            alt={exp.company}
                                            width={56}
                                            height={56}
                                            className={cn(
                                                "w-full h-full object-contain",
                                                exp.logoDark && "dark:hidden"
                                            )}
                                        />
                                        {exp.logoDark && (
                                            <Image
                                                src={exp.logoDark}
                                                alt={exp.company}
                                                width={56}
                                                height={56}
                                                className="hidden dark:block w-full h-full object-contain"
                                            />
                                        )}
                                    </div>

                                    {/* Experience Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                            <div>
                                                <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {exp.title}
                                                </h4>
                                                <p className="text-sm font-medium text-foreground/90">
                                                    {exp.company} · <span className="font-normal text-muted-foreground">{exp.employmentType}</span>
                                                </p>
                                            </div>
                                            <span className="text-xs text-muted-foreground font-medium shrink-0 flex items-center gap-1 sm:mt-1">
                                                <Calendar className="w-3 h-3 text-muted-foreground/70" />
                                                {exp.period} · {exp.duration}
                                            </span>
                                        </div>

                                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                            <MapPin className="w-3 h-3 text-muted-foreground/70" />
                                            {exp.location} · {exp.locationType}
                                        </p>

                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            {exp.description}
                                        </p>

                                        {/* Skills Badges */}
                                        <div className="flex flex-wrap gap-1.5 mt-3.5">
                                            {exp.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className="inline-flex items-center text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-secondary/80 text-secondary-foreground border border-border/50 hover:bg-secondary transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
