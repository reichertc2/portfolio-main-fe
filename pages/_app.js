import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../DevPortfolio/default/Layout'

config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )

}

export default MyApp
