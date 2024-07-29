"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const rootElement = document.getElementById("__next");
    theme.components!.MuiPopover!.defaultProps!.container = rootElement;
    theme.components!.MuiPopper!.defaultProps!.container = rootElement;
    theme.components!.MuiDialog!.defaultProps!.container = rootElement;
    theme.components!.MuiModal!.defaultProps!.container = rootElement;
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
