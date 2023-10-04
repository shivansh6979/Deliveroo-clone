import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    lat: null,
    dishes: null,
    short_description: null,
    long: null,
    genre: null,
    address: null,
    rating: null,
    title: null,
  },
};
const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
export const { setRestaurant } = restaurantSlice.actions;
