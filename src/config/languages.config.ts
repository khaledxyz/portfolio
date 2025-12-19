export const languages = [
  {
    id: "ar",
    name: "العربية",
    countryCode: "dz",
    flag: "/flags/dz.svg",
  },
  {
    id: "en",
    name: "English",
    countryCode: "us",
    flag: "/flags/usa.svg",
  },
  {
    id: "fr",
    name: "Français",
    countryCode: "fr",
    flag: "/flags/fr.svg",
  },
] as const;

export type Language = (typeof languages)[number];
export type LanguageId = Language["id"];
