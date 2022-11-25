import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import DatabaseContextProvider from '../context/DatabaseContext';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <DatabaseContextProvider>
          <Component {...pageProps} />
        </DatabaseContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
