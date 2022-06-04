import { createSlice } from "@reduxjs/toolkit";

const criarEsfiha = createSlice({
    name: "criarEsfiha",
    initialState: {
        recheio:[],
    },
    reducers: {
        setQuantidadeDeQueijo: (state, { payload }) => {
            state.QuantidadeDeQueijo = payload;
        },
        setQuantidadeDeMolho: (state, { payload }) => {
            state.QuantidadeDeMolho = payload;
        },
        setRecheios: (state, { payload }) => {
            state.recheio = payload;
        },
    }
});

export const { setRecheios } = criarEsfiha.actions;

export const selectCriarEsfiha = (state) => state.criarEsfiha;

const reducer = criarEsfiha.reducer;
export default reducer;