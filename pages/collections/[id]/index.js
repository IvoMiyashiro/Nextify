import { client } from '../../../utils/shopify';

import { HeadPages } from '../../../components/Heads/HeadPages';
import { Footer } from '../../../components/Footer';
import { ProductsDisplay } from '../../../components/view/ProductsDisplay';

export default function DynamicCollection({ collection }) {

   return (
      <>
         <HeadPages
            title={collection.title}
            description={collection.description}
         />
         <ProductsDisplay
            products={collection.products}
            collection={collection}
         />
         <Footer alternative={true} />
      </>
   );
}

export const getServerSideProps = async ({ params }) => {
   const { id } = params;

   const collections = await client.collection.fetchWithProducts(id, {
      productsFirst: 10,
   });

   return {
      props: { collection: JSON.parse(JSON.stringify(collections)) },
   };
};

// Probar en producción.

// export const getServerSideProps = async ({ params }) => {
//    const { id } = params;

//    const collections = await client.collection.fetchAllWithProducts();

//    const collection = collections.filter((collection) => {
//       return collection.handle === id;
//    });

//    return {
//       props: { collection: JSON.parse(JSON.stringify(collection)) },
//    };
// };

// <div className="h-screen flex flex-wrap gap-6 items-center justify-center">
//    {collection[0].products.map((product) => {
//       return <ProductMainCard product={product} key={product.id} />;
//    })}
// </div>
