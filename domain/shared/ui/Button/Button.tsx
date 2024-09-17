import MLoadingButton from "@mui/lab/LoadingButton";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "cancel" | "outline";
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | "inherit";
  size?: "small" | "medium" | "large";
}

const buttonStyle = (
  variantButton: "primary" | "secondary" | "cancel" | "outline" | "disabled",
): { style: string; variantButton: "contained" | "text" } => {
  switch (variantButton) {
    case "disabled":
      return {
        style: "bg-haip-gray-500 text-haip-black-100",
        variantButton: "contained",
      };
    case "secondary":
      return {
        style: "bg-haip-primary-400 text-haip-black-100",
        variantButton: "contained",
      };
    case "cancel":
      return {
        style: "bg-haip-red-500 text-haip-black-100",
        variantButton: "contained",
      };
    case "outline":
      return {
        style: "text-haip-primary-500",
        variantButton: "text",
      };
    default:
      return {
        style: "bg-haip-primary-500 text-haip-black-100",
        variantButton: "contained",
      };
  }
};

export const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  color,
  size,
  loading,
  ...props
}: IButtonProps) => (
  <MLoadingButton
    variant={buttonStyle(variant).variantButton}
    disabled={disabled}
    loading={loading}
    classes={{
      loading: "text-haip-black-100",
    }}
    className={`${disabled ? buttonStyle("disabled").style : buttonStyle(variant).style} button-large h-10 rounded-[10px] px-5 py-[10px] ${className}`}
    {...props}
  >
    {!loading && children}
  </MLoadingButton>
);

export default Button;
