import { createSlice } from '@reduxjs/toolkit'


const savedUser = localStorage.getItem('user');
const initialState = {
    user: savedUser ? JSON.parse(savedUser) : null,
};


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;

            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    }

})

export const { setUser, clearUser } = loginSlice.actions;
export default loginSlice.reducer;