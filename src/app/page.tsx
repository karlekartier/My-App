import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Toolkit } from "@/components/Toolkit";
import { SkillsOverview } from "@/components/SkillsOverview";
import { Artwork } from "@/components/Artwork";
import { DetailedSkills } from "@/components/DetailedSkills";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Toolkit />
      <SkillsOverview />
      <Artwork />
      <DetailedSkills />
      <ContactInfo />
      <Footer />
    </main>
  );
}
