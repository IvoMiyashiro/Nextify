import { useEffect, useReducer } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import { CartReducer } from '../reducers/CartReducer';
import { loadCartFromStorage } from '../actions/cart';

import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
   NProgress.configure({ showSpinner: false });
   const [cartState, dispatch] = useReducer(CartReducer, []);

   Router.events.on('routeChangeStart', () => {
      NProgress.start();
   });

   Router.events.on('routeChangeComplete', () => {
      NProgress.done();
   });

   useEffect(() => {
      const cartStorage = JSON.parse(localStorage.getItem('cart') || []);
      dispatch(loadCartFromStorage(cartStorage));
   }, []);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartState));
   }, [cartState]);

   return (
      <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
               href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
               rel="stylesheet"
            />
         </Head>
         <CartContext.Provider
            value={{
               cartState,
               dispatch,
            }}
         >
            <Navbar />
            <Component {...pageProps} />
         </CartContext.Provider>
      </>
   );
}
