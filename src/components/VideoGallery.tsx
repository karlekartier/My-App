"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VIDEOS = [
    "https://youtu.be/B6KKRSwBqOc",
    "https://youtu.be/1NaDXQj1owI",
    "https://youtu.be/u8chu6m-IIw",
    "https://youtu.be/tDPA8m3wxN8",
    "https://youtu.be/UHCprX7GClY",
    "https://youtu.be/2QLgG817LCQ",
    "https://youtu.be/Cs93PJXwqAM",
    "https://youtu.be/vKc3YOojGik",
    "https://youtu.be/64uTEJOvK10",
    "https://youtu.be/T5dbJWg4jNM",
    "https://youtu.be/wt9wz8DA-6g",
    "https://youtu.be/Jur5rVm3lOM",
    "https://youtu.be/IuDf3vbEtJw",
    "https://youtu.be/cXH474DSb7s",
    "https://youtu.be/v6wQ416gDM4",
    "https://youtu.be/wDV3iFGaeh0",
    "https://youtu.be/jhRLJN_wCVo",
    "https://youtu.be/klJznNRDQEI",
    "https://youtu.be/eMvQVeSdBC8",
    "https://youtu.be/AhkhYbhygho",
    "https://youtu.be/VhC_VLWspUg",
    "https://youtu.be/ka4rz6paMwQ",
];

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_INCREMENT = 6;

function getYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}

export function VideoGallery() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + LOAD_INCREMENT, VIDEOS.length));
    };

    const visibleVideos = VIDEOS.slice(0, visibleCount);
    const hasMore = visibleCount < VIDEOS.length;

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {visibleVideos.map((url, index) => {
                        const videoId = getYouTubeId(url);
                        if (!videoId) return null;

                        return (
                            <motion.div
                                key={url}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-sm group"
                            >
                                {playingVideo === videoId ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                ) : (
                                    <div
                                        className="relative w-full h-full cursor-pointer"
                                        onClick={() => setPlayingVideo(videoId)}
                                    >
                                        {/* Thumbnail */}
                                        <img
                                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                            alt="Video Thumbnail"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                // Fallback to hqdefault if maxresdefault doesn't exist
                                                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                            }}
                                        />

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {hasMore && (
                <div className="flex justify-center pt-8">
                    <Button
                        onClick={handleLoadMore}
                        size="lg"
                        variant="outline"
                        className="min-w-[200px]"
                    >
                        Load More Videos
                    </Button>
                </div>
            )}
        </div>
    );
}
