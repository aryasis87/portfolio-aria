import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "500", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Aria","jobTitle":"Creative Developer & Designer","url":"https://aria.pintuweb.com","inLanguage":"en"}};

export const metadata = {
  metadataBase: new URL("https://aria.pintuweb.com"),
  title: "Aria — Creative Developer & Designer",
  description: "Portfolio of Aria, a creative developer crafting immersive, futuristic web experiences with motion, 3D, and interaction design.",
  applicationName: "Aria",
  keywords: ["creative developer", "portfolio", "web designer", "interaction design", "frontend developer"],
  authors: [{ name: "Aria" }],
  creator: "Aria",
  publisher: "Aria",
  alternates: { canonical: "https://aria.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aria.pintuweb.com",
    siteName: "Aria",
    title: "Aria — Creative Developer & Designer",
    description: "Portfolio of Aria, a creative developer crafting immersive, futuristic web experiences with motion, 3D, and interaction design.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Aria — Creative Developer & Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria — Creative Developer & Designer",
    description: "Portfolio of Aria, a creative developer crafting immersive, futuristic web experiences with motion, 3D, and interaction design.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
