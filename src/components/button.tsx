import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  buttonStyle?: "fill" | "border" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  size = "md",
  buttonStyle = "fill",
  ...rest
}: ButtonProps) {
  const fillStyle = "bg-primary text-white hover:bg-hardPrimary";
  const borderStyle = "border-2 border-solid border-primary text-primary bg-none hover:border-hardPrimary hover:text-hardPrimary";
  const ghostStyle = "bg-greenGray-50 text-primary hover:bg-greenGray-100 hover:text-hardPrimary";
  const buttonSm = "px-[2.4rem] py-[1rem]"
  const buttonMd = "px-[3.2rem] py-[1.2rem]"
  const buttonLg = "px-[4rem] py-[1.4rem]"
  return (
    <button
      className={`
        rounded-full flex items-center gap-sm font-500 w-max ease duration-200
        ${
          buttonStyle === "border"
            ? borderStyle
            : buttonStyle === "fill"
            ? fillStyle
            : ghostStyle
        }
        ${
          size === "sm"
            ? buttonSm
            : size === "md"
            ? buttonMd
            : buttonLg
        }
        `}
      {...rest}
    >
      {children}
    </button>
  );
}

const buttonStyles = {
  fill: {
    color: "white",
    bg: "primary",
    boder: "none",
  },
  outlined: {
    color: "primary",
    bg: "none",
    border: "primary",
  },
  ghost: {
    color: "primary",
    bg: "gray",
    border: "none",
  },
};
