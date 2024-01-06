import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// constructMetadata
import Navbar from "@/components/navbar/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/Footer/Footer";
// import ThemeContextProvider from "@/context/ThemeContext";
import { AppContextProvider } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "balijavaspirit",
  description: "profesional garment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <AppContextProvider>
            {/* <ThemeContextProvider> */}
            <MaxWidthWrapper>
              <Navbar />
              {children}
              <Footer />
            </MaxWidthWrapper>
            {/* </ThemeContextProvider> */}
          </AppContextProvider>
        </main>
      </body>
    </html>
  );
}
