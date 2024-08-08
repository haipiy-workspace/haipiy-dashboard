import MTextField from "@mui/material/TextField";
import MInputAdornment from "@mui/material/InputAdornment";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import MuiIcons from "../MuiIcons";
import { MuiIconsProps } from "../MuiIcons/MuiIcons";

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
  iconStart?: MuiIconsProps["name"];
  iconEnd?: MuiIconsProps["name"];
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

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
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
      <span>{label}</span>
      <MTextField
        fullWidth
        type={showPassword ? type : "password"}
        InputProps={{
          classes: {
            input: `${getInputClass(!!iconStart, !!iconEnd)} py-3 ${className}`,
            notchedOutline: `rounded-xl ${containerClassName}`,
            root: `${getRootClass(!!iconStart, !!iconEnd)}`,
          },
          startAdornment: iconStart ? (
            <MInputAdornment position="start">
              <MuiIcons name={iconStart} />
            </MInputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <MInputAdornment position="end">
              <MuiIcons name={iconEnd} />
            </MInputAdornment>
          ) : null,
        }}
        FormHelperTextProps={{
          classes: {
            root: "ml-0 mt-2",
          },
        }}
        value={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        variant={variant}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        inputRef={ref}
        inputProps={{ maxLength: { maxLength }, ...props }}
      />
    </div>
  ),
);

export default TextInput;
