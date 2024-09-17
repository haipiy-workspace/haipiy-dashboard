import MTextField from "@mui/material/TextField";
import MInputAdornment from "@mui/material/InputAdornment";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

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
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
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
        id={label}
        disabled={disabled}
        placeholder={placeholder}
        variant={variant}
        error={Boolean(errorMessage)}
        helperText={errorMessage || " "}
        inputRef={ref}
        slotProps={{
          input: {
            classes: {
              input: `${getInputClass(!!iconStart, !!iconEnd)} py-3 body-b1 ${className}`,
              notchedOutline: `rounded-xl ${containerClassName}`,
              root: `${getRootClass(!!iconStart, !!iconEnd)}`,
            },
            startAdornment: iconStart ? (
              <MInputAdornment position="start">{iconStart}</MInputAdornment>
            ) : null,
            endAdornment: iconEnd ? (
              <MInputAdornment position="end">{iconEnd}</MInputAdornment>
            ) : null,
          },
          formHelperText: {
            classes: {
              root: "m-0 h-4",
            },
          },
          htmlInput: {
            maxLength,
            ...props,
          },
        }}
      />
    </div>
  ),
);

export default TextInput;
