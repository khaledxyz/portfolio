import { NextIntlClientProvider } from "next-intl";

import Analytics from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import { fonts } from "@/config/fonts.config";
import { siteConfig } from "@/config/site.config";
import { Providers } from "@/providers";

import "./globals.css";

import { getLocale, getMessages } from "next-intl/server";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      className={fonts}
      dir={direction}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Navbar />
            <main className="flex flex-1 flex-col space-y-20">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>

        <Analytics />
      </body>
    </html>
  );
}
