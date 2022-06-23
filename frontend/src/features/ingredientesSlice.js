import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getIngredientes = createAsyncThunk('ingredientes/getIngredientes', async () =>
    (await axios.get('/ingredientes')).data
);

export const ingredientesSlice = createSlice({
    name: "ingredientes",
    initialState: { salgado: [], doce: [], neutro: [] },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getIngredientes.fulfilled, (state, action) => {
            const ingredientes = action.payload;
            state.salgado = ingredientes.filter((ingrediente) => ingrediente.tipo === 'Salgado');
            state.doce = ingredientes.filter((ingrediente) => ingrediente.tipo === 'Doce');
            state.neutro = ingredientes.filter((ingrediente) => ingrediente.tipo === 'Neutro');
            return state;
        })
    }

});

export default ingredientesSlice.reducer;
