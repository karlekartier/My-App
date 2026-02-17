import { PhotoGallery } from "@/components/PhotoGallery";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-border/40 pb-6">
                        <div>
                            <p className="text-sm text-muted-foreground mb-2">Home » Gallery Grid View</p>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Gallery Grid
                            </h1>
                        </div>
                    </div>

                    <PhotoGallery />
                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
