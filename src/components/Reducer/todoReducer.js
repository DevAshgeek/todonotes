import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        resetTasks: (state) => {
            state.tasks = [];
        }
    }
})


export const { setTasks, addTask, deleteTask, resetTasks } = todoSlice.actions;
export default todoSlice.reducer;
