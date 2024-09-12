import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Clément",
  initials: "csh",
  url: "https://clementsainthilaire.fr",
  location: "France",
  locationLink: "",
  description:
    "Créateur Digital",
  summary:
    "",
  avatarUrl: "",
  skills: [
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "https://medium.com/@clement.sainthilaire.app", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "clement.sainthilaire.pro@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ClementSaint-Hilaire",
        icon: Icons.github,

        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.gg/h7ycZaTTyk",
        icon: Icons.Discord,

        navbar: true,
      },
      Figma: {
        name: "Figma",
        url: "https://www.figma.com/@cshd",
        icon: Icons.figma,

        navbar: true,
      },
      Threads: {
        name: "Threads",
        url: "https://www.threads.net/@clement.sainthilaire",
        icon: Icons.threads,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
} as const;
