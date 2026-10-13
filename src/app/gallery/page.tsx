import { PhotoGallery } from "@/components/PhotoGallery";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Karthick Kishore",
    description: "A collection of my photography and memorable moments.",
};

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="container pt-32 pb-20 flex-1">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                        Photo Gallery
                    </h1>
                    <p className="text-muted-foreground">
                        A collection of my photography and memorable moments.
                    </p>
                </div>

                <PhotoGallery />
            </section>

            <Footer />
        </main>
    );
}
