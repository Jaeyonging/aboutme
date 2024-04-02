import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"


const user = createSlice({
    name: 'user',
    initialState: { email: '', isLogin: false, isMaster: false },
    reducers: {
        LoginSuccess(state) {
            state.isLogin = true
        },
        Logout(state) {
            state.isLogin = false
            state.isMaster = false
        },
        SetEmail(state, PayloadAction) {
            if (PayloadAction.payload == import.meta.env.VITE_MASTER_KEY) {
                console.log("master")
                state.isMaster = true
            }
            state.email = PayloadAction.payload
        }
    }
})

export const { LoginSuccess, Logout, SetEmail } = user.actions;

export default user