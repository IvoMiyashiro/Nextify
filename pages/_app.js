import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import { Navbar } from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import { CartReducer } from '../reducers/CartReducer';
import { loadCartFromStorage } from '../actions/cart';

import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
   NProgress.configure({ showSpinner: false });
   const router = useRouter();
   const [cartState, dispatch] = useReducer(CartReducer, []);

   useEffect(() => {
      router.events.on('routeChangeStart', () => {
         NProgress.start();
      });
      return () => {
         router.events.off('routeChangeStart', () => {
            NProgress.start();
         });
      };
   }, [router]);

   useEffect(() => {
      router.events.on('routeChangeComplete', () => {
         NProgress.done();
      });
      return () => {
         router.events.off('routeChangeStart', () => {
            NProgress.start();
         });
      };
   }, [router]);



   useEffect(() => {
      const cartStorage = JSON.parse(localStorage.getItem('cart') || []);
      dispatch(loadCartFromStorage(cartStorage));
   }, []);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartState));
   }, [cartState]);

   return (
      <>
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
