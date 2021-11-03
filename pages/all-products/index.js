import { client } from '../../utils/shopify';
import { Footer } from '../../components/Footer';
import { HeadPages } from '../../components/Heads/HeadPages';
import { ProductsDisplay } from '../../components/view/ProductsDisplay';

export default function AllProducts({ products }) {

   return (
      <>
         <HeadPages
            title={'Our Products'}
            description={'Our Products'}
         />
         <ProductsDisplay
            products={products}
         />
         <Footer alternative={true} />
      </>
   );
}

export const getServerSideProps = async () => {

   const products = await client.product.fetchAll();

   return {
      props: { products: JSON.parse(JSON.stringify(products)) }
   };

};