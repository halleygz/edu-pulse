import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { AuthProvider } from "@/context/AuthContext";
import axios from "axios";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],  // Customize subsets as needed
  weight: ["300", "400", "500", "600", "700"],  // Customize weights as needed
});

export const metadata: Metadata = {
  title: "Edu-pulse",
  description: "Getting Assesed and Learning",
};
axios.defaults.withCredentials = true;
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
        <AuthProvider>
          <div className="mb-2">
        <ResponsiveNav/>
          </div>
          <div>

        {children}
          </div>
    </AuthProvider>
      </body>
    </html>
  );
}
