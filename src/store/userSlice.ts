import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"


const user = createSlice({
    name: 'user',
    initialState: { email: 'kim', isLogin: false },
    reducers: {
        LoginSuccess(state) {
            state.isLogin = true
        },
        Logout(state) {
            state.isLogin = false
        }
    }
})

export const { LoginSuccess, Logout } = user.actions;

export default user