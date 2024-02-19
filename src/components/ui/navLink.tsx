"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path === href
          ? "border-l-4 border-indigo-300 text-indigo-400 bg-[#F0F2FF5] bg-[#F0F2F5]"
          : ""
      }
    >
      {children}
    </Link>
  );
}
