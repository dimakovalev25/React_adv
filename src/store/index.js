import {configureStore, createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    quantity: 0,
    cartShow: false,
    statusMessage: null
    // itemsQuantity: 0,
    // goods: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                });
                state.quantity++;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                state.quantity++;
            }
        },

        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
                state.quantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                state.quantity--;
            }
        },

        setCartShow(state) {
            state.cartShow = !state.cartShow;
        },

        showStatusMessage (state, action) {
            state.statusMessage = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const cartActions = cartSlice.actions;
