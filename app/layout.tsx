import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIG STEPPER - The Meme That Moves",
  description: "We don't chase pumps — we walk on them. Join the community that's one step ahead of the herd.",
  keywords: ["BIG STEPPER", "STEP", "meme coin", "crypto", "community"],
  openGraph: {
    title: "BIG STEPPER - The Meme That Moves",
    description: "We don't chase pumps — we walk on them.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIG STEPPER - The Meme That Moves",
    description: "We don't chase pumps — we walk on them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
