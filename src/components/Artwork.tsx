"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
    Sparkles,
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight,
    Palette,
    Layers,
    Info,
    ExternalLink,
    Eye,
    SunMoon,
    Moon,
    Trees
} from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";

interface ForestArtwork {
    id: "forestnight" | "forestdark";
    title: string;
    badge: string;
    subtitle: string;
    src: string;
    alt: string;
    aspect: string;
    resolution: string;
    icon: React.ElementType;
    themeGradient: string;
    glowColor: string;
    description: string;
    artDetails: string;
    palette: { name: string; hex: string }[];
    tags: string[];
}

const forestArtworks: ForestArtwork[] = [
    {
        id: "forestnight",
        title: "Forest Night",
        badge: "Vector Landscape • Nocturnal Series",
        subtitle: "Nocturnal Ambience & Starlight Silhouettes",
        src: `${ASSETS_PREFIX}/assets/images/forestnight.jpg`,
        alt: "Forest Night digital vector artwork with nocturnal moonlit silhouettes and atmospheric mist",
        aspect: "aspect-[16/9]",
        resolution: "3200 × 1800 (UHD)",
        icon: Moon,
        themeGradient: "from-blue-950/40 via-indigo-950/20 to-background",
        glowColor: "bg-blue-500/20",
        description:
            "Crafted with precision vector layering in Adobe Illustrator, capturing the tranquil stillness of a nocturnal mountain forest under glowing starlight.",
        artDetails:
            "Built with multi-tier silhouette depth, cool nocturnal gradient meshes, and subtle misty atmospheric scatter. Each tree trunk, ridge line, and ambient illumination layer is tuned for crisp scalability.",
        palette: [
            { name: "Deep Midnight", hex: "#09131d" },
            { name: "Atmospheric Navy", hex: "#132c3f" },
            { name: "Moonlit Mist", hex: "#2b506e" },
            { name: "Starlight Cyan", hex: "#689bb5" },
            { name: "Ambient Frost", hex: "#d0e6f5" }
        ],
        tags: ["Vector Art", "Adobe Illustrator", "Nocturnal Lighting", "Atmospheric Depth", "3200x1800 UHD"]
    },
    {
        id: "forestdark",
        title: "Forest Dark",
        badge: "Atmospheric Study • Color Mood",
        subtitle: "Deep Canopy Atmosphere & Shadow Depth",
        src: `${ASSETS_PREFIX}/assets/images/forestdark.jpg`,
        alt: "Forest Dark digital vector artwork with deep emerald forest canopy and moody shadow grading",
        aspect: "aspect-[16/9]",
        resolution: "3200 × 1800 (UHD)",
        icon: Trees,
        themeGradient: "from-emerald-950/40 via-teal-950/20 to-background",
        glowColor: "bg-emerald-500/20",
        description:
            "An exploration in rich chromatic harmony, blending deep evergreen foliage with cinematic contrast and atmospheric fog.",
        artDetails:
            "Showcases sophisticated color theory balance. Deep forest shadows transition into diffused emerald moss and warm highlights, demonstrating how structured palettes communicate emotion and mystery.",
        palette: [
            { name: "Abyssal Forest", hex: "#0c1510" },
            { name: "Emerald Pine", hex: "#1b3022" },
            { name: "Deep Moss", hex: "#2f4f38" },
            { name: "Canopy Green", hex: "#587b5c" },
            { name: "Sage Ambient", hex: "#99b28a" }
        ],
        tags: ["Color Palette", "Illustrator Vectors", "Atmospheric Fog", "Moody Canopy", "3200x1800 UHD"]
    }
];

export function Artwork() {
    const [selectedArtwork, setSelectedArtwork] = React.useState<ForestArtwork | null>(null);
    const [activeTab, setActiveTab] = React.useState<"dual" | "forestnight" | "forestdark">("dual");

    // Close lightbox on Escape key
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedArtwork(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section
            id="artwork"
            className="relative py-24 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden border-t border-border/40"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-14 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm">
                        <Palette className="w-3.5 h-3.5" />
                        <span>Artwork & Digital Landscapes</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                        Atmospheric Landscapes:{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                            Forest Night & Forest Dark
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        Handcrafted ultra-high-definition vector landscapes built with Adobe Illustrator precision and nuanced color palette mastery. Click any artwork to inspect full resolution.
                    </p>

                    {/* View Switcher Controls */}
                    <div className="flex items-center justify-center gap-2 pt-2">
                        <div className="inline-flex items-center p-1 rounded-xl border border-border/80 bg-card/80 backdrop-blur-md shadow-sm">
                            <button
                                onClick={() => setActiveTab("dual")}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-xs font-semibold transition-all",
                                    activeTab === "dual"
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Dual Showcase
                            </button>
                            <button
                                onClick={() => setActiveTab("forestnight")}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all",
                                    activeTab === "forestnight"
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <Moon className="w-3.5 h-3.5" />
                                <span>Forest Night</span>
                            </button>
                            <button
                                onClick={() => setActiveTab("forestdark")}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all",
                                    activeTab === "forestdark"
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <Trees className="w-3.5 h-3.5" />
                                <span>Forest Dark</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Artworks Display */}
                {activeTab === "dual" ? (
                    /* DUAL SIDE-BY-SIDE SHOWCASE */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {forestArtworks.map((art, index) => {
                            const IconComp = art.icon;
                            return (
                                <motion.div
                                    key={art.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/80 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
                                >
                                    {/* Image Showcase with Hover Zoom */}
                                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted/40">
                                        <Image
                                            src={art.src}
                                            alt={art.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent pointer-events-none" />

                                        {/* Top Badges */}
                                        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                                            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-background/85 backdrop-blur-md text-foreground border border-border/60 shadow-sm flex items-center gap-1.5">
                                                <IconComp className="w-3.5 h-3.5 text-primary" />
                                                <span>{art.title}</span>
                                            </span>
                                            <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-primary/90 text-primary-foreground shadow-sm">
                                                {art.resolution}
                                            </span>
                                        </div>

                                        {/* Click to Zoom Action Button */}
                                        <button
                                            onClick={() => setSelectedArtwork(art)}
                                            className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-lg bg-background/90 hover:bg-background text-foreground text-xs font-semibold backdrop-blur-md border border-border/80 shadow-md flex items-center gap-1.5 transition-transform duration-200 hover:scale-105"
                                            aria-label={`Open high-resolution view of ${art.title}`}
                                        >
                                            <Maximize2 className="w-3.5 h-3.5 text-primary" />
                                            <span>High-Res Lightbox</span>
                                        </button>
                                    </div>

                                    {/* Content & Metadata */}
                                    <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                                                    {art.badge}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                                {art.title}
                                            </h3>

                                            <p className="text-xs font-semibold text-muted-foreground">
                                                {art.subtitle}
                                            </p>

                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {art.description}
                                            </p>

                                            <p className="text-xs text-muted-foreground/90 leading-relaxed pt-1">
                                                {art.artDetails}
                                            </p>
                                        </div>

                                        {/* Palette Swatches */}
                                        <div className="space-y-2 pt-4 border-t border-border/50">
                                            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                                                <span>Color Palette Extraction</span>
                                                <span className="text-xs">5 Harmonies</span>
                                            </div>

                                            <div className="grid grid-cols-5 gap-2">
                                                {art.palette.map((color) => (
                                                    <div key={color.hex} className="group/swatch space-y-1 text-center">
                                                        <div
                                                            className="w-full h-8 rounded-md border border-border/70 shadow-sm transition-transform group-hover/swatch:scale-110"
                                                            style={{ backgroundColor: color.hex }}
                                                            title={`${color.name}: ${color.hex}`}
                                                        />
                                                        <span className="text-[10px] font-mono block text-muted-foreground">
                                                            {color.hex}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tag Pills */}
                                        <div className="flex flex-wrap gap-1.5 pt-3">
                                            {art.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary text-secondary-foreground border border-border/60"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    /* SINGLE SPOTLIGHT PANORAMA VIEW */
                    (() => {
                        const art = forestArtworks.find((a) => a.id === activeTab) || forestArtworks[0];
                        const IconComp = art.icon;
                        return (
                            <motion.div
                                key={art.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-8"
                            >
                                {/* Panoramic image container */}
                                <div className="relative w-full aspect-[21/9] min-h-[320px] rounded-2xl overflow-hidden border border-border/70 shadow-xl bg-muted/30">
                                    <Image
                                        src={art.src}
                                        alt={art.alt}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

                                    {/* Action button inside image */}
                                    <button
                                        onClick={() => setSelectedArtwork(art)}
                                        className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-background/90 hover:bg-background text-foreground text-xs font-bold backdrop-blur-md border border-border/80 shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
                                    >
                                        <Maximize2 className="w-4 h-4 text-primary" />
                                        <span>Full Screen Lightbox</span>
                                    </button>

                                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-md text-foreground text-xs font-bold border border-border/70 flex items-center gap-2">
                                        <IconComp className="w-4 h-4 text-primary" />
                                        <span>{art.title}</span>
                                        <span className="text-muted-foreground font-normal">| {art.resolution}</span>
                                    </div>
                                </div>

                                {/* Detailed Breakdown Row */}
                                <div className="grid lg:grid-cols-3 gap-8 items-start">
                                    <div className="lg:col-span-2 space-y-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                            {art.badge}
                                        </span>
                                        <h3 className="text-3xl font-extrabold text-foreground">{art.subtitle}</h3>
                                        <p className="text-base text-muted-foreground leading-relaxed">{art.description}</p>
                                        <p className="text-sm text-muted-foreground/90 leading-relaxed">{art.artDetails}</p>
                                    </div>

                                    {/* Color Swatches Column */}
                                    <div className="p-6 rounded-2xl border border-border/70 bg-secondary/30 space-y-4">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                                            <Palette className="w-4 h-4 text-primary" />
                                            <span>Palette Palette Swatches</span>
                                        </h4>
                                        <div className="space-y-2.5">
                                            {art.palette.map((color) => (
                                                <div key={color.hex} className="flex items-center justify-between text-xs">
                                                    <div className="flex items-center gap-2.5">
                                                        <div
                                                            className="w-5 h-5 rounded-md border border-border/80 shadow-sm"
                                                            style={{ backgroundColor: color.hex }}
                                                        />
                                                        <span className="font-medium text-foreground">{color.name}</span>
                                                    </div>
                                                    <span className="font-mono text-muted-foreground">{color.hex}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })()
                )}

                {/* Explore Full Gallery CTA */}
                <div className="mt-14 text-center">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                        <span>Explore Full Creative Portfolio & Gallery</span>
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedArtwork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
                        onClick={() => setSelectedArtwork(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-6xl w-full bg-card border border-border/80 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
                                <div>
                                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                                        <span>{selectedArtwork.title}</span>
                                        <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                                            {selectedArtwork.resolution}
                                        </span>
                                    </h4>
                                    <p className="text-xs text-muted-foreground">{selectedArtwork.subtitle}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedArtwork(null)}
                                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                                    aria-label="Close lightbox"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Full Resolution Image */}
                            <div className="relative w-full aspect-[16/9] max-h-[75vh] bg-black/50">
                                <Image
                                    src={selectedArtwork.src}
                                    alt={selectedArtwork.alt}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="px-6 py-4 bg-card border-t border-border flex flex-wrap items-center justify-between gap-4">
                                <p className="text-xs text-muted-foreground max-w-xl">
                                    {selectedArtwork.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setSelectedArtwork(null)}
                                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                    >
                                        Close Preview
                                    </button>
                                    <Link
                                        href="/gallery"
                                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                    >
                                        Go to Gallery
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
