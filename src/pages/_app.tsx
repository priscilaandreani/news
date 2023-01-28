import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/src/components/Header';
import '../styles/global.scss';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
