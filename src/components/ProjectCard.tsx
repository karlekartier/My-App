"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { BASE_PATH, ASSETS_PREFIX } from "@/utils/constants";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    imageLight: string;
    imageDark?: string;
}

export function ProjectCard({
    title,
    description,
    techStack,
    liveLink,
    imageLight,
    imageDark,
}: ProjectCardProps) {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? systemTheme : theme;
    const imageSrc =
        currentTheme === "dark" && imageDark ? imageDark : imageLight;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border shadow-sm transition-all hover:shadow-md h-full"
        >
            <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden bg-muted"
            >
                {mounted && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-transform duration-300 translate-y-4 group-hover:translate-y-0 border border-white/20">
                        View Project <ExternalLink size={16} />
                    </span>
                </div>
            </a>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                        Visit Website <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
