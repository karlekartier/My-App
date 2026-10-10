"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ContactCTA6 } from "@/components/ContactCTA6";
import { ASSETS_PREFIX } from "@/utils/constants";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageCircle,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    CheckCircle2,
    HelpCircle,
    Globe,
    Send
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faBehance, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
            <Navbar />

            <div className="pt-28 md:pt-36 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Title & Intro */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Direct Scope Desk & Client Intake</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                        Let&apos;s Build Something{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-primary to-cyan-500">
                            Exceptional
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
                        Have a project in mind, an architectural challenge, or need end-to-end full-stack execution? Share the essentials and let&apos;s get it in motion.
                    </p>
                </div>

                {/* Main Split Contact Card (Inspired by ReUI Marketing Contact Blocks) */}
                <div
                    id="contact-intake-card"
                    className="max-w-6xl mx-auto rounded-3xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden grid lg:grid-cols-12 relative"
                >
                    {/* Left Column: Intake Project Form */}
                    <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 space-y-6 flex flex-col justify-center bg-card">
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-muted text-foreground border border-border/80">
                                Project Inquiry
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Start A Project
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Share the essentials. I will route the note, evaluate the technical scope, and send a practical roadmap and next steps.
                            </p>
                        </div>

                        <ContactForm />
                    </div>

                    {/* Right Column: Abstract Scope & Vector Asset Panel */}
                    <div className="lg:col-span-5 p-8 md:p-10 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-[#12082b] via-[#0b0c1b] to-[#060814] text-white border-t lg:border-t-0 lg:border-l border-white/10">
                        {/* Background Ambient Glow & Dot Matrix */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04]"
                        />

                        {/* Top Scope Desk Header */}
                        <div className="relative z-10 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    Scope Desk &amp; Direct Line
                                </span>

                                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                                    EST. 2026
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                                Got A Launch <br />
                                In Motion?
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                                Plan adoption, technical architecture setup, and launch polish before your project drifts.
                            </p>
                        </div>

                        {/* Featured Vector Image: contact-me.svg */}
                        <div className="relative z-10 my-6 py-2 flex items-center justify-center">
                            <div className="relative w-full max-w-[340px] aspect-[500/380] flex items-center justify-center group">
                                <div className="absolute inset-0 bg-violet-500/15 blur-2xl rounded-full scale-90 group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
                                <Image
                                    src={`${ASSETS_PREFIX}/assets/contact-me.svg`}
                                    alt="Karthick Kishore Contact Details and Vector Art"
                                    width={450}
                                    height={340}
                                    priority
                                    className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Bottom Direct Contacts & Quick Connect Badges */}
                        <div className="relative z-10 space-y-4 pt-2">
                            <div className="flex flex-col gap-2.5">
                                <a
                                    href="mailto:karthickkishoreking@gmail.com"
                                    className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-500/40 transition-all text-xs sm:text-sm text-slate-200"
                                >
                                    <div className="p-2 rounded-lg bg-violet-500/20 text-violet-300 group-hover:scale-110 transition-transform">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium truncate flex-1">
                                        karthickkishoreking@gmail.com
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </a>

                                <a
                                    href="tel:+917358198244"
                                    className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/40 transition-all text-xs sm:text-sm text-slate-200"
                                >
                                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 group-hover:scale-110 transition-transform">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium flex-1">
                                        +91 73581 98244
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </a>

                                <a
                                    href="https://wa.me/917358198244?text=Hi%20Karthick,%20I'd%20like%20to%20discuss%20a%20project!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 hover:border-emerald-500/50 transition-all text-xs sm:text-sm text-emerald-300"
                                >
                                    <div className="p-2 rounded-lg bg-emerald-500/30 text-emerald-200 group-hover:scale-110 transition-transform">
                                        <MessageCircle className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium flex-1">
                                        Chat Directly on WhatsApp
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-3">
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                    Chennai, Tamil Nadu, India
                                </span>
                                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                                    <Clock className="w-3.5 h-3.5" />
                                    Response &lt; 2h
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Direct Channel Cards (ReUI Contact 6 Style) */}
                <div className="max-w-6xl mx-auto mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Channel 1: WhatsApp */}
                    <a
                        href="https://wa.me/917358198244?text=Hi%20Karthick,%20I'd%20like%20to%20discuss%20a%20project!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-base mb-1 group-hover:text-emerald-500 transition-colors">
                                WhatsApp Fast Track
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Instant messaging for quick queries, scoping, or urgent production updates.
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-4">
                            <span>Open WhatsApp</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>

                    {/* Channel 2: Email Desk */}
                    <a
                        href="mailto:karthickkishoreking@gmail.com"
                        className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                                Formal Project Briefs
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Send RFPs, product documentation, or multi-page technical specs.
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-4">
                            <span>karthickkishoreking@gmail.com</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>

                    {/* Channel 3: Social Hub */}
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5 transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-base mb-1">
                                Professional Hub
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Connect across developer and design platforms for continuous work updates.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 pt-4 border-t border-border mt-3">
                            <a
                                href="https://www.linkedin.com/in/karthick-kishore-b48985208/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors text-muted-foreground"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/karlekartier"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors text-muted-foreground"
                            >
                                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.behance.net/karlekarthier"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Behance"
                                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors text-muted-foreground"
                            >
                                <FontAwesomeIcon icon={faBehance} className="w-4 h-4" />
                            </a>
                            <a
                                href="https://x.com/karthickkisking"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter)"
                                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors text-muted-foreground"
                            >
                                <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Channel 4: FAQ */}
                    <Link
                        href="/#faq"
                        className="group p-6 rounded-2xl bg-card border border-border hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-base mb-1 group-hover:text-amber-500 transition-colors">
                                Frequent Queries
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Curious about workflow, turnaround times, tech stack, or live deployment?
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 mt-4">
                            <span>Read FAQ Section</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* ReUI CTA-6 Section (Closing Banner on Contact Page) */}
            <ContactCTA6 />

            {/* Global Footer (Preserved exactly as requested) */}
            <Footer />
        </main>
    );
}
