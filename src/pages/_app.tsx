import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// Create a client
const queryClient = new QueryClient()
import localFont from 'next/font/local'


const garnett = localFont({
  src: [
    {
      path: '../../public/fonts/Garnett-Black.woff',
      weight: '900'
    },
    {
      path: '../../public/fonts/Garnett-Bold.woff',
      weight: '700'
    },
    {
      path: '../../public/fonts/Garnett-Medium.woff',
      weight: '500'
    },
    {
      path: '../../public/fonts/Garnett-Regular.woff',
      weight: '400'
    },
    {
      path: '../../public/fonts/Garnett-Semibold.woff',
      weight: '600'
    }
  ],
  variable: '--font-garnett'
})




export default function App({ Component, pageProps }: AppProps) {
  return(
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <main  className={`${garnett.variable} font-sans`}>
      <Component {...pageProps}/>
      </main>
    </QueryClientProvider>

  )
  
  
}
