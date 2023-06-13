// Import necessary components from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document';

// Define a default export function named 'Document'
export default function Document() {
  return (
    // Render the HTML structure with 'en' as the language attribute
    <Html lang="en">
      {/* Include the head section */}
      <Head />
      {/* Start the body section */}
      <body>
        {/* Render the main content */}
        <Main />
        {/* Include the Next.js script */}
        <NextScript />
      </body>
    </Html>
  );
}
