import type { AppProps } from 'next/app'

import '../styles/index.css'

import { light } from 'src/theme/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={light}>
      <Component {...pageProps} />
    </div>
  )
}
