import { ProductMainCard } from '../../Cards/ProductMainCard';

export const ProductsSection = ({
   products,
   brandFilter,
   priceFilter,
   outOfStockFilter,
   productDisplay
}) => {
   return (
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
         {
            products.length > 0
               && brandFilter !== '' && brandFilter !== 'All Brands'
               ? products.map((product) => { // This happends if brands filter setted
                  if (product.vendor === brandFilter) {
                     if (priceFilter.submited && priceFilter.ok) { // This happends if brands filter setted with price filter
                        if (Number(priceFilter.min) < Number(product.variants[0].price) && Number(product.variants[0].price) < Number(priceFilter.max)) {
                           if (outOfStockFilter) {
                              if (product.availableForSale) { // This happends if brands and stock filters are setted
                                 return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                              }
                           } else {
                              return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                           }
                        }
                     } else {
                        if (outOfStockFilter) {
                           if (product.availableForSale) { // This happends if brands and stock filters are setted
                              return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                           }
                        } else { // This happends if only brands filter setted and price filter gets error.
                           return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                        }
                     }
                  }
               })
               : priceFilter.submited && priceFilter.ok // This happends if only price filter setted
                  ? outOfStockFilter
                     ? priceFilter.filteredItems.map(product => { // This happends if price filter setted with stock filter
                        if (product.availableForSale) {
                           return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                        }
                     })
                     : priceFilter.filteredItems.map(product => { // This happends if price filter setted
                        return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                     })
                  : outOfStockFilter
                     ? products.map(product => { // This happends if only stock filter setted
                        if (product.availableForSale === true) {
                           return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                        }
                     })
                     : products.map(product => { // This happends if no filters setted
                        return <ProductMainCard product={product} key={product.id} productDisplay={productDisplay} />;
                     })
         }
      </div>
   );
};
