import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../theme/mui-theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />)
    </ThemeProvider>
  );
}

export default MyApp;
