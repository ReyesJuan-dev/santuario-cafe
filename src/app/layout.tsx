import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santuario Cafe",
  description: "Welcome to Santuario Cafe. A little pause, a good coffee, a place to stay.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
