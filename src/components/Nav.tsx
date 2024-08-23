"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkType {
  name: string;
  path: string;
}

const links: LinkType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Skill",
    path: "/skill",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname: string = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
