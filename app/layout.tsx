import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/utils/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Yury Kuvaev | DevOps & Platform Engineer",
  description:
    "Platform-minded DevOps engineer building reliable, codified infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-primary antialiased">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-sans selection:bg-accent-aws/30 selection:text-white`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}