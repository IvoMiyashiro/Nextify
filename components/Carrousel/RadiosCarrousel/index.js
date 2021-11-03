import React, { useEffect, useRef } from 'react';
import { ProductXLCard } from '../../Cards/ProductXLCard';

export const RadiosCarrousel = ({ products }) => {

   const carrouselRef = useRef(null);

   useEffect(() => {
      let counter = 1;

      let interval = setInterval(function () {
         if (document.getElementById('radio' + counter) === null) return;

         document.getElementById('radio' + counter).checked = true;
         counter++;
         if (counter > 4) {
            counter = 1;
         }
      }, 5000);

      carrouselRef.current.addEventListener('mouseenter', () => {
         clearInterval(interval);
      });

      carrouselRef.current.addEventListener('mouseleave', () => {
         interval = setInterval(() => {
            if (document.getElementById('radio' + counter) === null) return;

            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
               counter = 1;
            }
         }, 5000);
      });

   }, []);

   return (
      <>
         <div className="slider" ref={carrouselRef}>
            <div className="slides">
               <input type="radio" name="radio-btn" id="radio1" />
               <input type="radio" name="radio-btn" id="radio2" />
               <input type="radio" name="radio-btn" id="radio3" />
               <input type="radio" name="radio-btn" id="radio4" />

               {
                  products.slice(0, 4).map((product, i) => {
                     if (i === 0) {
                        return (
                           <div className="slide first" key={product.id}>
                              <ProductXLCard product={product} />
                           </div>
                        );
                     } else {
                        return (
                           <div className="slide" key={product.id}>
                              <ProductXLCard product={product} />
                           </div>
                        );
                     }
                  })
               }

               <div className="navigation-auto">
                  <div className="auto-btn1"></div>
                  <div className="auto-btn2"></div>
                  <div className="auto-btn3"></div>
                  <div className="auto-btn4"></div>
               </div>
            </div>

            <div className="navigation-manual">
               <label htmlFor="radio1" className="manual-btn"></label>
               <label htmlFor="radio2" className="manual-btn"></label>
               <label htmlFor="radio3" className="manual-btn"></label>
               <label htmlFor="radio4" className="manual-btn"></label>
            </div>

         </div>
         <style jsx>{`
            .slider {
               width: 565px;
               overflow: hidden;
               height: 390px;
            }

            .slides {
               width: 500%;
               height: 360px;
               display:flex;
               gap: 2em;
               padding-left: .35em;
            }

            .slides input{
               display: none;
            }

            .slide{
               width: 20%;
               transition: .5s ease;
            }

            .slide .product-container{
               width: 600px;
               height: 500px;
            }

            .navigation-manual{
               position: absolute;
               width: 600px;
               margin-top: -40px;
               display: flex;
               justify-content: flex-start;
               margin-left: 2.35em;
            }

            .manual-btn{
               border: 2px solid rgba(99, 102, 241);
               padding: 5px;
               border-radius: 10px;
               cursor: pointer;
               transition: .2s ease;
            }

            .manual-btn:not(:last-child){
               margin-right: 25px;
            }

            .manual-btn:hover{
               background: rgba(99, 102, 241);
            }

            #radio1:checked ~ .first{
               margin-left: 0;
            }

            #radio2:checked ~ .first{
               margin-left: -21%;
            }

            #radio3:checked ~ .first{
               margin-left: -42.2%;
            }

            #radio4:checked ~ .first{
               margin-left: -63.35%;
            }

            .navigation-auto{
               position: absolute;
               display: flex;
               width: 590px;
               justify-content: flex-start;
               margin-top: 320px;
               margin-left: 2em;
            }

            .navigation-auto div{
               border: 2px solid rgba(99, 102, 241);
               padding: 5px;
               border-radius: 10px;
               transition: .2s ease;
            }

            .navigation-auto div:not(:last-child){
               margin-right: 25px;
            }

            #radio1:checked ~ .navigation-auto .auto-btn1{
               background: rgba(99, 102, 241);
            }

            #radio2:checked ~ .navigation-auto .auto-btn2{
               background: rgba(99, 102, 241);
            }

            #radio3:checked ~ .navigation-auto .auto-btn3{
               background: rgba(99, 102, 241);
            }

            #radio4:checked ~ .navigation-auto .auto-btn4{
               background: rgba(99, 102, 241);
            }
         `}
         </style>
      </>
   );
};
