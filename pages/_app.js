// Import the global styles from '@/styles/globals.css'
import '@/styles/globals.css'

// Define the default export function App, which takes in Component and pageProps as parameters
export default function App({ Component, pageProps }) {
  // Return the Component with the spread operator to pass all the pageProps as props
  return <Component {...pageProps} />
}
