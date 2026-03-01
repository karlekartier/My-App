import { ProjectCard } from "@/components/ProjectCard";
import { VideoGallery } from "@/components/VideoGallery";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ASSETS_PREFIX } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Karthick Kishore",
    description: "Showcase of my web development projects and motion graphics work.",
};

const PROJECTS = [
    {
        title: "Optimista",
        description:
            "Complete end-to-end development including UI/UX design, responsive implementation, backend integration with APIs, testing across devices, and deployment.",
        techStack: ["Next.js", "React", "Tailwind CSS", "API Integration"],
        liveLink: "https://karlekartier.github.io/optimista-frontend/",
        imageLight: `${ASSETS_PREFIX}/assets/images/portfolio/optimista-light.png`,
        imageDark: `${ASSETS_PREFIX}/assets/images/portfolio/optimista-dark.png`,
    },
    {
        title: "Play Abacus India",
        description:
            "Complete end-to-end development including UI/UX design, responsive implementation, backend integration with APIs, testing across devices, and deployment.",
        techStack: ["React", "Bootstrap", "Responsive Design"],
        liveLink: "https://www.playabacusindia.com/",
        imageLight: `${ASSETS_PREFIX}/assets/images/portfolio/ipaplayabacusindai.png`,
        // Only one image available
        imageDark: `${ASSETS_PREFIX}/assets/images/portfolio/ipaplayabacusindai.png`,
    },
    {
        title: "Kafeel",
        description:
            "Complete end-to-end development including UI/UX design, responsive implementation, backend integration with APIs, testing across devices, and deployment.",
        techStack: ["HTML/CSS", "JavaScript", "Frontend Development"],
        liveLink: "https://karlekartier.github.io/kafeel/",
        imageLight: `${ASSETS_PREFIX}/assets/images/portfolio/kafeel-resume-light.png`,
        imageDark: `${ASSETS_PREFIX}/assets/images/portfolio/kafeel-resume.png`,
    },
    {
        title: "Shivani",
        description:
            "Complete end-to-end development including UI/UX design, responsive implementation, backend integration with APIs, testing across devices, and deployment.",
        techStack: ["React", "Motion", "UI/UX Design"],
        liveLink: "https://karlekartier.github.io/shivani/",
        imageLight: `${ASSETS_PREFIX}/assets/images/portfolio/shivani-light.png`,
        imageDark: `${ASSETS_PREFIX}/assets/images/portfolio/shivani-dark.png`,
    },
    {
        title: "Arka Kids",
        description:
            "A vibrant and engaging educational platform for kids, featuring interactive learning modules and a playful UI/UX design.",
        techStack: ["React", "Custom CSS", "Educational UX"],
        liveLink: "https://arkakids.com/",
        imageLight: `${ASSETS_PREFIX}/assets/images/portfolio/arkakids.png`,
        imageDark: `${ASSETS_PREFIX}/assets/images/portfolio/arkakids.png`,
    },
    {
        title: "Creative Arts",
        description:
            "An online hub for creative expression, showcasing various art forms and providing a platform for artists to connect and share their work.",
        techStack: ["WordPress", "UI/UX Design", "Portfolio Management"],
        liveLink: "https://www.creativeartsindia.in/",
        imageLight: `${ASSETS_PREFIX}/assets/images/portfolio/creative-arts.png`,
        imageDark: `${ASSETS_PREFIX}/assets/images/portfolio/creative-arts.png`,
    },
    {
        title: "Jhansi Portfolio",
        description:
            "A professional developer portfolio built for Jhansi, highlighting her skills, projects, and achievements with a clean, modern aesthetic.",
        techStack: ["React", "Next.js", "Tailwind CSS"],
        liveLink: "https://karlekartier.github.io/Jhansi-portfolio/",
        imageLight: `${ASSETS_PREFIX}/assets/images/portfolio/Jhansi-portfolio.png`,
        imageDark: `${ASSETS_PREFIX}/assets/images/portfolio/Jhansi-portfolio.png`,
    },
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Portfolio Header */}
            <section className="container pt-32 pb-16">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Portfolio
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A selection of my best work in web development and motion graphics.
                        From responsive web applications to engaging visual content.
                    </p>
                </div>
            </section>

            {/* Web Development Projects */}
            <section className="container mb-24">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold tracking-tight">Web Development</h2>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {PROJECTS.length} Projects
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            {/* Motion Graphics Gallery */}
            <section className="container mb-20">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">Motion Graphics</h2>
                    <p className="text-muted-foreground">
                        A collection of my motion graphics and video editing work.
                    </p>
                </div>

                <VideoGallery />
            </section>

            <Footer />
        </main>
    );
}
