import { createSlice } from "@reduxjs/toolkit";

const ingredientesRecheioSlice = createSlice({
        name: "GerirEsfiha",
        initialState: {
                recheio: [],
        },
        reducers: {
                setRecheios: (state, { payload }) => {
                        console.log(payload);
                        let id = payload.id;
                        let ingredientes = payload.ingredientes;
                        state.recheio[id] = ingredientes;
                },
        },
});

export const { setRecheios } = ingredientesRecheioSlice.actions;

export const selectRecheios = (state) => state.ingredientesRecheio.recheio;
export const selectRecheio = (state, id) => state.ingredientesRecheio.recheio[id];
export const selectId = (state) => state.ingredientesRecheio.idSelecinado;

const reducer = ingredientesRecheioSlice.reducer;
export default reducer;
