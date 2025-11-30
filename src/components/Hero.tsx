"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { cn } from "@/utils/cn";
import { BASE_PATH } from "@/utils/constants";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

            <div className="container grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                >
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Available for work
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
                        Hai I'm <span className="text-primary">Karthick Kishore</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-[600px]">
                        A passionate Digital Marketer | Motion Graphic & Web Designer.
                        <br />
                        <strong>3+ years of experience</strong> in crafting visually
                        compelling designs & digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href={`${BASE_PATH}/assets/pdf/kkr.pdf`}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                        >
                            Resume <Download className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                        >
                            Contact me <Mail className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full h-auto">
                        {/* Using the SVG from the original site if available, or a placeholder for now */}
                        <Image
                            src={`${BASE_PATH}/assets/images/svg/light/5184408light.svg`}
                            alt="Hero Illustration"
                            width={600}
                            height={600}
                            className="dark:hidden w-full h-full object-contain drop-shadow-2xl"
                        />
                        <Image
                            src={`${BASE_PATH}/assets/images/svg/dark/5184408dark.svg`}
                            alt="Hero Illustration"
                            width={600}
                            height={600}
                            className="hidden dark:block w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                    <span className="text-xs mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5" />
                </a>
            </motion.div>
        </section>
    );
}
