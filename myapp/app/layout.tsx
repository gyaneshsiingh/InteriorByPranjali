import { Inter } from 'next/font/google';
import "./globals.css";

// This tells Next.js to automatically download and optimize the Inter font!
const inter = Inter({ subsets: ['latin'] });

import type { Metadata } from 'next';

export const metadata: Metadata = {
    colorScheme: 'only light',
    title: {
        template: '%s | Interior by Pranjali Pune',
        default: 'Interior by Pranjali | Premium Interior Designers in Pune',
    },
    description: "Premium interior design services by Pranjali in Pune. Transforming spaces with modern, aesthetic, and functional design solutions.",
    keywords: ['interior design Pune', 'home decor Pune', 'office interiors Pune', 'modern interiors Pune', 'interior design portfolio', 'residential design Pune', 'best interior designers in pune'],
    openGraph: {
        title: 'Interior by Pranjali | Premium Interior Designers in Pune',
        description: 'Premium interior design services by Pranjali in Pune. Transforming spaces with modern, aesthetic, and functional design solutions.',
        url: 'https://interiorbypranjali.com',
        siteName: 'Interior by Pranjali Pune',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Interior by Pranjali | Premium Interior Designers in Pune',
        description: 'Premium interior design services by Pranjali in Pune.',
    },
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
