import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const cadastrarUsuario = createAsyncThunk('usuario/cadastrarUsuario', async(state) => 
    (await axios.post('/usuarios', state)).data
);

export const usuarioSlice = createSlice({
    name: "usuario",
    initialState: {},
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(cadastrarUsuario.fulfilled, state => {
            state = {};
            toast.success('Usuário cadastrado!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return state;
        })
    }
});

export default usuarioSlice.reducer;