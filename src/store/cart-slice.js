import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;
            state.totalPrice += newItem.price * newItem.quantity;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    rating: newItem.rating,
                    brand: newItem.brand,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity
                })
            } else {
                existingItem.totalPrice += newItem.price * newItem.quantity;
                existingItem.quantity++;
            }
        },
        removeOneFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            state.totalQuantity--;
            state.totalPrice -= existingItem.price;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.totalPrice -= existingItem.price;
                existingItem.quantity--;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        }

    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;