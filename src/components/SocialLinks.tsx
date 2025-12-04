import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const socialLinks = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/share/18ftrrvcVq/",
        color: "hover:text-blue-600",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/karlekartier?igsh=MXgyOTZwOWYxMjNoaw==",
        color: "hover:text-pink-600",
    },
    {
        name: "Twitter",
        icon: Twitter,
        href: "https://x.com/karthickkisking",
        color: "hover:text-sky-500",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/karthick-kishore-b48985208/",
        color: "hover:text-blue-700",
    },
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/karlekartier",
        color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
        name: "Behance",
        icon: ({ className }: { className?: string }) => (
            <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={className}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.05.368-.53 3.113-4.172 3.113-2.07 0-3.63-1.377-3.63-3.15 0-1.59 1.035-2.79 2.665-2.79 1.49 0 2.313.98 2.432 1.872h-2.912c-.06-.63-.372-1.08-.96-1.08-.66 0-1.108.52-1.108 1.523 0 1.04.49 1.55 1.14 1.55.81 0 1.11-.61 1.13-1.005h5.415zm-9.35-6.415c0-2.366-1.436-4.585-4.49-4.585-3.08 0-4.88 2.19-4.88 4.936 0 2.82 1.83 5.064 5.005 5.064 3.036 0 4.62-2.3 4.62-4.42 0-.25-.012-.49-.03-.72h-7.08c.19 1.56 1.21 2.63 2.66 2.63 1.09 0 1.95-.67 2.17-1.78h2.52v.03c-.28 1.95-1.75 3.55-4.72 3.55-3.86 0-5.6-2.61-5.6-5.8 0-3.21 1.92-5.85 5.6-5.85 2.8 0 4.25 1.76 4.25 4.05 0 .28-.02.55-.05.81h-2.005z" />
            </svg>
        ),
        href: "https://www.behance.net/karlekarthier",
        color: "hover:text-blue-500",
    },
];

export function SocialLinks() {
    return (
        <section className="py-12 bg-background">
            <div className="container">
                <h2 className="text-2xl font-bold text-center mb-8">Connect on Social Media</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 w-32"
                        >
                            <div className={`p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors ${social.color}`}>
                                <social.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                            </div>
                            <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
