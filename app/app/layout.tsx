import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PreloadResources } from "./preload-resources";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hey-Doc | Agende sua Consulta",
  description: "Assistente pessoal de agendamento de consulta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PreloadResources />
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
