import { ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: any;
};

export function IconButton({ icon: Icon, ...props }: IconButtonProps) {
  return (
    <button
      className="rounded-full bg-white focus:brightness-95 hover:brightness-95 p-2 ease-out duration-200"
      {...props}
    >
      <Icon className="w-[3rem] h-[3rem] ease-out duration-200 stroke-gray-900 hover:stroke-primary focus:stroke-primary" />
    </button>
  );
}
