import { useEffect, useReducer } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import { AppHead } from '../components/Heads/AppHead';
import { Navbar } from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import { CartReducer } from '../reducers/CartReducer';
import { loadCartFromStorage } from '../actions/cart';

import 'tailwindcss/tailwind.css'
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
         <AppHead />
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
