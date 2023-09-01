import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    origin: 1,
    destination: 10,
    cartList: []

}
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setCartList: (state, action) => {
            state.cartList = [...state.cartList, action.payload]
        },
    }
})

export const { setOrigin, setDestination, setCartList } = navSlice.actions;

// Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectCartList = (state) => state.nav.cartList;

export default navSlice.reducer;