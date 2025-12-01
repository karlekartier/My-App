"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { PenTool, TrendingUp, Layout, Brain, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/cn";
import { BASE_PATH } from "@/utils/constants";

const tabs = [
    {
        id: "adobe",
        label: "Adobe Creative Suite",
        icon: PenTool,
        content: {
            title: "Motion Graphics & Visual Storytelling",
            description: (
                <>
                    <p className="mb-4">
                        Crafting <strong>vector animations, comic-style graphics, & engaging explainer videos</strong> that bring ideas to life.
                    </p>
                    <p>
                        Passionate about <strong>design, storytelling, & digital growth,</strong> I bring creativity and technical expertise to every project I work on.
                    </p>
                </>
            ),
            image: `/assets/images/svg/Adobe.svg`,
        },
    },
    {
        id: "marketing",
        label: "Digital Marketing",
        icon: TrendingUp,
        content: {
            title: "Digital Marketing & Branding",
            description: (
                <div className="space-y-4">
                    <div>
                        <h5 className="font-semibold text-primary">SEO & Content Strategy</h5>
                        <p className="text-muted-foreground text-sm">Implementing search engine optimization (SEO) best practices, keyword research, and content marketing strategies to improve online visibility.</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-primary">Social Media & Ads</h5>
                        <p className="text-muted-foreground text-sm">Expertise in running targeted campaigns on platforms like Google Ads, Facebook, and Instagram to maximize brand reach and engagement.</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-primary">Analytics & Optimization</h5>
                        <p className="text-muted-foreground text-sm">Leveraging data-driven insights to enhance campaign performance and conversion rates.</p>
                    </div>
                </div>
            ),
            image: `/assets/images/svg/light/digitalmarketing.svg`,
            darkImage: `/assets/images/svg/dark/digitalmarketingdark.svg`,
        },
    },
    {
        id: "frontend",
        label: "Front-End-Dev",
        icon: Layout,
        content: {
            title: "Front-End Development",
            description: (
                <p>
                    Crafting seamless, responsive, & user-friendly web experiences <strong>using HTML, CSS, Bootstrap 5, & SASS.</strong> With a focus on clean code & modern UI/UX principles, I ensure visually stunning & high-performing websites that enhance user engagement.
                </p>
            ),
            image: `/assets/images/vs_deploy.webp`,
        },
    },
    {
        id: "ai",
        label: "Ai-tool",
        icon: Brain,
        content: {
            title: "AI & Creative Automation Toolkit",
            description: (
                <div className="space-y-4">
                    <div>
                        <h5 className="font-semibold text-primary">AI-Powered Content Creation</h5>
                        <p className="text-muted-foreground text-sm">Crafting engaging, data-driven content using ChatGPT & Google Gemini, ensuring high-quality, well-structured, & impactful messaging for digital platforms.</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-primary">AI-Assisted Design & Graphics</h5>
                        <p className="text-muted-foreground text-sm">Enhancing creative workflows by sourcing high-quality visuals from Freepik.com, transforming them into stunning vector designs, motion graphics, & logos with precision & artistic excellence.</p>
                    </div>
                </div>
            ),
            image: `/assets/images/svg/aibot.svg`,
        },
    },
];

export function Toolkit() {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);

    return (
        <section id="toolkit" className="py-20">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Professional work Toolkit</h2>
                    <p className="text-muted-foreground">
                        With hands-on expertise in these tools, I streamline workflows, enhance creativity, & bring innovative ideas to life!
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all",
                                activeTab === tab.id
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-secondary/20 rounded-2xl p-6 lg:p-12 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {tabs.map((tab) => (
                            tab.id === activeTab && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    {/* Text */}
                                    <div className="text-center lg:text-left">
                                        <h3 className="text-2xl font-bold mb-6">{tab.content.title}</h3>
                                        <div className="text-muted-foreground leading-relaxed">
                                            {tab.content.description}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="flex justify-center">
                                        <div className="relative w-full max-w-[500px] aspect-video lg:aspect-square flex items-center justify-center bg-white/5 rounded-xl p-4">
                                            <Image
                                                src={tab.content.image}
                                                alt={tab.label}
                                                width={500}
                                                height={400}
                                                className={cn(
                                                    "w-full h-auto max-h-[400px] object-contain drop-shadow-xl",
                                                    tab.content.darkImage ? "dark:hidden" : ""
                                                )}
                                            />
                                            {tab.content.darkImage && (
                                                <Image
                                                    src={tab.content.darkImage}
                                                    alt={tab.label}
                                                    width={500}
                                                    height={400}
                                                    className="hidden dark:block w-full h-auto max-h-[400px] object-contain drop-shadow-xl"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
