import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addItem(state, actions) {
            const newItem = actions.payload.item;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                const quantity = 1;
                state.items.push({ id: newItem.id, price: newItem.price, quantity, totalPrice: newItem.price, name: newItem.title });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = +existingItem.totalPrice + +newItem.price;
            }
        },
        removeItem(state, actions) {
            // const newItem = actions.payload.item;
            const id = actions.payload;
            // id: item.id, title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price
            const existingItem = state.items.find(item => item.id === id);
            console.log(existingItem);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                // existingItem.totalPrice = existingItem.toalPrice - existingItem.price;
              }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;