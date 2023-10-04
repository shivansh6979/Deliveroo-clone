import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasktet: (state, action) => {
      const index = state.items.findIndex((x) => x.id === action.payload.id);
      const copyData = [...state.items];
      if (index >= 0) {
        copyData.splice(index, 1);
      } else {
        alert(`Cannot rmeove item with product id : ${action.payload.id}`);
      }

      state.items = copyData;
    },
  },
});

// Helper functions
export const selectBasketItems = (state) => state.basket.items;

export const SelectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export const selectedBasketItemsById = (state, id) =>
  state.basket.items.filter((x) => x.id === id);

export default basketSlice.reducer;
export const { addToBasket, removeFromBasktet } = basketSlice.actions;
