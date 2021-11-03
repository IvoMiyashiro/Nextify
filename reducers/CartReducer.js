import { types } from '../types';

export const CartReducer = (state = [], action) => {
   switch (action.type) {
      case types.add:
         return [...state, action.payload];

      case types.remove:
         return state.filter((item) => item.id !== action.payload);

      case types.load:
         return action.payload;

      case types.update:
         return state.map((item) => {
            return item.id === action.payload.id ? action.payload : item;
         });

      default:
         return state;
   }
};
