import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    products: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.totalCount += 1;
            state.products = [...state.products, action.payload]
        },
        removeProductFromCart: (state, action) => {
            const productID = action.payload;
            state.totalCount -= 1;
            state.products = state.products.filter(product => product.id !== productID);
        }
    }
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;