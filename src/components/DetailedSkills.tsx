"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FileCode, Palette, FileJson, Code, Layers } from "lucide-react";
import { cn } from "@/utils/cn";
import { BASE_PATH } from "@/utils/constants";

const skills = [
    {
        title: "HTML 5",
        icon: `/assets/images/icons/html-5.svg`,
        progress: 90,
        color: "bg-orange-500",
        description: "Developing structured, SEO-friendly, and accessible web pages using VS Code, ensuring fast performance, cross-browser compatibility, and modern semantic elements.",
    },
    {
        title: "CSS 3",
        icon: `/assets/images/icons/css3.svg`,
        progress: 87,
        color: "bg-blue-500",
        description: "Designing responsive, visually engaging layouts with Flexbox, Grid, animations, and transitions, optimized using SASS for scalability and maintainability.",
    },
    {
        title: "JavaScript",
        icon: Code, // Fallback to Lucide icon
        progress: 85,
        color: "bg-yellow-400",
        description: "Enhancing interactivity and functionality in web applications using JavaScript, leveraging tools like Node.js for backend scripting and Figma for interactive UI/UX prototyping.",
    },
    {
        title: "Sass",
        icon: `/assets/images/icons/sass.svg`,
        progress: 55,
        color: "bg-pink-500",
        description: "Optimizing CSS workflow with SASS, utilizing variables, mixins, and nesting to create maintainable, scalable, and performance-driven stylesheets.",
    },
    {
        title: "Adobe Suite",
        icon: `/assets/images/icons/adobe_icons/adobe-creative-cloud.svg`,
        progress: 80,
        color: "bg-red-500",
        description: "Crafting detailed vector illustrations, editing photos, and designing layouts using Adobe Creative Cloud tools like Illustrator, Photoshop, and InDesign.",
    },
];

export function DetailedSkills() {
    return (
        <section className="py-20 bg-secondary/20">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">My Skills & Expertise</h2>
                        <p className="text-muted-foreground">
                            With a blend of development and design skills, I bring creativity and functionality together to deliver high-quality digital experiences.
                        </p>
                    </div>
                    <div className="flex justify-start lg:justify-end">
                        <a href="#services" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                            See all services
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-secondary rounded-lg">
                                    {typeof skill.icon === "string" ? (
                                        <Image src={skill.icon} alt={skill.title} width={32} height={32} className="w-8 h-8" />
                                    ) : (
                                        <skill.icon className="w-8 h-8 text-primary" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                                        {skill.title}
                                        <span className="text-sm font-normal text-muted-foreground">{skill.progress}%</span>
                                    </h3>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={cn("h-full rounded-full", skill.color)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
