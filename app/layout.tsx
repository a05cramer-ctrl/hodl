import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM HODLING | $HODL",
  description:
    "Built for diamond hands. Designed for the cycle. The luxury memecoin for true believers.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
