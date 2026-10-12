"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, Send, ArrowUpRight, Share2, CheckCircle2 } from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { GridBackground } from "@/components/ui/grid-background";
import { cn } from "@/utils/cn";

interface SocialChannel {
    name: string;
    handle: string;
    href: string;
    icon: string;
    iconDark?: string;
    color: string;
    bgColor: string;
    borderColor: string;
    glowColor: string;
}

const socialChannels: SocialChannel[] = [
    {
        name: "LinkedIn",
        handle: "karthick-kishore",
        href: "https://www.linkedin.com/in/karthick-kishore-b48985208/",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/linkedin.svg`,
        color: "text-[#0A66C2]",
        bgColor: "hover:bg-[#0A66C2]/10",
        borderColor: "hover:border-[#0A66C2]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(10,102,194,0.25)]"
    },
    {
        name: "WhatsApp",
        handle: "+91 73581 98244",
        href: "https://wa.me/qr/GTP2HAM2XOBJF1",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/whatsapp.svg`,
        color: "text-[#25D366]",
        bgColor: "hover:bg-[#25D366]/10",
        borderColor: "hover:border-[#25D366]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]"
    },
    {
        name: "Instagram",
        handle: "@karlekartier",
        href: "https://www.instagram.com/karlekartier?igsh=MXgyOTZwOWYxMjNoaw==",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/instagram.svg`,
        color: "text-[#E4405F]",
        bgColor: "hover:bg-[#E4405F]/10",
        borderColor: "hover:border-[#E4405F]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(228,64,95,0.25)]"
    },
    {
        name: "X (Twitter)",
        handle: "@karthickkisking",
        href: "https://x.com/karthickkisking",
        icon: `${ASSETS_PREFIX}/assets/images/x-formerly-twitter-light.svg`,
        iconDark: `${ASSETS_PREFIX}/assets/images/x-formerly-twitter-dark.svg`,
        color: "text-foreground",
        bgColor: "hover:bg-foreground/10",
        borderColor: "hover:border-foreground/40",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(150,150,150,0.2)]"
    },
    {
        name: "Behance",
        handle: "karlekarthier",
        href: "https://www.behance.net/karlekarthier",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/Behance.svg`,
        color: "text-[#1769FF]",
        bgColor: "hover:bg-[#1769FF]/10",
        borderColor: "hover:border-[#1769FF]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(23,105,255,0.25)]"
    },
    {
        name: "Facebook",
        handle: "Karthick Kishore",
        href: "https://www.facebook.com/share/18ftrrvcVq/",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/facebook.svg`,
        color: "text-[#1877F2]",
        bgColor: "hover:bg-[#1877F2]/10",
        borderColor: "hover:border-[#1877F2]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(24,119,242,0.25)]"
    },
    {
        name: "Gmail",
        handle: "karthickkishoreking",
        href: "mailto:karthickkishoreking@gmail.com",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/gmail.svg`,
        color: "text-[#EA4335]",
        bgColor: "hover:bg-[#EA4335]/10",
        borderColor: "hover:border-[#EA4335]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(234,67,53,0.25)]"
    },
    {
        name: "Telegram",
        handle: "@karthickkishore",
        href: "https://t.me/karthickkishore",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/telegram.svg`,
        color: "text-[#26A5E4]",
        bgColor: "hover:bg-[#26A5E4]/10",
        borderColor: "hover:border-[#26A5E4]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(38,165,228,0.25)]"
    },
    {
        name: "Pinterest",
        handle: "karlekartier",
        href: "https://www.pinterest.com/karlekartier/",
        icon: `${ASSETS_PREFIX}/assets/images/social_connect/pinterest-badge.svg`,
        color: "text-[#BD081C]",
        bgColor: "hover:bg-[#BD081C]/10",
        borderColor: "hover:border-[#BD081C]/50",
        glowColor: "group-hover:shadow-[0_0_20px_rgba(189,8,28,0.25)]"
    }
];

interface FooterProps {
    showSocialConnect?: boolean;
}

export function Footer({ showSocialConnect }: FooterProps = {}) {
    const pathname = usePathname();
    const isContactPage = pathname ? (pathname === "/contact" || pathname.startsWith("/contact/")) : false;
    const shouldShowSocialConnect = showSocialConnect !== undefined ? showSocialConnect : isContactPage;

    const [email, setEmail] = React.useState("");
    const [subscribed, setSubscribed] = React.useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    return (
        <footer className="relative bg-background border-t border-border/80 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-40">
                <GridBackground gridSize="6:6" />
            </div>

            {/* Ambient glows */}
            <div className="absolute -top-32 left-1/4 w-[500px] h-[250px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container relative z-10 pt-16 pb-10 px-4 sm:px-6 lg:px-8 mx-auto">
                {/* 1. TOP HUB: Social Connect Icons Grid (Only displayed on Contact page) */}
                {shouldShowSocialConnect && (
                    <div className="mb-14 pb-14 border-b border-border/60">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                                    <Share2 className="w-3.5 h-3.5" />
                                    <span>Social Connect Hub</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                                    Connect Across All Platforms
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Follow my design drops, repositories, marketing case studies, or message me directly.
                                </p>
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">
                                9 Channels • Verified Profiles
                            </span>
                        </div>

                        {/* 9 Social Icons Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
                            {socialChannels.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Connect on ${social.name}`}
                                    className={cn(
                                        "group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-border/70 bg-card/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                                        social.bgColor,
                                        social.borderColor,
                                        social.glowColor
                                    )}
                                >
                                    <div className="relative w-8 h-8 mb-2.5 transition-transform duration-300 group-hover:scale-115">
                                        {social.iconDark ? (
                                            <>
                                                <Image
                                                    src={social.icon}
                                                    alt={`${social.name} icon`}
                                                    fill
                                                    className="object-contain dark:hidden"
                                                />
                                                <Image
                                                    src={social.iconDark}
                                                    alt={`${social.name} icon`}
                                                    fill
                                                    className="object-contain hidden dark:block"
                                                />
                                            </>
                                        ) : (
                                            <Image
                                                src={social.icon}
                                                alt={`${social.name} icon`}
                                                fill
                                                className="object-contain"
                                            />
                                        )}
                                    </div>
                                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors text-center truncate w-full">
                                        {social.name}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground/80 truncate w-full text-center">
                                        {social.handle}
                                    </span>
                                    <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* 2. MAIN FOOTER CONTENT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
                    {/* Brand & Newsletter (Cols 1-5) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-border/80 bg-card p-1.5 shadow-sm">
                                <Image
                                    src={`${ASSETS_PREFIX}/assets/favicon/kk_logo.svg`}
                                    alt="Karthick Kishore Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-lg tracking-tight text-foreground">
                                    karthick-kishore
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                    Digital Marketer • Motion Designer • Web Dev
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                            Bridging generative search intelligence (AEO & GEO), full-stack web applications, and vector artistry. Turning ideas into measurable digital outcomes.
                        </p>

                        {/* Newsletter / Direct Inquiry */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Get Project Updates & Insights
                            </p>
                            <form onSubmit={handleSubscribe} className="relative max-w-md">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full h-11 pl-10 pr-28 rounded-xl border border-border/80 bg-card/60 backdrop-blur-sm text-xs text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 px-4 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                                >
                                    Subscribe
                                </button>
                            </form>
                            {subscribed && (
                                <p className="text-xs text-emerald-500 font-medium flex items-center gap-1.5 pt-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Thank you for subscribing! I will be in touch.</span>
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Navigation Columns (Cols 6-12) */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Column 1: Core Navigation */}
                        <div className="space-y-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                                Navigation
                            </h5>
                            <ul className="space-y-2.5 text-xs">
                                <li>
                                    <Link href="/#home" className="text-muted-foreground hover:text-primary transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                                        About Me
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#experience" className="text-muted-foreground hover:text-primary transition-colors">
                                        Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#education" className="text-muted-foreground hover:text-primary transition-colors">
                                        Education
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#tools" className="text-muted-foreground hover:text-primary transition-colors">
                                        Tools & Tech
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Works & Pillars */}
                        <div className="space-y-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                                Works &amp; Showcase
                            </h5>
                            <ul className="space-y-2.5 text-xs">
                                <li>
                                    <Link href="/#capabilities" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                                        <span>Specializations</span>
                                        <span className="text-[9px] px-1 py-0.2 rounded bg-primary/10 text-primary">Core</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#artwork" className="text-muted-foreground hover:text-primary transition-colors">
                                        Atmospheric Art
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                                        Web Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                                        Services &amp; Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                                        Creative Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Contact & Direct Line */}
                        <div className="space-y-4 col-span-2 sm:col-span-1">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                                Direct Inquiries
                            </h5>
                            <ul className="space-y-2.5 text-xs">
                                <li>
                                    <Link href="/#faq" className="text-muted-foreground hover:text-primary transition-colors">
                                        FAQs &amp; Help
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                        Contact Form
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground/80 block mb-0.5">
                                        Email
                                    </span>
                                    <a
                                        href="mailto:karthickkishoreking@gmail.com"
                                        className="text-foreground hover:text-primary font-medium transition-colors break-all"
                                    >
                                        karthickkishoreking@gmail.com
                                    </a>
                                </li>
                                <li className="pt-1">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground/80 block mb-0.5">
                                        Phone / WhatsApp
                                    </span>
                                    <a
                                        href="tel:+917358198244"
                                        className="text-foreground hover:text-primary font-medium transition-colors"
                                    >
                                        +91 73581 98244
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. BOTTOM BAR */}
                <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} <span className="font-semibold text-foreground">Karthick Kishore</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-xs">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Available for Freelance &amp; Full-Time</span>
                    </div>

                    <p className="text-[11px] text-muted-foreground/80">
                        Built with Next.js 16 • Tailwind CSS 4
                    </p>
                </div>
            </div>
        </footer>
    );
}
