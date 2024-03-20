import type { Metadata } from "next";
import "./globals.css";
import TypekitLoader from "../lib/fontloader";

export const metadata: Metadata = {
  openGraph: {
    title: "Daiki Nomura",
    type: "website",
    url: "https://daikinomura.tech/",
    siteName: "Daiki Nomura",
    description: "Daiki Nomura's Portfolio",
  },
};

const year = new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <TypekitLoader />
      <body>{children}
        <footer>
          <p className="copyright">Copyright &copy; 2022 - {year} Daiki Nomura</p>
        </footer>
      </body>
    </html>
  );
}
