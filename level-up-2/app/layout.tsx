import { Nunito } from "next/font/google";
import "./globals.css";
import Favicon from "../public/favicon.ico";
import { Metadata } from "next";
import { ReduxProvider } from "../redux/provider";
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
        <body className={`${nunito.className} bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300`}>
          {/* TODO: Remove nav here completely and use css to center the div below */}
          <nav>
            <div className="display:none">
              {/* TODO: Replace favicon with the logo */}
              {/* Logo */}
              <img src="/logo1.png" alt="Level Up Logo" className="h-20 md:h-28 opacity-0" />
            </div>
          </nav>
          <main className="container mx-auto px-4 mt-8">{children}</main>
        </body>
      </ReduxProvider>
    </html>
  );
}
