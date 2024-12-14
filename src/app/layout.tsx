import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { Cabecalho } from "@/components/sections/Cabecalho";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "josedinizdev",
  description: "Portfolio de Jose Diniz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <AppRouterCacheProvider>
          <div className="flex flex-col w-full h-full items-center">
            <Cabecalho />
            {children}
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
