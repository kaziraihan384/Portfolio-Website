import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kazi Raihan - Software Developer",
  description: "Personal portfolio of Kazi Raihan, Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}