import { purple, amber } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: amber[600],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
  },
});
