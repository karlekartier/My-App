"use client";

import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

interface CobeGlobeProps {
    className?: string;
}

export function CobeGlobe({ className = "" }: CobeGlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const [hasWebGL, setHasWebGL] = useState(true);

    useEffect(() => {
        let phi = 0;
        let currentPhi = 0;
        let globeInstance: ReturnType<typeof createGlobe> | null = null;
        let animationFrameId: number;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Verify WebGL availability
        try {
            const testGl = canvas.getContext("webgl2") || canvas.getContext("webgl");
            if (!testGl) {
                setHasWebGL(false);
                return;
            }
        } catch {
            setHasWebGL(false);
            return;
        }

        try {
            globeInstance = createGlobe(canvas, {
                devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
                width: 600 * 2,
                height: 600 * 2,
                phi: 0,
                theta: 0.15,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                mapBaseBrightness: 0.05,
                baseColor: [1, 0.85, 0.5], // Golden-yellow night city lights
                markerColor: [0.15, 0.6, 1],
                glowColor: [0.15, 0.6, 1], // Cyan/blue atmospheric limb bloom
                scale: 1.05,
                markers: [], // ReUI CTA-14 uses clean natural night earth without synthetic pins
            });

            const animate = () => {
                if (!pointerInteracting.current) {
                    phi += 0.003; // Smooth continuous rotation matching CTA-14
                }
                currentPhi = phi + pointerInteractionMovement.current;
                globeInstance?.update({
                    phi: currentPhi,
                    theta: 0.15,
                });
                animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        } catch (err) {
            console.error("Failed to initialize Cobe Globe:", err);
            setHasWebGL(false);
        }

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            globeInstance?.destroy();
        };
    }, []);

    if (!hasWebGL) {
        return (
            <div className={`relative flex items-center justify-center ${className}`}>
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-900/40 via-cyan-900/20 to-black border border-cyan-500/20 shadow-[0_0_80px_rgba(56,189,248,0.2)]" />
            </div>
        );
    }

    return (
        <div className={`relative w-full h-full ${className}`}>
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grabbing";
                    }
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grab";
                    }
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grab";
                    }
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta * 0.005;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta * 0.005;
                    }
                }}
                className="w-full h-full object-contain cursor-grab"
                style={{
                    contain: "layout paint size",
                    opacity: 1,
                }}
                width={1200}
                height={1200}
            />
        </div>
    );
}
