import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Script from 'next/script';
// import { useEffect, useState } from 'react';

        {/* <script async="" dangerouslySetInnerHTML={Set2()}></script> */}
        {/* <script src="theme.js"></script> */}
{/* <script async="" dangerouslySetInnerHTML={Set()}></script> */}
        // <Script strategy="beforeInteractive" src="theme.js" />
function Set() { 
  return {
    __html: "let body=document.querySelector('body');body.setAttribute('data-theme','dark')"
  };
}
function Set2() { 
  return {
    __html: "document.documentElement.classList.add('dark')"
  };
}

function getInitialColorMode() {
  const persistedColorPreference =
    window.localStorage.getItem('color-mode');
  const hasPersistedPreference =
    typeof persistedColorPreference === 'string';

  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  // If they haven't been explicit, let's check the media query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [colorMode, setColorMode] = useState('light');
  // useEffect(() => {
  //   setColorMode(getInitialColorMode());
  // }, []);
  // console.log("QAZ", children);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="theme.js"></script>
      </head>
      <body datatheme="dark" className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
