import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        toastOptions={
          {
            style: {
              background: "#000",
              color: "#fff",
            },
          }
        }
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
