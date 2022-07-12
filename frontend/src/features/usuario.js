import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import notificacao from "./utils/notificacao";

export const cadastrarUsuario = createAsyncThunk('usuario/cadastrarUsuario', async(state) => 
    (await axios.post('/usuarios/cadastro', state)).data
);

export const logarUsuario = createAsyncThunk('usuario/logarUsuario', async(state) => {
    try {
        return (await axios.post('usuarios/login', state)).data;
    } catch (error) {
        notificacao(false, error.response.data.msg);
    }
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
            notificacao(true, 'Usuário cadastrado');
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