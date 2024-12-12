import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import Menu from "@/components/Menu";
import { TailwindIndicator } from "@/components/TailwindIndicator";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          <div className="pt-16">{children}</div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
