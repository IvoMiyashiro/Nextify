import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { client } from '../../utils/shopify';

export const MobileMenu = ({ isMenuOpen, setMenuOpen }) => {
   const menuRef = useRef(null);
   const [isOpenSubMenu, setSubMenuOpen] = useState(false);
   const [collectionArr, setCollectionsArr] = useState([]);

   useEffect(() => {
      client.collection.fetchAllWithProducts().then((collections) => {
         setCollectionsArr(collections);
      });
   }, []);

   const handleOpenMenu = () => {
      setSubMenuOpen((prev) => !prev);
   };

   const handleCloseMenu = (e) => {
      if (e.target == menuRef.current) {
         setMenuOpen(false);
      }
   };

   const handleChangeRoute = () => {
      setMenuOpen(false);
   };

   return (
      <div className="relative top-0 z-50">
         <section
            className={`fixed z-20 top-0 w-full h-screen bg-black bg-opacity-50 overflow-hidden ${isMenuOpen ? 'w-full' : 'w-0'}`}
            ref={menuRef}
            onClick={handleCloseMenu}
         ></section>
         <section
            className={`fixed z-20 top-0 bg-white h-screen overflow-hidden mobile-menu transition-width duration-200 ease-in-out ${isMenuOpen ? 'w-3/4' : 'w-0'}`}
         >
            <section className="p-2 text-center relative m-2">
               <Link href="/">
                  <a className="w-full">
                     <h1 className="font-extrabold font-title text-3xl">Nextify</h1>
                  </a>
               </Link>
            </section>
            <section>
               <ul className="flex flex-col">
                  <Link
                     href="/all-products"
                  >
                     <li
                        className="bg-gray-200 p-2 font-bold text-xl m-2 rounded-lg"
                        onClick={handleChangeRoute}
                     >
                        <a className="w-full">
                           All products
                        </a>
                     </li>
                  </Link>
                  <li
                     className="border-b-2 p-2 font-bold text-normal text-xl bg-gray-200 m-2 rounded-lg"
                     onClick={handleOpenMenu}
                  >
                     <div className="flex items-center justify-between">
                        Categories
                        <BiChevronDown className="h-7 w-7 mr-2" />
                     </div>
                     <div
                        className={`m-0 p-0 overflow-hidden transition-height duration-150 ease-in-out ${isOpenSubMenu ? 'h-48' : 'h-0'}`}
                     >
                        <ul className="flex flex-col text-left px-4 py-2 rounded-lg">
                           {collectionArr.map((collection) => {
                              if (collection.image !== null) {
                                 return (
                                    <Link href={`/collections/${collection.id}`} key={collection.id}>
                                       <li
                                          className="text-md font-normal hover:text-purple-500 py-2"
                                       >
                                          {collection.title}
                                       </li>
                                    </Link>
                                 );
                              }

                           })}
                        </ul>
                     </div>
                  </li>
                  <Link href="/about">
                     <li
                        className="bg-gray-200 p-2 font-bold text-xl m-2 rounded-lg"
                        onClick={handleChangeRoute}
                     >
                        <a>
                           About
                        </a>
                     </li>
                  </Link>
                  <Link href="/contact">
                     <li
                        className="bg-gray-200 p-2 font-bold text-xl m-2 rounded-lg"
                        onClick={handleChangeRoute}
                     >
                        <a>
                           Contact
                        </a>
                     </li>
                  </Link>
               </ul>
            </section>
         </section>
      </div>
   );
};
