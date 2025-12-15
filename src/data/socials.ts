import {
  Calendar03Icon,
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

const socialMap = {
  email: {
    name: "Email",
    value: "mailto:me@khaledxyz.com",
    display: "me@khaledxyz.com",
    icon: Mail01Icon,
  },
  linkedin: {
    name: "LinkedIn",
    value: "https://linkedin.com/in/khaledxyz",
    display: "linkedin.com/in/khaledxyz",
    icon: Linkedin01Icon,
  },
  github: {
    name: "GitHub",
    value: "https://github.com/khaledxyz",
    display: "github.com/khaledxyz",
    icon: Github01Icon,
  },
  cal: {
    name: "Cal",
    value: "https://cal.com/khaledxyz",
    display: "cal.com/khaledxyz",
    icon: Calendar03Icon,
  },
} as const;

export type SocialKey = keyof typeof socialMap;
export const socials = Object.values(socialMap);
export const socialByKey = socialMap;
