// app/layout.tsx

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ClientWrapper from "@/components/Helper/ClientWrapper"; // Correct import path for ClientWrapper
import axios from "axios";
import dynamic from 'next/dynamic';

const ResponsiveNav = dynamic(() => import("@/components/Home/Navbar/ResponsiveNav"), { 
  ssr: false // Disable server-side rendering if needed
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],  // Customize subsets as needed
  weight: ["300", "400", "500", "600", "700"],  // Customize weights as needed
});

export const metadata: Metadata = {
  title: "Edu-pulse",
  description: "Getting Assessed and Learning",
};

axios.defaults.withCredentials = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <AuthProvider>
          <div className="mb-14">
            <ResponsiveNav />
          </div>
          <ClientWrapper>{children}</ClientWrapper> {/* Correctly use ClientWrapper */}
        </AuthProvider>
      </body>
    </html>
  );
}
