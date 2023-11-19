"use client";

import ArrowDown from "@public/arrow-down.svg";
import { IconButton } from "./icon-button";
import Search from "@public/search.svg";
import Heart from "@public/heart.svg";
import Bag from "@public/bag.svg";
import User from "@public/user.svg";
import Phone from "@public/phone.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function MobileHeaderActions() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const headerActions = [
    { icon: Search, label: "Search", onClick: handleSearch },
    { icon: Heart, label: "Wishlist", onClick: go("/wishlist") },
    { icon: Bag, label: "Shopping Cart", onClick: openShoppingCart },
    { icon: User, label: "My Dashboard", onClick: go("/dashboard") },
  ];

  function handleSearch() {}
  function openShoppingCart() {}
  function go(path: string) {
    return () => router.push(path);
  }

  function toggleMenu() {
    setShowMenu((p) => !p);
  }

  return (
    <div className="min-[481px]:hidden relative">
      <IconButton
        icon={ArrowDown}
        onClick={toggleMenu}
        className="w-[3rem] h-[3rem] stroke-greenGray-900"
      />
      {showMenu && (
        <div className="flex flex-col p-sm w-max rounded-[2rem] bg-white shadow absolute top-[100%] right-0 z-20">
          <Link
            href="tel:(219)5550114"
            className="flex items-center gap-sm text-500"
          >
            <Phone className="stroke-gray-900 w-[3.2rem] h-[3.2rem]" />
            <p className="">&#40;219&#41; 555-0114</p>
          </Link>
          {headerActions.map(({ label, ...rest }) => (
            <IconButton key={label} title={label} {...rest}>
              {label}
            </IconButton>
          ))}
        </div>
      )}
    </div>
  );
}
