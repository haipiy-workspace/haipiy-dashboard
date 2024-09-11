import MCheckbox from "@mui/material/Checkbox";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

interface ICheckboxProps extends ComponentPropsWithoutRef<"input"> {
  sizeCheckbox?: "small" | "medium" | "large";
  defaultChecked?: boolean;
  label?: ReactNode | string;
  className?: string;
  checked?: boolean;
  value?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ sizeCheckbox = "medium", label, className, checked, value, onChange, id, ...props }, ref) => (
    <label className="flex flex-row items-center gap-2" htmlFor={id}>
        <MCheckbox
          id={id}
          className={className}
          size={sizeCheckbox}
          checked={checked}
          value={value}
          onChange={onChange}
          inputRef={ref}
          inputProps={{ ...props }}
        />
        {label}
      </label>
  ),
);

export default Checkbox;
