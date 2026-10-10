"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    Menu,
    X,
    ChevronDown,
    Home,
    User,
    Briefcase,
    GraduationCap,
    Wrench,
    FolderGit2,
    Images,
    Mail,
    Layers,
    Sparkles,
    ChevronRight,
    Compass,
    HelpCircle
} from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { motion, AnimatePresence } from "motion/react";

interface SubPageItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    badge?: string;
}

const pageTree: { category: string; items: SubPageItem[] }[] = [
    {
        category: "Career & Credentials",
        items: [
            {
                name: "Experience",
                href: "/#experience",
                icon: Briefcase,
                description: "Professional journey & company roles",
                badge: "Current",
            },
            {
                name: "Education",
                href: "/#education",
                icon: GraduationCap,
                description: "Degrees, academic records & certifications",
            },
            {
                name: "Tools & Tech",
                href: "/#tools",
                icon: Wrench,
                description: "SEO, Web Dev & Adobe Creative suites",
                badge: "23+ Tools",
            },
        ],
    },
    {
        category: "Showcase & Works",
        items: [
            {
                name: "Specializations",
                href: "/#capabilities",
                icon: Sparkles,
                description: "AEO/GEO Core, Web Apps & Deployments",
                badge: "Pillars",
            },
            {
                name: "Artwork Showcase",
                href: "/#artwork",
                icon: Images,
                description: "Forest Night & Forest Dark vector art",
                badge: "3200px UHD",
            },
            {
                name: "FAQ & Support",
                href: "/#faq",
                icon: HelpCircle,
                description: "Frequently asked questions & direct chat",
            },
            {
                name: "Portfolio",
                href: "/portfolio",
                icon: FolderGit2,
                description: "Live projects, case studies & web apps",
                badge: "Showcase",
            },
            {
                name: "Gallery",
                href: "/gallery",
                icon: Images,
                description: "Creative artwork, motion reels & visuals",
            },
            {
                name: "Services",
                href: "/services",
                icon: Layers,
                description: "SEO, PPC advertising & dynamic web logic",
            },
        ],
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = React.useState(false);
    const [isMobilePagesExpanded, setIsMobilePagesExpanded] = React.useState(true);
    const [hovered, setHovered] = React.useState<string | null>(null);
    const pathname = usePathname();

    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close desktop dropdown on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsPagesDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close menus on route change
    React.useEffect(() => {
        setIsOpen(false);
        setIsPagesDropdownOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-xs"
                    : "bg-transparent"
            )}
        >
            <div className="container max-w-6xl flex h-16 items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight group">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden transition-transform group-hover:scale-105">
                        <Image
                            src={`${ASSETS_PREFIX}/assets/favicon/kk_logo.svg`}
                            alt="Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                        />
                    </div>
                    <span className="text-foreground">
                        Karthick<span className="text-primary">Kishore</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1.5">
                    {/* 1. Home */}
                    <Link
                        href="/"
                        onMouseEnter={() => setHovered("home")}
                        onMouseLeave={() => setHovered(null)}
                        className={cn(
                            "relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-colors rounded-xl",
                            pathname === "/"
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {hovered === "home" && (
                            <motion.span
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-secondary/80 rounded-xl -z-10"
                                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                            />
                        )}
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                    </Link>

                    {/* 2. About Me */}
                    <Link
                        href="/#about"
                        onMouseEnter={() => setHovered("about")}
                        onMouseLeave={() => setHovered(null)}
                        className="relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-xl"
                    >
                        {hovered === "about" && (
                            <motion.span
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-secondary/80 rounded-xl -z-10"
                                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                            />
                        )}
                        <User className="h-4 w-4" />
                        <span>About Me</span>
                    </Link>

                    {/* 3. Pages in Tree Components Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                            onMouseEnter={() => setHovered("pages")}
                            onMouseLeave={() => setHovered(null)}
                            className={cn(
                                "relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-colors rounded-xl",
                                isPagesDropdownOpen
                                    ? "text-primary bg-secondary/80"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                            aria-expanded={isPagesDropdownOpen}
                        >
                            {hovered === "pages" && !isPagesDropdownOpen && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-secondary/80 rounded-xl -z-10"
                                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                                />
                            )}
                            <Compass className="h-4 w-4" />
                            <span>Pages</span>
                            <ChevronDown
                                className={cn(
                                    "h-3.5 w-3.5 transition-transform duration-200",
                                    isPagesDropdownOpen && "rotate-180 text-primary"
                                )}
                            />
                        </button>

                        {/* Dropdown Tree Menu */}
                        <AnimatePresence>
                            {isPagesDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[560px] bg-card/95 backdrop-blur-xl border border-border/80 rounded-2xl shadow-xl p-4 overflow-hidden z-50"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        {pageTree.map((branch, bIdx) => (
                                            <div key={bIdx} className="space-y-2">
                                                {/* Tree Branch Header */}
                                                <div className="flex items-center gap-2 px-2.5 py-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider border-b border-border/50 pb-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    <span>{branch.category}</span>
                                                </div>

                                                {/* Tree Branch Items with connecting indent */}
                                                <div className="space-y-1 relative pl-2 border-l border-border/50 ml-2">
                                                    {branch.items.map((sub) => {
                                                        const SubIcon = sub.icon;
                                                        return (
                                                            <Link
                                                                key={sub.name}
                                                                href={sub.href}
                                                                onClick={() => setIsPagesDropdownOpen(false)}
                                                                className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-secondary/70 transition-all border border-transparent hover:border-border/60"
                                                            >
                                                                <div className="p-1.5 rounded-lg bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 mt-0.5">
                                                                    <SubIcon className="h-4 w-4" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center justify-between gap-1.5">
                                                                        <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                                                                            {sub.name}
                                                                        </span>
                                                                        {sub.badge && (
                                                                            <span className="text-[10px] font-medium px-1.5 py-0.2 rounded-md bg-primary/10 text-primary border border-primary/20">
                                                                                {sub.badge}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                                                                        {sub.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 4. Contact Me */}
                    <Link
                        href="/contact"
                        onMouseEnter={() => setHovered("contact")}
                        onMouseLeave={() => setHovered(null)}
                        className="relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-xl"
                    >
                        {hovered === "contact" && (
                            <motion.span
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-secondary/80 rounded-xl -z-10"
                                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                            />
                        )}
                        <Mail className="h-4 w-4" />
                        <span>Contact Me</span>
                    </Link>

                    {/* Divider */}
                    <div className="h-5 w-px bg-border/80 mx-1.5" />

                    {/* 5. Day / Night Toggle */}
                    <div className="pl-1">
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Menu Toggle & Theme */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2.5 rounded-xl border border-border/80 bg-card text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border/60 bg-card/95 backdrop-blur-xl shadow-xl overflow-hidden"
                    >
                        <div className="container py-4 space-y-2">
                            {/* 1. Home */}
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-secondary/70 transition-colors"
                            >
                                <Home className="h-4 w-4 text-primary" />
                                <span>Home</span>
                            </Link>

                            {/* 2. About Me */}
                            <Link
                                href="/#about"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-secondary/70 transition-colors"
                            >
                                <User className="h-4 w-4 text-primary" />
                                <span>About Me</span>
                            </Link>

                            {/* 3. Pages in Tree (Accordion style on mobile) */}
                            <div className="rounded-xl border border-border/60 bg-secondary/30 p-2.5">
                                <button
                                    onClick={() => setIsMobilePagesExpanded(!isMobilePagesExpanded)}
                                    className="flex items-center justify-between w-full px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground"
                                >
                                    <div className="flex items-center gap-2">
                                        <Compass className="h-4 w-4 text-primary" />
                                        <span>Pages (Tree View)</span>
                                    </div>
                                    <ChevronDown
                                        className={cn(
                                            "h-3.5 w-3.5 transition-transform",
                                            isMobilePagesExpanded && "rotate-180"
                                        )}
                                    />
                                </button>

                                {isMobilePagesExpanded && (
                                    <div className="mt-2 space-y-3 pt-2 border-t border-border/50">
                                        {pageTree.map((branch, bIdx) => (
                                            <div key={bIdx} className="space-y-1.5 pl-1.5">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                                    {branch.category}
                                                </p>
                                                <div className="space-y-1 pl-2 border-l border-primary/30 ml-1">
                                                    {branch.items.map((sub) => {
                                                        const SubIcon = sub.icon;
                                                        return (
                                                            <Link
                                                                key={sub.name}
                                                                href={sub.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <SubIcon className="h-3.5 w-3.5 text-primary" />
                                                                    <span>{sub.name}</span>
                                                                </div>
                                                                {sub.badge && (
                                                                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-primary/10 text-primary border border-primary/20">
                                                                        {sub.badge}
                                                                    </span>
                                                                )}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* 4. Contact Me */}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-secondary/70 transition-colors"
                            >
                                <Mail className="h-4 w-4 text-primary" />
                                <span>Contact Me</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
