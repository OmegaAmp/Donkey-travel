'use client'

import '@/styles/global.css';
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useState, useEffect } from 'react';

interface WindowSize {
    width: number | null;
    height: number | null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { width } = useWindowSize();

    return (
        <html lang="ne" suppressHydrationWarning className="text-gray-800 antialiased bg-white">
            <body className="font-sans leading-relaxed ">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="flex flex-col min-h-screen">
                        <div>
                            {width !== null ? (width > 768 ? <Navbar /> : <HamburgerMenu />) : null}
                        </div>
                        <div className="flex-1 py-4 px-8 md:py-6 md:px-12 lg:py-8 lg:px-40">
                            {children}
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({ width: null, height: null });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize(); // Initialize the size

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}
