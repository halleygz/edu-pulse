import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],  // Customize subsets as needed
  weight: ["300", "400", "500", "600", "700"],  // Customize weights as needed
});

export const metadata: Metadata = {
  title: "Personalized Learning",
  description: "Getting Assesed and Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
