"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];
export default function NavItem() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          className={`block px-3 py-2 transition hover:text-teal-500 ${
            pathname === link.url ? "text-teal-500" : ""
          }`}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
}
