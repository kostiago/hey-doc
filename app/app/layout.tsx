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
      <body className={`${poppins.variable} antialiased bg-slate-200`}>
        <div className="w-full m-auto max-w-[382px] mt-10 bg-white py-10 px-7 rounded-3xl shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}
