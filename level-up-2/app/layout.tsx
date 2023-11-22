import { Nunito } from "next/font/google";
import "./globals.css";
import Favicon from "../public/favicon.ico";
import { Metadata } from "next";
import { ReduxProvider } from "../redux/provider";
import { AuthProvider } from "./Providers";
// TODO: add redux here

const nunito = Nunito({
  weight: ["600", "700"],
  subsets: ["latin-ext"],
  variable: "--font-nunito",
});

// TODO: DONE - Update metadata with correct typescript, description and favicon
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
          {/* TODO: DONE - HTML Structure has repeated main semantic HTML. Pick one */}
          <main className="m-0">{children}</main>
          </AuthProvider>
        </body>
      </ReduxProvider>
    </html>
  );
}
