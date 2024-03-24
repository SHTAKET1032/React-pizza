import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            console.log("Это action С ГЛАВНОЙ СТРАНИЦЫ", action)
            console.log("Это actionPayload С ГЛАВНОЙ СТРАНИЦЫ", action.payload)
            console.log("Это findItem С ГЛАВНОЙ СТРАНИЦЫ", findItem)
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0)
        },
        plusCountItem(state, action) {
            console.log("Это action ИЗ КОРЗИНЫ", action)
            console.log("Это actionPayload ИЗ КОРЗИНЫ", action.payload)
            const findItem = state.items.find((obj) => obj.id === action.payload);
            console.log("Это findItem ИЗ КОРЗИНЫ", findItem)
            console.log("Это state ИЗ КОРЗИНЫ", state)

            if (findItem) {
                findItem.count++;
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0)
        },
        minusCountItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0)
        },
        clearCart(state) {
            state.totalPrice = 0;
            state.items = []
        },
        removeItem(state, action){
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0)
        }
    }
})

export const {
    addItem,
    plusCountItem,
    minusCountItem,
    clearCart,
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer;
