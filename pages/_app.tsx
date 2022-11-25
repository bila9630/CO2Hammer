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
      <MantineProvider theme={{
        // colors: {
        //   brand: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50',
        //     '#43A047', '#388E3C', '#2E7D32', '#1B5E20'],
        // },
        // primaryColor: 'brand',
      }} withGlobalStyles withNormalizeCSS>
        <DatabaseContextProvider>
          <Component {...pageProps} />
        </DatabaseContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
