import { useReducer } from "react";

const initialState = [];

const todosReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "reset":
            return [];
        default:
            return state;
    }
}

const useTodoReducer = () => useReducer(todosReducer, initialState);

export default useTodoReducer;