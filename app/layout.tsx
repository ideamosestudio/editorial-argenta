import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://editorialargenta.com.ar"),
  title: "Editorial Argenta | Ideas que merecen un libro",
  description:
    "Hacemos realidad proyectos editoriales, desde la edición hasta la difusión y el marketing. Editorial Argenta, fundada en 1970.",
  openGraph: {
    title: "Editorial Argenta",
    description: "Ideas que merecen un libro.",
    images: ["/og.png"],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Argenta",
    description: "Ideas que merecen un libro.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
