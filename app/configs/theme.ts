"use client";

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    allVariants: {
      textTransform: "none",
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: null,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: null,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: null,
      },
    },
    MuiModal: {
      defaultProps: {
        container: null,
      },
    },
  },
});

export default theme;
