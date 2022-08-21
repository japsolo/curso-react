import { useContext } from "react";

import { ToDoContext } from "./ToDoList/TodoContext";

const Button = ({ text }) => {
    const { todoHandlers } = useContext(ToDoContext);
    return (
        <button onClick={todoHandlers.resetAllTaskHandler}>{text}</button>
    )
}

export default Button;