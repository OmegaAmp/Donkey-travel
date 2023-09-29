import '@/styles/global.css'
import {ThemeProvider} from "@/components/ThemeProvider";
import React from "react";

export default function RootLayout({children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="ne" suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <p>hello world!</p>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}