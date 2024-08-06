import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    coupons: [],
    totals: {
      subTotal: 0,
      subTotalTax: 0,
      total: 0,
      totalTax: 0,
    },
    removedItems: [],
    itemsCount: 0,
    taxes: [],
  },
  reducer: {
    addItem: (state, action) => {
      const itemToUpdate = action.payload;
      const itemAlreadyInCart = state.items.find((item) => item.id === itemToUpdate.id);

      if (itemAlreadyInCart) {
        console.log('Product is already in the cart');
        // Update the quantity of the existing item
        itemAlreadyInCart.quantity.value += itemToUpdate.quantity.value;
      } else {
        console.log('Product is not in the cart');
        // Add the new item to the cart
        state.items.push(itemToUpdate);
      }

      // Update the itemsCount
      state.itemsCount = state.items.reduce((count, item) => count + item.quantity.value, 0);
    },
  },
});

// Export the actions to be used in components
export const { addItem } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
