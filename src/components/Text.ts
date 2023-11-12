import { AllHTMLAttributes, PropsWithChildren, createElement } from "react";

type TextPropsType = PropsWithChildren & {
  fontSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: 400 | 500 | 600;
} & AllHTMLAttributes<HTMLHeadingElement>;

const fontSizes = {
  xs: "1.2rem",
  sm: "1.4rem",
  md: "1.6rem",
  lg: "1.8rem",
  xl: "2.0rem",
  "2xl": "2.4rem",
};

export function Text({
  children,
  fontSize = "md",
  weight = 400,
  ...props
}: TextPropsType) {
  const style = {
    fontSize: fontSizes[fontSize],
    fontWeight: weight,
    color: "#1A1A1A",
  };

  return createElement("p", { style, ...props }, children);
}
