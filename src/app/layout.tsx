import { fonts } from "@/config/fonts.config";
import { siteConfig } from "@/config/site.config";

import "./globals.css";

import { Providers } from "@/providers";

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
      <body className="flex min-h-screen flex-col space-y-20 bg-background font-sans text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
