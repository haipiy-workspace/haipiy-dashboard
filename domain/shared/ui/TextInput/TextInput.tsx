import MTextField from "@mui/material/TextField";
import MInputAdornment from "@mui/material/InputAdornment";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Icon, IIconProps } from "../Icon";

interface ITextInputProps extends ComponentPropsWithoutRef<"input"> {
  variant?: "filled" | "standard" | "outlined";
  type?: "text" | "number";
  className?: string;
  containerClassName?: string;
  maxLength?: number;
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  showPassword?: boolean;
  iconStart?: IIconProps["name"];
  iconEnd?: IIconProps["name"];
}

const getRootClass = (startIcon: Boolean, endIcon: Boolean): string => {
  if (startIcon) return "pl-4";
  if (endIcon) return "pr-4";
  return "pr-0";
};

const getInputClass = (startIcon: Boolean, endIcon: Boolean): string => {
  if (startIcon) return "pr-4";
  if (endIcon) return "pr-0 pl-4";
  return "px-4";
};

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  (
    {
      variant = "outlined",
      type = "text",
      className,
      containerClassName,
      maxLength,
      disabled = false,
      errorMessage,
      label = "label input",
      showPassword = true,
      placeholder,
      value,
      required,
      iconStart,
      iconEnd,
      onChange,
      onKeyDown,
      ...props
    },
    ref,
  ) => (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={label} className="body-b1">
        {label}
        {required && <span className="ml-1 text-haip-red-800">*</span>}
      </label>
      <MTextField
        fullWidth
        type={showPassword ? type : "password"}
        InputProps={{
          classes: {
            input: `${getInputClass(!!iconStart, !!iconEnd)} py-3 body-b1 ${className}`,
            notchedOutline: `rounded-xl ${containerClassName}`,
            root: `${getRootClass(!!iconStart, !!iconEnd)}`,
          },
          startAdornment: iconStart ? (
            <MInputAdornment position="start">
              <Icon name={iconStart} />
            </MInputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <MInputAdornment position="end">
              <Icon name={iconEnd} />
            </MInputAdornment>
          ) : null,
        }}
        FormHelperTextProps={{
          classes: {
            root: "m-0 h-4",
          },
        }}
        id={label}
        value={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        variant={variant}
        error={Boolean(errorMessage)}
        helperText={errorMessage || " "}
        inputRef={ref}
        inputProps={{ maxLength: { maxLength }, ...props }}
      />
    </div>
  ),
);

export default TextInput;
