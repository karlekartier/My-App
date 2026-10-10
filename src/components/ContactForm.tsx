"use client";

import * as React from "react";
import { Send, Loader2, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { cn } from "@/utils/cn";
import { BASE_PATH } from "@/utils/constants";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/base-alert-dialog";

export function ContactForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogContent, setDialogContent] = React.useState<{
        title: string;
        description: string;
        type: "success" | "error";
    }>({ title: "", description: "", type: "success" });

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setDialogOpen(false);

        const form = event.currentTarget;
        const formData = new FormData(form);

        const firstName = (formData.get("firstName") as string)?.trim() || "";
        const lastName = (formData.get("lastName") as string)?.trim() || "";
        const name = `${firstName} ${lastName}`.trim() || "Website Visitor";
        const email = (formData.get("email") as string)?.trim() || "";
        const service = (formData.get("service") as string) || "";
        const rawMessage = (formData.get("message") as string)?.trim() || "";

        const message = service
            ? `[Service Scope: ${service}]\n\n${rawMessage}`
            : rawMessage;

        try {
            const res = await fetch(`${BASE_PATH}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await res.json();

            if (res.ok && result.success) {
                setDialogContent({
                    title: "Project Brief Sent!",
                    description: "Thank you for reaching out. I'll review your project details and get back to you within 2 hours.",
                    type: "success",
                });
                setDialogOpen(true);
                form.reset();
            } else {
                setDialogContent({
                    title: "Failed to Send",
                    description: result.message || "Failed to send message. Please try again or connect directly via WhatsApp (+91 73581 98244).",
                    type: "error",
                });
                setDialogOpen(true);
            }
        } catch (error) {
            setDialogContent({
                title: "Submission Error",
                description: "Something went wrong. Please check your network or reach out directly on WhatsApp (+91 73581 98244) or karthickkishoreking@gmail.com.",
                type: "error",
            });
            setDialogOpen(true);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label
                        htmlFor="firstName"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                        First Name <span className="text-primary">*</span>
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="lastName"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                        Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="service"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                        Project Scope
                    </label>
                    <div className="relative">
                        <select
                            id="service"
                            name="service"
                            defaultValue=""
                            className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-2 text-sm ring-offset-background text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all cursor-pointer appearance-none"
                        >
                            <option value="" disabled>Choose a service scope...</option>
                            <option value="Full-Stack Web Application (React/Next.js/TS)">Full-Stack Web App (React / Next.js / TypeScript)</option>
                            <option value="SEO, AEO & Answer Engine Optimization (GEO)">SEO, AEO & Answer Engine Core (GEO)</option>
                            <option value="UI/UX Design & Vector Graphic Systems">UI/UX Design, Vector Art & Adobe Systems</option>
                            <option value="Cloud Deployment & Server Management">Cloud Deployment (AWS S3, Git, CPanel)</option>
                            <option value="Technical Architecture & Consultation">Technical Architecture & Code Review</option>
                            <option value="General Collaboration / Other">General Collaboration / Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                    Project Details <span className="text-primary">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="flex min-h-[130px] w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all"
                    placeholder="Tell me what you are building, key timelines, and what you'd like to achieve..."
                />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                        "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 cursor-pointer",
                        isLoading && "opacity-75 cursor-not-allowed"
                    )}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Brief...
                        </>
                    ) : (
                        <>
                            Send Project Brief
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </button>

                <p className="text-xs text-muted-foreground">
                    Direct intake. Your email is never shared.
                </p>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent showDismissButton={true}>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={cn("flex items-center gap-2", dialogContent.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
                            {dialogContent.type === "success" ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                            {dialogContent.title}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            {dialogContent.description}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </form>
    );
}
