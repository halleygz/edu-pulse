// app/layout.tsx

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import axios from "axios";
import dynamic from 'next/dynamic';
const ClientWrapper = dynamic(() => import('@/components/Helper/ClientWrapper'), { ssr: false });// Correct import path for ClientWrapper

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
          
          <ClientWrapper>
          <div className="mb-14">
            <ResponsiveNav />
          </div>
            {children}
          </ClientWrapper> {/* Correctly use ClientWrapper */}
        </AuthProvider>
      </body>
    </html>
  );
}
