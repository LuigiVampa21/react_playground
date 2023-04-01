import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItem(state, actions) {
            const newItem = actions.payload.item;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                const quantity = 1;
                state.items.push({ id: newItem.id, price: newItem.price, quantity, totalPrice: newItem.price, name: newItem.title });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = +existingItem.totalPrice + +newItem.price;
            }
        },
        removeItem(state, actions) {
            const id = actions.payload;
            const existingItem = state.items.find(item => item.id === id);
            console.log(existingItem);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;