"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type NavLinkProps = PropsWithChildren & { href: string };

export function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        className={`b-sm text-500 text-gray-900 ease-out duration-200 hover:text-primary focus:text-primary p-sm ${
          pathname === href ? "text-primary" : ""
        }`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
