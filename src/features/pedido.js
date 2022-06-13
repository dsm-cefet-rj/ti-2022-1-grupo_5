import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const realizarPedido = createAsyncThunk('esfihas/realizarPedido', async(state) => 
    (await axios.post('http://localhost:3004/pedido', state)).data
);

export const pedidoSlice = createSlice({
    name: "pedido",
    initialState: [],
    reducers: {
        adicionarItem: (state, action) => {
            const indexItem = state.map(item => item.id).indexOf(action.payload.id);
            const payLoad = {...action.payload};
            if (indexItem === -1) {
                payLoad.qtd = 1;
                state.push(payLoad);
            } else {
                state[indexItem].qtd++;
            }
            return state;
        },
        excluirItem: (state, action) => {
            state.splice(action.payload, 1);
            return state;
        },
        aumentarQtd: (state, action) => {
            state[action.payload].qtd++;
            return state;
        },
        dimunuirQtd: (state, action) => {
            state[action.payload].qtd--;
            if(state[action.payload].qtd === 0) state.splice(action.payload, 1);
            return state;
        },
        cancelarPedido: (state, action) => {
            state = [];
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(realizarPedido.fulfilled, state => {
            return state;
        })
    }
});

export const { adicionarItem, excluirItem, aumentarQtd, dimunuirQtd, cancelarPedido} = pedidoSlice.actions;
export default pedidoSlice.reducer;