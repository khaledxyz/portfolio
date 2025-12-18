import Script from "next/script";

export default function Analytics() {
  if (
    !(
      process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
      process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
    )
  ) {
    return null;
  }

  return (
    <Script
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
      strategy="beforeInteractive"
    />
  );
}
