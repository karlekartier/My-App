import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ToolsShowcase } from "@/components/ToolsShowcase";
import { CoreSpecializations } from "@/components/CoreSpecializations";
import { Artwork } from "@/components/Artwork";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <ToolsShowcase />
      <CoreSpecializations />
      <Artwork />
      <Faq />
      <Footer />
    </main>
  );
}
