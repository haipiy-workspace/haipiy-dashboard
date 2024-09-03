import Checkbox from "@mui/material/Checkbox";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

interface ICheckboxProps extends ComponentPropsWithoutRef<"input"> {
  sizeCheckbox?: "small" | "medium" | "large";
  defaultChecked?: boolean;
  label?: string;
  children?: ReactNode;
  className?: string;
  checked?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (
    { sizeCheckbox = "medium", label, children, className, checked, value, onChange, ...props },
    ref,
  ) => (
    <div className="flex flex-row gap-2">
      <Checkbox
        className={className}
        size={sizeCheckbox}
        checked={checked}
        value={value}
        onChange={onChange}
        inputRef={ref}
        inputProps={{ ...props }}
      />
      {children}
    </div>
  ),
);

export default Checbox;
