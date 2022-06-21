/*import { createSlice } from "@reduxjs/toolkit";

const geirIngredientesSlice = createSlice({
    name: "geirIngredientes",
    initialState: {
        ingredientes: [],
        idSelecinado: 0,
    },
    reducers: {
        setIngredientes: (state, { payload }) => {
            state.ingredientes = payload;
        },
        setIdSelecinado: (state, { payload }) => {
            state.idSelecinado = payload.id;
        },
    },
});

export const { setIngredientes, setIdSelecinado } =
    geirIngredientesSlice.actions;

// para ser usado com o UseSelector
export const selectIngredientes = (state) =>
    state.geirIngredientes.ingredientes;
export const selectId = (state) => state.gerirIngredientes.idSelecinado;
const reducer = geirIngredientesSlice.reducer;
export default reducer;*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getIngredientes = createAsyncThunk('ingredientes/getIngredientes', async () =>
    //(await axios.get('http://localhost:3004/ingredientes')).data
    (await axios.get('/ingredientes')).data
);

export const ingredientesSlice = createSlice({
    name: "ingredient",
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
