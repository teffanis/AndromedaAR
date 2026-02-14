import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andromeda AR | Soluciones digitales rentables",
  description:
    "Landing de captación para vender automatizaciones, IA aplicada y desarrollo web de alto retorno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
