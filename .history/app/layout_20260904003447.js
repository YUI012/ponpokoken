import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "ぽんぽこ｜IT資格を最短で",
  description: "IT資格ごとの最短合格ルート、教材、問題演習、検証記事をまとめた資格ナビ"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>

      <GoogleAnalytics gaId="G-WWQHG6WC82" />
    </html>
  );
}