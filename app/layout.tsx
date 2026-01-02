import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RowKnow",
  icons: {
      icon: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

   <div style={{
      backgroundColor: "#f7f7f7",
      minHeight: "100vh",
      padding: "3rem 1.5rem"
   }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

	<header style={{
	   display: "flex",
	   alignItems: "center",
	   justifyContent: "space-between",
	   padding: "1.5rem",
	   backgroundColor: "#f7f7f7"
	}}>
	<img
	   src="/logo/RK_transparent_cropped.png"
	   alt="RowKnow logo"
	   style={{
	      height: "120px",
	      width: "auto",
	      marginBottom: "1rem"
	   }}
	/>

	   <nav style={{ display: "flex", gap: "1.5rem" }}>
	      <a href="/" style={{ textDecoration: "none", color: "#333" }}>Projects</a>
	      <a href="/about" style={{ textDecoration: "none", color: "#333" }}>About</a>
	      <a href="/contact" style={{ textDecoration: "none", color: "#333" }}>Contact</a>
	   </nav>
	</header>



        {children}
        <Analytics />
        </div>
        </div>
      </body>
    </html>
  );
}
