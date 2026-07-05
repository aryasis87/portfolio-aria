import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Aria — Creative Developer & Designer",
  description: "Portfolio of Aria, a creative developer crafting immersive, futuristic web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          {/* Ambient aurora background */}
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="animate-drift absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-700/25 blur-[140px]" />
            <div className="animate-drift-slow absolute right-[-10%] top-[20%] h-[480px] w-[480px] rounded-full bg-fuchsia-700/20 blur-[140px]" />
            <div className="animate-drift absolute bottom-[-10%] left-[30%] h-[480px] w-[480px] rounded-full bg-cyan-700/15 blur-[150px]" />
          </div>
          <div className="grain" aria-hidden="true" />
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
