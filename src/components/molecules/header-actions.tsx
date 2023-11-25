import Phone from "@public/phone.svg";
import Search from "@public/search.svg";
import Bag from "@public/bag.svg";
import User from "@public/user.svg";
import Heart from "@public/heart.svg";
import { IconButton } from "../atoms/icon-button";
import Link from "next/link";

export function HeaderActions() {
  return (
    <div className="flex-1 flex items-center justify-end gap-sm max-[480px]:hidden">
      <Link
        href="tel:(219)5550114"
        className="flex items-center gap-sm text-500"
      >
        <Phone className="stroke-gray-900 w-[3.2rem] h-[3.2rem]" />
        <p>&#40;219&#41; 555-0114</p>
      </Link>
      <IconButton icon={Search} />
      <IconButton icon={Heart} />
      <IconButton icon={Bag} />
      <IconButton icon={User} />
    </div>
  );
}
