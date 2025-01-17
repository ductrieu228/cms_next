import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
}) {

  return (
    <>
      <html lang="en">
        <body className="overflow-hidden ">
          <div className="main__body">
            <Sidebar />
            <main className="overflow-hidden h-screen">
              {/* <!----------------- Header -----------------> */}
              <header className="flex items-center justify-between sticky p-2 top-0 bg-white">
                <div className="flex items-center justify-between">
                  <a
                    href="#sidenav-open"
                    className="visible sm:hidden"
                    title="Open Menu"
                    aria-label="Open Menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="6" x2="20" y2="6" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                  </a>
                  
                </div>
                
              </header>
              {/* <!----------------- Main -----------------> */}
              <div className="w-full bg-white p-4 h-full overflow-hidden">
                {children}
              </div>
            </main>
          </div>
        </body>
      </html>
    </>
  );
}
