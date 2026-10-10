"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";

interface EducationItem {
    id: string;
    institution: string;
    degree: string;
    period: string;
    grade: string;
    description: string;
    logoLight: string;
    logoDark?: string;
}

const educationList: EducationItem[] = [
    {
        id: "veltech",
        institution: "Vel Tech University",
        degree: "Bachelor of Science - B.Sc, Computer Science",
        period: "2018 - 2021",
        grade: "First Class with 81% · Certified by Madras University",
        description:
            "Coursework included Data Structures, Algorithms, Web Application Development, Database Systems, and Object-Oriented Programming.",
        logoLight: `${ASSETS_PREFIX}/assets/images/svg/veltech.svg`,
    },
    {
        id: "tvis-hsc",
        institution: "TVIS Velammal International School",
        degree: "Higher Secondary Examination (HSC) - Computer Science & Mathematics",
        period: "2017 - 2018",
        grade: "First Class (58%) · Cleared JEE Mains (Paper 1) in 2018",
        description:
            "Specialized in Higher Secondary Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
        logoLight: `${ASSETS_PREFIX}/assets/images/svg/light/tvis.svg`,
        logoDark: `${ASSETS_PREFIX}/assets/images/svg/dark/tvisdark.svg`,
    },
    {
        id: "tvis-sslc",
        institution: "TVIS Velammal Vidyalaya School",
        degree: "Secondary School Examination (SSLC)",
        period: "2016",
        grade: "First Class with 86% (CGPA: 8.6)",
        description:
            "Graduated with High Academic Distinction and strong foundation in Science & Mathematics.",
        logoLight: `${ASSETS_PREFIX}/assets/images/svg/light/10th-tvisvv-light.svg`,
        logoDark: `${ASSETS_PREFIX}/assets/images/svg/dark/10th-tvisvv-dark.svg`,
    },
];

export function Education() {
    return (
        <section id="education" className="py-20 relative scroll-mt-16 bg-muted/20">
            <div className="container max-w-5xl">
                {/* Section Header */}
                <div className="text-left mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-semibold text-primary mb-3">
                        <GraduationCap className="h-3.5 w-3.5" />
                        <span>Academic Qualifications</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Education
                    </h2>
                    <p className="text-muted-foreground mt-2 max-w-xl text-sm md:text-base">
                        Academic degrees and schooling background in computer science and mathematics.
                    </p>
                </div>

                {/* Education Main Card */}
                <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs">
                    <div className="flex items-center gap-3 pb-6 border-b border-border/60 mb-8">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Academic Background</h3>
                            <p className="text-xs text-muted-foreground">Institutions &amp; Degrees</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {educationList.map((item, index) => {
                            const isLast = index === educationList.length - 1;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className={cn(
                                        "flex flex-col sm:flex-row items-start gap-4 group",
                                        !isLast && "pb-8 border-b border-border/60"
                                    )}
                                >
                                    {/* Institution Logo */}
                                    <div className="relative w-14 h-14 shrink-0 rounded-xl bg-white dark:bg-zinc-900 border border-border/80 p-2 flex items-center justify-center shadow-xs overflow-hidden transition-transform group-hover:scale-105">
                                        <Image
                                            src={item.logoLight}
                                            alt={item.institution}
                                            width={56}
                                            height={56}
                                            className={cn(
                                                "w-full h-full object-contain",
                                                item.logoDark && "dark:hidden"
                                            )}
                                        />
                                        {item.logoDark && (
                                            <Image
                                                src={item.logoDark}
                                                alt={item.institution}
                                                width={56}
                                                height={56}
                                                className="hidden dark:block w-full h-full object-contain"
                                            />
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                            <div>
                                                <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {item.institution}
                                                </h4>
                                                <p className="text-sm font-medium text-foreground/90 mt-0.5">
                                                    {item.degree}
                                                </p>
                                            </div>
                                            <span className="text-xs text-muted-foreground font-medium shrink-0 flex items-center gap-1 sm:mt-1">
                                                <Calendar className="w-3 h-3 text-muted-foreground/70" />
                                                {item.period}
                                            </span>
                                        </div>

                                        <div className="mt-2 inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                                            {item.grade}
                                        </div>

                                        <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">
                                            {item.description}
                                        </p>
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
