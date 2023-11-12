import { PropsWithChildren, createElement, AllHTMLAttributes } from "react";

type HeadingType = PropsWithChildren & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "d1";
  weight?: 400 | 600;
} & AllHTMLAttributes<HTMLHeadingElement>;

const fontSizes = {
  d1: "7.2rem",
  h1: "5.6rem",
  h2: "4.8rem",
  h3: "4.0rem",
  h4: "3.6rem",
  h5: "3.2rem",
};

export function Heading({
  children,
  as: displayAs = "h3",
  weight = 600,
  ...props
}: HeadingType) {
  const style = {
    fontWeight: weight,
    fontSize: fontSizes[displayAs],
    color: "#1A1A1A"
  };

  if (displayAs === "d1") displayAs = "h1";


  return createElement(displayAs, { style, ...props }, children);
}
