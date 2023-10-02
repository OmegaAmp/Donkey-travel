import '@/styles/global.css'
import {ThemeProvider} from "@/components/ThemeProvider";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="ne" suppressHydrationWarning className="text-gray-800 antialiased bg-white">
            <body className="font-sans leading-relaxed min-h-screen">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar/>
                    <div className="py-4 px-8 md:py-6 md:px-12 lg:py-8 lg:px-40">
                        {children}
                    </div>
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>

    )
}