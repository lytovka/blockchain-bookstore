import '~/styles/globals.css';
import { Web3Provider } from '~/contexts/Web3Context';
import { customTheme } from '~/theme/mui-theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <Web3Provider>
        <Component {...pageProps} />)
      </Web3Provider>
    </ThemeProvider>
  );
}

export default MyApp;
