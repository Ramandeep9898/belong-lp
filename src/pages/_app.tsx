import "@/styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css'; 
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// Create a client
const queryClient = new QueryClient()


export default function App({ Component, pageProps }: AppProps) {
  return(
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
     <Component {...pageProps} />
    </QueryClientProvider>

  )
  
  
}
