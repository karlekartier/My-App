"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ASSETS_PREFIX } from "@/utils/constants";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

// Image Data with Categories
const GALLERY_ITEMS = [
    // Bike
    { src: "bike/20180502_135814-1.jpg", category: "Bike" },
    { src: "bike/20221016_155224.heif", category: "Bike" },
    { src: "bike/20221016_155313.heif", category: "Bike" },
    { src: "bike/20221016_160447.heif", category: "Bike" },

    // Car
    { src: "car/20241030_133948.jpg", category: "Car" },
    { src: "car/20241030_144718.jpg", category: "Car" },
    { src: "car/20251231_133938.jpg", category: "Car" },
    { src: "car/20260215_123324.jpg", category: "Car" },
    { src: "car/IMG-20250901-WA0021.jpg", category: "Car" },

    // Family
    { src: "family/20240113_104511.jpg", category: "Family" },
    { src: "family/20241021_154311.jpg", category: "Family" },
    { src: "family/20250330_134628.jpg", category: "Family" },
    { src: "family/20250330_134715.jpg", category: "Family" },
    { src: "family/SRP_10417.JPG", category: "Family" },
    { src: "family/SRP_10420.JPG", category: "Family" },
    { src: "family/SRP_10421.JPG", category: "Family" },
    { src: "family/SRP_10422.JPG", category: "Family" },
    { src: "family/SRP_10426.JPG", category: "Family" },
    { src: "family/SRP_10431.JPG", category: "Family" },
    { src: "family/SRP_10654.JPG", category: "Family" },

    // Friends
    { src: "friends/IMG-20200115-WA0043.jpg", category: "Friends" },
    { src: "friends/IMG-20200116-WA0016.jpg", category: "Friends" },
    { src: "friends/IMG-20200821-WA0012.jpg", category: "Friends" },
    { src: "friends/IMG-20201122-WA0026.jpg", category: "Friends" },
    { src: "friends/IMG_20201018_120631_160.jpg", category: "Friends" },

    // In Childhood
    { src: "in_childhood/IMG_20210806_204422.jpg", category: "In Childhood" },
    { src: "in_childhood/New Doc 2019-06-26 21.58.18_1.jpg", category: "In Childhood" },
    { src: "in_childhood/New Doc 2019-06-26 21.58.18_2.jpg", category: "In Childhood" },
    { src: "in_childhood/New Doc 2019-06-26 21.58.18_5.jpg", category: "In Childhood" },
    { src: "in_childhood/New Doc 2019-06-26 22.16.28_1.jpg", category: "In Childhood" },
    { src: "in_childhood/New Doc 2019-06-26 22.18.58_1.jpg", category: "In Childhood" },

    // Sis
    { src: "sis/20230618_162046.jpg", category: "Sis" },
    { src: "sis/20241021_135447.jpg", category: "Sis" },
    { src: "sis/20241021_135451.jpg", category: "Sis" },
    { src: "sis/20241021_154226.jpg", category: "Sis" },
    { src: "sis/20241021_154229.jpg", category: "Sis" },
    { src: "sis/20241021_154231.jpg", category: "Sis" },
    { src: "sis/20241021_154309.jpg", category: "Sis" },

    // Karle (Root Images)
    { src: "20201010_135020.jpg", category: "Karle" },
    { src: "20211010_093327.jpg", category: "Karle" },
    { src: "20211010_093337.jpg", category: "Karle" },
    { src: "20230319_153146.jpg", category: "Karle" },
    { src: "20230319_153308.jpg", category: "Karle" },
    { src: "20230319_153310.jpg", category: "Karle" },
    { src: "20230319_153325.jpg", category: "Karle" },
    { src: "20230814_135234.jpg", category: "Karle" },
    { src: "20230814_135246.jpg", category: "Karle" },
    { src: "20240616_142139.jpg", category: "Karle" },
    { src: "20240831_124435.jpg", category: "Karle" },
    { src: "20250110_163148.jpg", category: "Karle" },
    { src: "20250209_171010.jpg", category: "Karle" },
    { src: "20250209_171013.jpg", category: "Karle" },
    { src: "20250209_171018.jpg", category: "Karle" },
    { src: "20251005_173934.jpg", category: "Karle" },
    { src: "20260117_174926.heic", category: "Karle" },
    { src: "IMG-20200124-WA0003.jpg", category: "Karle" },
    { src: "IMG-20200821-WA0002.jpg", category: "Karle" },
    { src: "IMG-20200923-WA0036.jpg", category: "Karle" },
    { src: "IMG-20200923-WA0037.jpg", category: "Karle" },
    { src: "IMG-20210630-WA0013.jpg", category: "Karle" },
    { src: "IMG_20200928_173142.jpg", category: "Karle" },
    { src: "New Doc 2019-12-14 18.40.10_1.jpg", category: "Karle" },
    { src: "SRP_9609.JPG", category: "Karle" },
    { src: "dsc_0446_001.jpg", category: "Karle" },
];

const CATEGORIES = ["Karle", "Bike", "Car", "Family", "Friends", "In Childhood", "Sis"];

const ITEMS_PER_PAGE = 9;

export function PhotoGallery() {
    const [activeCategory, setActiveCategory] = useState("Karle");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Filter images based on category
    const filteredImages = GALLERY_ITEMS.filter(item => item.category === activeCategory);

    // Pagination Logic
    const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1); // Reset to first page
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrevious = () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    };

    return (
        <div className="space-y-10">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="min-h-[600px]">
                {visibleImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {visibleImages.map((item) => (
                                <motion.div
                                    key={item.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative group aspect-[4/5] overflow-hidden rounded-xl bg-muted cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                                    onClick={() => setSelectedImage(item.src)}
                                >
                                    <Image
                                        src={`${ASSETS_PREFIX}/assets/images/Gallery/${item.src}`}
                                        alt={`Gallery Image - ${item.category}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                            <Maximize2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <p className="text-sm font-medium px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full inline-block">
                                                {item.category}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-40">
                        <p className="text-muted-foreground">No images found in this category.</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="h-10 w-10 disabled:opacity-50"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="icon"
                            onClick={() => handlePageChange(page)}
                            className="h-10 w-10"
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="h-10 w-10 disabled:opacity-50"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2 z-50"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <div className="relative w-full h-auto max-h-[85vh] aspect-[original]">
                                <Image
                                    src={`${ASSETS_PREFIX}/assets/images/Gallery/${selectedImage}`}
                                    alt="Selected Gallery Image"
                                    width={1920}
                                    height={1080}
                                    className="object-contain w-full h-full max-h-[85vh] rounded-lg shadow-2xl"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
