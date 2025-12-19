import { cookies } from "next/headers";

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("language")?.value || "en";

  const messages = (await import(`../../messages/${locale}.json`)).default;
  const timeZone = "Africa/Algiers";

  return {
    locale,
    messages,
    timeZone,
    defaultTranslationValues: {
      locale,
      ...(messages.default || {}),
    },
    formats: {
      dateTime: {
        short: {
          day: "numeric",
          month: "short",
          year: "numeric",
        },
      },
    },
    onError: (error) => {
      console.error(error);
    },
  };
});
