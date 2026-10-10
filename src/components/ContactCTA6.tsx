"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

const SVG_WIDTH = 1200;
const SVG_HEIGHT = 600;
const CENTER_Y = 0.5 * SVG_HEIGHT; // 300
const SPREAD_Y = 0.58 * SVG_HEIGHT; // 348

// ReUI CTA-6 harmonic sine-wave polylines: 30 stream lines with 64 points per line
const waveLines = Array.from({ length: 30 }, (_, a) => {
    const t = a / 29;
    const s = Math.sin(t * Math.PI);
    const i = CENTER_Y + (t - 0.5) * SPREAD_Y;
    const o = 40 * (0.28 + 0.72 * s);
    const c = t * Math.PI * 2;
    return {
        points: Array.from({ length: 64 }, (_, pIdx) => {
            const stepT = pIdx / 63;
            const x = stepT * SVG_WIDTH;
            const y = i + o * Math.sin(stepT * Math.PI * 2 + c);
            return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(" "),
        opacity: Number((0.12 + 0.52 * s).toFixed(3)),
    };
});

const flowStyles = `
  .cta6-flow {
    animation: cta6-stream-flow 22s linear infinite;
    will-change: transform;
  }
  @keyframes cta6-stream-flow {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-${SVG_WIDTH}px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .cta6-flow {
      animation: none;
    }
  }
`;

export function ContactCTA6({ className }: { className?: string }) {
    const router = useRouter();

    const scrollToForm = () => {
        const el = document.getElementById("contact-intake-card");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/contact#contact-intake-card");
        }
    };

    return (
        <section aria-labelledby="cta-6-title" className={cn("w-full py-12 md:py-20", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative isolate w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                    {/* Deep Space Background */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#090615] dark:bg-[oklch(0.13_0.02_285)]"
                    />

                    {/* Animated Seamless Dual-Tile Sine-Stream Wave Backdrop */}
                    <svg
                        aria-hidden="true"
                        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
                        preserveAspectRatio="xMidYMid slice"
                        className="pointer-events-none absolute inset-0 size-full"
                    >
                        <defs>
                            <linearGradient id="cta6-stream" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="oklch(0.62 0.22 300)" />
                                <stop offset="25%" stopColor="oklch(0.64 0.2 255)" />
                                <stop offset="50%" stopColor="oklch(0.74 0.18 48)" />
                                <stop offset="75%" stopColor="oklch(0.64 0.2 255)" />
                                <stop offset="100%" stopColor="oklch(0.62 0.22 300)" />
                            </linearGradient>

                            <filter id="cta6-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2.4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Infinite Seamless Stream Flow */}
                        <g className="cta6-flow">
                            {[0, SVG_WIDTH].map((offset) => (
                                <g
                                    key={offset}
                                    transform={offset ? `translate(${offset} 0)` : undefined}
                                    fill="none"
                                    stroke="url(#cta6-stream)"
                                    strokeWidth="1.1"
                                    strokeLinecap="round"
                                    filter="url(#cta6-glow)"
                                >
                                    {waveLines.map((line, idx) => (
                                        <polyline
                                            key={idx}
                                            points={line.points}
                                            opacity={line.opacity}
                                        />
                                    ))}
                                </g>
                            ))}
                        </g>

                        <style>{flowStyles}</style>
                    </svg>

                    {/* Center Vignette & Ambient Radial Glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(72% 82% at 50% 46%, oklch(0.12 0.02 285 / 0.66) 0%, transparent 72%)",
                        }}
                    />

                    {/* Foreground Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-10 sm:py-28 lg:py-32">
                        <h2
                            id="cta-6-title"
                            className="max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight text-[oklch(0.98_0.01_285)] text-white sm:text-5xl lg:text-6xl"
                        >
                            <span className="block">Ship Interfaces</span>
                            <span className="block">Worth Showing</span>
                        </h2>

                        <p className="max-w-xl text-base leading-7 text-balance text-[oklch(0.83_0.02_285)] text-slate-300 sm:text-lg sm:leading-8 font-normal">
                            Production-grade architectures and refined digital craftsmanship make every release look considered from day one, so you ship polished UI without a redesign pass.
                        </p>

                        <button
                            type="button"
                            onClick={scrollToForm}
                            className="group mt-2 inline-flex items-center justify-center rounded-full bg-[oklch(0.97_0.01_285)] bg-white px-8 py-3.5 text-sm sm:text-base font-semibold text-[oklch(0.2_0.03_285)] text-slate-950 shadow-lg shadow-white/10 hover:bg-slate-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] active:scale-95 transition-all duration-300 cursor-pointer"
                        >
                            <span>Start Building</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
