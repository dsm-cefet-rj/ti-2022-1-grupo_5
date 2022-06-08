import { createSlice } from "@reduxjs/toolkit";

const ingredientesRecheioSlice = createSlice({
        name: "GerirEsfiha",
        initialState: {
                recheio: [[]],
        },
        reducers: {
                setRecheios: (state, { payload }) => {
                        console.log(payload);
                        let id = payload.id;
                        let ingredientes = payload.ingredientes;
                        state.recheio[id - 1] = ingredientes;
                },
                getRecheios: (state) => {
                        return state.recheio;
                },
        },
});

export const { setRecheios, getRecheios } = ingredientesRecheioSlice.actions;

export const selectRecheios = (state) => state.GerirEsfiha.recheio;

const reducer = ingredientesRecheioSlice.reducer;
export default reducer;
