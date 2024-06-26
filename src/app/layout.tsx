import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import ReactQueryWrapper from "../components/reactQueryWrapper";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C-Me",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>
          <ReactQueryWrapper>
            <Box
              sx={{
                width: { xs: 330, sm: 500 },
              }}
            >
              {children}
            </Box>
          </ReactQueryWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
