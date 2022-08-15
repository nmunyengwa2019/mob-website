import 'focus-visible'
import '@/styles/tailwind.css'
import { Header } from '@/components/Header'

export default function App({ Component, pageProps }) {
  return <>
  {/* <Header/> */}
  <Component {...pageProps} />
  </>
}
