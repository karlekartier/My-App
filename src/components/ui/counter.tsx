"use client";

import * as React from "react";
import { useInView, animate } from "motion/react";
import { cn } from "@/utils/cn";

interface CounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
}

export function Counter({
    value,
    prefix = "",
    suffix = "",
    duration = 2,
    className,
}: CounterProps) {
    const ref = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    const [displayValue, setDisplayValue] = React.useState(0);

    React.useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration,
            ease: [0.16, 1, 0.3, 1], // smooth deceleration
            onUpdate(latest) {
                setDisplayValue(Math.round(latest));
            },
        });

        return () => controls.stop();
    }, [isInView, value, duration]);

    return (
        <span
            ref={ref}
            aria-label={`${prefix}${value}${suffix}`}
            className={cn("inline-block tabular-nums", className)}
        >
            {prefix}{displayValue}{suffix}
        </span>
    );
}
