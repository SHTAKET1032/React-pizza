import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    valueForSearch: "",
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
        setValueForSearch(state, action) {
            state.valueForSearch = action.payload;
        },
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSortingType(state, action) {
            state.sortingType = action.payload;
        }
    },
})

export const {
    setCategoryId,
    setSortingType,
    setValueForSearch
} = filterSlice.actions

export default filterSlice.reducer
