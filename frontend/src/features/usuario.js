import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import notificacao from "./utils/notificacao";

export const cadastrarUsuario = createAsyncThunk('usuario/cadastrarUsuario', async(state) => {
    const qlq = (await axios.post('/usuarios/cadastro', state)).data;
    notificacao(true, "Usuário cadastrado!");
    setTimeout(() => window.location.pathname = '/login', 3000);
    return qlq;
});

export const logarUsuario = createAsyncThunk('usuario/logarUsuario', async(state) => {
    return (await axios.post('usuarios/login', state)).data;
});


export const usuarioSlice = createSlice({
    name: "usuario",
    initialState: {},
    reducers: {
        deslogarUsuario: (state, action) => {
            localStorage.removeItem('usuario');
            localStorage.removeItem('token');
            window.location.pathname = '/';
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(cadastrarUsuario.fulfilled, state => {
            state = {};
            return state;
        })
        .addCase(logarUsuario.fulfilled, (state, action) => {
            if(action.payload) {
                localStorage.setItem('usuario', JSON.stringify(action.payload.user));
                localStorage.setItem('token', JSON.stringify(action.payload.token));
                window.location.pathname = '/';
            }
            return state;
        })
    }
});

export const { deslogarUsuario} = usuarioSlice.actions;

export default usuarioSlice.reducer;