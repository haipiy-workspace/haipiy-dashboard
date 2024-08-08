import MButton from "@mui/material/Button";
import { ComponentPropsWithoutRef } from "react";

interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "cancel" | "outline";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  color?:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "inherit";
  size?: "small" | "medium" | "large";
}

const buttonStyle = (
  variantButton: "primary" | "secondary" | "cancel" | "outline" | "disabled",
): { style: string; variantButton: "contained" | "text" } => {
  switch (variantButton) {
    case "disabled":
      return {
        style: "bg-gray-500 text-black-100",
        variantButton: "contained",
      };
    case "secondary":
      return {
        style: "bg-primary-400 text-black-100",
        variantButton: "contained",
      };
    case "cancel":
      return {
        style: "bg-red-500 text-black-100",
        variantButton: "contained",
      };
    case "outline":
      return {
        style: "text-primary-500",
        variantButton: "text",
      };
    default:
      return {
        style: "bg-primary-500 text-black-100",
        variantButton: "contained",
      };
  }
};

const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  color,
  size,
  ...props
}: IButtonProps) => (
  <MButton
    variant={buttonStyle(variant).variantButton}
    disabled={disabled}
    className={`${disabled ? buttonStyle("disabled").style : buttonStyle(variant).style} h-10 w-[92px] rounded-[10px] text-[15px] font-normal ${className}`}
    {...props}
  >
    {children}
  </MButton>
);

export default Button;
