import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesView } from "@/components/ServicesView";

export const metadata: Metadata = {
    title: "Services & Pricing | Karthick Kishore - Web Dev, Motion Design & AI Search",
    description:
        "End-to-end creative and technical services: Full-Stack Web Development (Next.js & React), Video & Motion Graphics, Brand Identity, and Generative Engine Optimization (AEO/GEO). Transparent pricing and 4-step workflow.",
    keywords: [
        "Web Development",
        "Next.js Developer",
        "React",
        "Motion Graphics",
        "Video Editing",
        "Graphic Design",
        "Brand Identity",
        "Generative Engine Optimization",
        "GEO",
        "AEO",
        "SEO Services",
        "Karthick Kishore"
    ],
    openGraph: {
        title: "Services & Pricing | Karthick Kishore",
        description:
            "Design, Web Development, Motion Graphics & Generative Search Optimization (AEO & GEO). Transparent pricing tiers and a proven 4-step workflow.",
        type: "website"
    }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <ServicesView />
            <Footer />
        </main>
    );
}
