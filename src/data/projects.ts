import type { VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { GithubIcon, GlobeIcon } from "lucide-react";

import type { buttonVariants } from "@/components/ui/button";

export const projects: Project[] = [
  {
    date: "Nov 2025",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe. Features include real-time inventory management, secure payment processing, and a seamless checkout experience.",
    thumbnail: "/images/projects/cover-01.jpg",
    links: [
      {
        title: "Live Demo",
        href: "https://github.com/khaledxyz/portfolio",
        icon: GlobeIcon,
        showLabel: true,
      },
      {
        title: "Github",
        href: "https://github.com/khaledxyz/portfolio",
        icon: GithubIcon,
        variant: "outline",
        showLabel: false,
        size: "icon",
      },
    ],
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
  },
  {
    date: "Oct 2025",
    title: "Real-Time Chat App",
    description:
      "A real-time chat application using Socket.IO and React. Supports private messaging, group chats, and message notifications with a responsive UI.",
    thumbnail: "/images/projects/cover-01.jpg",
    links: [
      {
        title: "Live Demo",
        href: "https://chatapp.example.com",
        icon: GlobeIcon,
        showLabel: true,
      },
      {
        title: "Github",
        href: "https://github.com/khaledxyz/chat-app",
        icon: GithubIcon,
        variant: "outline",
        showLabel: false,
        size: "icon",
      },
    ],
    tags: ["React", "Socket.IO", "TypeScript", "Tailwind CSS"],
  },
  {
    date: "Sep 2025",
    title: "Portfolio Builder",
    description:
      "An interactive portfolio builder that allows users to generate custom portfolio websites. Features drag-and-drop sections, live preview, and deploy-to-hosting integration.",
    thumbnail: "/images/projects/cover-01.jpg",
    links: [
      {
        title: "Live Demo",
        href: "https://portfoliobuilder.example.com",
        icon: GlobeIcon,
        showLabel: true,
      },
      {
        title: "Github",
        href: "https://github.com/khaledxyz/portfolio-builder",
        icon: GithubIcon,
        variant: "outline",
        showLabel: false,
        size: "icon",
      },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

export interface Project {
  date: string;
  title: string;
  description: string;
  thumbnail: string;
  links: ProjectLink[];
  tags: string[];
}

export interface ProjectLink {
  title: string;
  href: string;
  icon: LucideIcon;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  showLabel?: boolean;
}
