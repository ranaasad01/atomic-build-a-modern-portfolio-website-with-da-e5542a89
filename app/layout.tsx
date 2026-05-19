import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Alex Rivera — Full-Stack Developer & UI Engineer",
  description:
    "Personal portfolio of Alex Rivera, a full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant web experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "UI Engineer", "Portfolio"],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera — Full-Stack Developer",
    description: "Building beautiful, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
