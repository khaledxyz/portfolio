import Analytics from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import { fonts } from "@/config/fonts.config";
import { siteConfig } from "@/config/site.config";
import { Providers } from "@/providers";

import "./globals.css";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={fonts} lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Providers>
          <Navbar />
          <main className="flex flex-1 flex-col space-y-20">{children}</main>
          <Footer />
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}
