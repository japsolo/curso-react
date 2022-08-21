import { createContext } from "react";

import useTodoReducer from "./TodoReducer";

export const ToDoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todoListState, dispatch] = useTodoReducer();

    const todoHandlers = {
        addTaskHandler: (text) => {
            dispatch({
                type: "add",
                payload: {
                    name: text,
                    date: new Date().toLocaleString(),
                }
            })
        },
        resetAllTaskHandler: () => dispatch({ type: "reset" }),
    }


    return (
        <ToDoContext.Provider value={{
            todoListState, todoHandlers
        }}>
            {children}
        </ToDoContext.Provider>
    )
}