import {configureStore, createSlice} from "@reduxjs/toolkit";


const initialState = {
    goods: [],
    quantity: 0,
    cartShow: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct(state, action) {
            state.goods.push(action.payload);
            state.quantity++;
        },
        setCartShow(state) {
            state.cartShow = !state.cartShow;
        },
        addProductCorrect(state, action){

        }
    }
})

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const cartActions = cartSlice.actions;
