import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";

// Component imports
import Header from "./components/global/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });

export const metadata: Metadata = {
  title: "Opus-Space | Let's Create Your Opus",
  description:
    "Graphic design services, Web design and development, UI/UX design agency, Branding solutions, Vancouver design agency, Creative design services, Professional design studio, Vancouver BC design firm, Expert graphic designers, Custom web development, User-friendly web design, Logo and branding design, Visual identity services, Vancouver design experts, Small design team, Responsive web design, Innovative UI/UX, Creative branding, Graphic design in Vancouver, Design professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
