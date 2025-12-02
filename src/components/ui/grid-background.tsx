import React from "react";
import { cn } from "@/utils/cn";

interface GridBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    gridSize?: string; // e.g., "6:6" -> 6rem x 6rem
}

export function GridBackground({
    children,
    className,
    gridSize = "40px",
}: GridBackgroundProps) {
    // Parse gridSize if it's in "6:6" format or just use it as size
    const size = gridSize.includes(":") ? "4rem" : gridSize; // Simplified logic for now, can be expanded

    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden bg-background",
                className
            )}
        >
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
                    backgroundSize: `${size} ${size}`,
                    maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
