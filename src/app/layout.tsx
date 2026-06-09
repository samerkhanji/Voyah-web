import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Voyah — Premium Electric Vehicles",
    template: "%s · Voyah",
  },
  description:
    "Explore the Voyah range of premium electric SUVs, sedans and MPVs. Browse live inventory and book a test drive with your local Voyah dealer.",
  metadataBase: new URL("https://voyah-web.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
