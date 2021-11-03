import { types } from '../types';

export const addToCart = (product) => {
   return {
      type: types.add,
      payload: { ...product, quantity: 1 },
   };
};

export const removeFromCart = (id) => {
   return {
      type: types.remove,
      payload: id,
   };
};

export const loadCartFromStorage = (products) => {
   return {
      type: types.load,
      payload: products,
   };
};

export const updateQuantity = (product, quantity) => {
   return {
      type: types.update,
      payload: { ...product, quantity },
   };
};
