import "@/styles/home.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Providers from "@/components/common/Providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Next JS Starter Kit",
  description: "Nextjs starter kit",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("flex flex-col min-h-screen", GeistSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
