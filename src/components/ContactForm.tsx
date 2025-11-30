"use client";

import * as React from "react";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/utils/cn";

export function ContactForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = React.useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        try {
            const res = await fetch("https://backend-contactus-cojf.onrender.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok && result.success) {
                setStatus("success");
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Failed to send message.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Full name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john@example.com"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    placeholder="How can I help you?"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 w-full sm:w-auto",
                    isLoading && "opacity-70 cursor-not-allowed"
                )}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </button>

            {status === "success" && (
                <div className="p-4 rounded-md bg-green-500/10 text-green-600 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Message sent successfully!
                </div>
            )}

            {status === "error" && (
                <div className="p-4 rounded-md bg-red-500/10 text-red-600 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    {errorMessage}
                </div>
            )}
        </form>
    );
}
