import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../Reducers/cartSlice";

export default configureStore({
    reducer: {
        cart: cartReducer
    }
});