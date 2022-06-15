import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const realizarPedido = createAsyncThunk('esfihas/realizarPedido', async(state) => 
    (await axios.post('http://localhost:3004/pedidos', state)).data
);

export const pedidoSlice = createSlice({
    name: "pedido",
    initialState: { itens: [], info: {} },
    reducers: {
        adicionarItem: (state, action) => {
            const indexItem = state.itens.map(item => item.id).indexOf(action.payload.id);
            const payLoad = {...action.payload};
            if (indexItem === -1) {
                payLoad.qtd = 1;
                state.itens.push(payLoad);
            } else {
                state.itens[indexItem].qtd++;
            }
            return state;
        },
        excluirItem: (state, action) => {
            state.itens.splice(action.payload, 1);
            return state;
        },
        aumentarQtd: (state, action) => {
            state.itens[action.payload].qtd++;
            return state;
        },
        dimunuirQtd: (state, action) => {
            state.itens[action.payload].qtd--;
            if(state.itens[action.payload].qtd === 0) state.itens.splice(action.payload, 1);
            return state;
        },
        cancelarPedido: (state, action) => {
            state.itens = [];
            return state;
        },
        adicionarInfo: (state, action) => {
            state.info = action.payload;
            state.info.frete = 5;
            state.info.total = state.itens.map(item => item.qtd * item.valor ).reduce((valorAnterior, valorAtual) => 
                                    valorAnterior + valorAtual 
                                ,state.info.frete);
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(realizarPedido.fulfilled, state => {
            return state;
        })
    }
});

export const { adicionarItem, excluirItem, aumentarQtd, dimunuirQtd, cancelarPedido, adicionarInfo} = pedidoSlice.actions;
export default pedidoSlice.reducer;