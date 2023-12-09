import { Nunito } from "next/font/google";
import "./globals.css";
import Favicon from "../public/favicon.ico";
import { Metadata } from "next";
import { ReduxProvider } from "../redux/provider";
import { AuthProvider } from "./Providers";

const nunito = Nunito({
  weight: ["600", "700"],
  subsets: ["latin-ext"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Level Up",
  description: "THE APP TO DEVELOP USELESS SKILLS",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${nunito.className} bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300`}
        >
          <AuthProvider>
          <main className="m-0">{children}</main>
          </AuthProvider>
        </body>
      </ReduxProvider>
    </html>
  );
}
