import { Modal } from '../../Modal';
import { FiltersCard } from '../FiltersCard';


export const MobileFilterCard = ({
   products = null,
   setBrandFilter,
   setPriceFilter,
   setProductDisplay,
   setOutOfStockFilter,
   setMobileFilter,
   outOfStockFilter,
   productDisplay, }) => {
   return (
      <Modal setMobileFilter={setMobileFilter}>
         <FiltersCard
            isMobile={true}
            products={products}
            setBrandFilter={setBrandFilter}
            setPriceFilter={setPriceFilter}
            setProductDisplay={setProductDisplay}
            setOutOfStockFilter={setOutOfStockFilter}
            outOfStockFilter={outOfStockFilter}
            productDisplay={productDisplay}
         />
      </Modal>
   );
};
