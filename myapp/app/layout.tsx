import { Inter } from 'next/font/google';
import "./globals.css";

// This tells Next.js to automatically download and optimize the Inter font!
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: "Interior by Pranjali",
    description: "Interior design portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* By adding inter.className to the body, it applies the font globally! */}
            <body className={inter.className}>{children}</body>
        </html>
    );
}
