import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Senimen — Медицинские скидки в Казахстане",
  description:
    "Скачайте приложение Senimen и получайте скидки у лучших медицинских партнеров Казахстана. Бесплатно, без скрытых платежей.",
  keywords: "медицинские скидки, Казахстан, Senimen, скидки на лечение, приложение скидки",
  openGraph: {
    title: "Senimen — Медицинские скидки в Казахстане",
    description:
      "Скачайте приложение Senimen и получайте скидки у лучших медицинских партнеров Казахстана.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
