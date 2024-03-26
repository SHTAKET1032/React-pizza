import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";


export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
        const {category, sortBy, order, valueForSearch} = params;
        const {data} = await axios.get(
            `https://65e9a9c3c9bf92ae3d39d0d6.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}&search=${valueForSearch}`
        )
        return data;
    },
)

const initialState = {
    data: [],
    status: "loading",
}


export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.data = [];
                state.status = "loading";
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "success";
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.data = [];
                state.status = "error";
            })
    }
})

export const {setData} = pizzaSlice.actions

export default pizzaSlice.reducer
