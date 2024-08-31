import Checkbox from "@mui/material/Checkbox";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ICheckboxProps extends ComponentPropsWithoutRef<"input"> {
  sizeCheckbox?: "small" | "medium" | "large";
  defaultChecked?: boolean;
  label?: string;
  children?: ReactNode;
  className?: string;
}

export const Checbox = ({
  sizeCheckbox = "medium",
  defaultChecked = false,
  label,
  children,
  className,
  ...props
}: ICheckboxProps) => (
    <div className="flex flex-row gap-2">
      <Checkbox
        className={className}
        defaultChecked={defaultChecked}
        size={sizeCheckbox}
        inputProps={{ ...props }}
      />
      {children}
    </div>
  );

export default Checbox;
