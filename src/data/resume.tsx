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
    { href: "/", icon: Icons.csh, label: "home" },
  ],
  pages: [
    { href: "/design-system", name: "Design System" },
    { href: "/icons", name: "Icons" },
    { href: "/work", name: "Works" },
    { href: "/templates", name: "Templates" },
  ],
  contact: {
    email: "clement.sainthilaire.pro@gmail.com",
    tel: "",
    social: {
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
    },
  },
} as const;
