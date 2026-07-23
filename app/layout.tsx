import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://editorialargenta.com.ar"),
  title: "Editorial Argenta | Ideas que merecen un libro",
  description:
    "Edición, producción, distribución y marketing editorial desde 1970. Convertimos obras en libros con identidad, alcance y proyección.",
  openGraph: {
    title: "Editorial Argenta",
    description: "Ideas que merecen un libro. Buenos Aires, desde 1970.",
    images: ["/og.png"],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Argenta",
    description: "Ideas que merecen un libro. Buenos Aires, desde 1970.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
