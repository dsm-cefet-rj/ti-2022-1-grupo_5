import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getIngredientes = createAsyncThunk('ingredientes/getIngredientes', async () =>
    (await axios.get('/ingredientes')).data
    //(await axios.get('http://localhost:3004/ingredientes')).data
);

export const ingredientesSlice = createSlice({
    name: "ingrediente",
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getIngredientes.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
    }

});

//export const selectIngredientes = (state) => state.ingredientesSlice.ingredientes;

export default ingredientesSlice.reducer;
