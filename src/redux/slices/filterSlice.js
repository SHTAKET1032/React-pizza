import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sortingType: {
        name: "популярности (DESC)",
        sortProperty: "rating"
    }
}


export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload;
        },
        setSortingType(state, action){
            state.sortingType = action.payload;
        }
    },
})

export const { setCategoryId, setSortingType } = filterSlice.actions

export default filterSlice.reducer
