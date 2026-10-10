"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Award, Briefcase, Search, Globe, Code2, Server, CheckCircle2, TrendingUp, UserCheck } from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";

export function About() {
    return (
        <section id="about" className="py-20 relative scroll-mt-16 bg-secondary/20">
            <div className="container max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Column: Bio & Core Focus (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-semibold text-primary">
                            <UserCheck className="h-3.5 w-3.5" />
                            <span>About Karthick Kishore</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Digital Marketing Manager &amp; Modern Web Developer
                        </h2>

                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            With over 4+ years of cross-disciplinary expertise, I bridge the gap between high-impact <strong>data-driven digital marketing</strong> and <strong>scalable web application development</strong>.
                        </p>

                        <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                            <p>
                                My core specialization lies in <strong>SEO (Search Engine Optimization), AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization)</strong>. I run ROI-focused <strong>Google Ads campaigns</strong>, orchestrate granular Cost-Per-Click (CPC) budgets, and dominate search visibility with high-converting keyword research.
                            </p>
                            <p>
                                On the technical side, I craft <strong>static and dynamic web applications</strong> using React, Next.js, and TypeScript, transitioning pixel-perfect mockups from advanced <strong>Adobe Creative Suite</strong> directly into live production deployed across <strong>Git, AWS, and cPanel servers</strong>.
                            </p>
                        </div>

                        {/* Four Key Pillars */}
                        <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                            <div className="p-3.5 rounded-xl border border-border/80 bg-card shadow-xs">
                                <div className="flex items-center gap-2.5 font-bold text-sm text-foreground mb-1">
                                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                        <Search className="w-4 h-4" />
                                    </div>
                                    <span>SEO, AEO &amp; GEO Mastery</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Optimizing for search engines, AI answer engines, and LLM generative search outputs.
                                </p>
                            </div>

                            <div className="p-3.5 rounded-xl border border-border/80 bg-card shadow-xs">
                                <div className="flex items-center gap-2.5 font-bold text-sm text-foreground mb-1">
                                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                        <TrendingUp className="w-4 h-4" />
                                    </div>
                                    <span>Google Ads &amp; CPC ROI</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Targeted PPC campaigns, negative keyword strategies, and lowering cost per acquisition.
                                </p>
                            </div>

                            <div className="p-3.5 rounded-xl border border-border/80 bg-card shadow-xs">
                                <div className="flex items-center gap-2.5 font-bold text-sm text-foreground mb-1">
                                    <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                        <Code2 className="w-4 h-4" />
                                    </div>
                                    <span>Static &amp; Dynamic Apps</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Modern frontend architecture, React &amp; Next.js logic, and responsive UI components.
                                </p>
                            </div>

                            <div className="p-3.5 rounded-xl border border-border/80 bg-card shadow-xs">
                                <div className="flex items-center gap-2.5 font-bold text-sm text-foreground mb-1">
                                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                        <Server className="w-4 h-4" />
                                    </div>
                                    <span>Git, AWS &amp; cPanel Deploy</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Full cycle from design to DNS configuration, SSL setup, and live server deployment.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Karthick's Photo & Core Competencies (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 space-y-5"
                    >
                        {/* Profile Image Card */}
                        <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-card shadow-xs group">
                            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-secondary">
                                <Image
                                    src={`${ASSETS_PREFIX}/assets/images/karthickkishore.jpg`}
                                    alt="Karthick Kishore"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-background/95 backdrop-blur-md text-foreground border border-border/60 shadow-xs">
                                        Karthick Kishore
                                    </span>
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-xs">
                                        SEO · AEO · Web Dev
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Core Competencies Box */}
                        <div className="bg-card border border-border/80 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
                            <h3 className="text-base font-bold mb-3.5 flex items-center gap-2 text-foreground">
                                <Award className="w-4 h-4 text-primary" />
                                <span>Core Competencies</span>
                            </h3>

                            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Advanced SEO Suite:</strong> Ahrefs, Semrush, SEO Site Checkup, Google Search Console.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Analytics &amp; Tagging:</strong> Google Analytics 4 (GA4), GTM, custom dataLayer triggers.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Paid Acquisition:</strong> Google Ads Search, Display &amp; Performance Max with optimal CPC.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Development Stack:</strong> HTML5, CSS3, Tailwind, JavaScript, React, Next.js, Bootstrap 5.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Creative Suite:</strong> Adobe Photoshop, Illustrator, Premiere Pro, After Effects &amp; InDesign.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Server Administration:</strong> Git CI/CD, AWS cloud storage, live cPanel hosting &amp; SSL.</span>
                                </li>
                            </ul>

                            {/* Stat Highlights */}
                            <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-border/60 text-center">
                                <div>
                                    <p className="text-xl font-extrabold text-foreground">4+</p>
                                    <p className="text-[10px] text-muted-foreground font-medium">Years Exp.</p>
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-primary">15+</p>
                                    <p className="text-[10px] text-muted-foreground font-medium">Industry Tools</p>
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-foreground">100%</p>
                                    <p className="text-[10px] text-muted-foreground font-medium">ROI Focus</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
