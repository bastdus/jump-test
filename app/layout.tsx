import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { DevIndicators } from "@/components/DevIndicators";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jump technical test",
  description:
    "The goal of this test is to create a production ready react application by displaying data from an external API and creating a simple contact form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={process.env.NODE_ENV === "production"}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Menu />
            <main className="container mx-auto w-full max-w-7xl px-4 pt-28">
              {children}
            </main>
            <Footer />
            <Toaster />
            <DevIndicators />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
