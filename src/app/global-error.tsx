'use client';

import { useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body className={cn("antialiased isolate", inter.className)}>
                <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
                    <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
                    <p className="mb-6 text-muted-foreground">
                        A critical error occurred. Please refresh the page.
                    </p>
                    <button
                        onClick={() => reset()}
                        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
