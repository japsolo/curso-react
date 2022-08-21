import { useState, useContext } from "react";

import { ToDoContext } from "./TodoContext";

const Form = () => {
    const { todoHandlers } = useContext(ToDoContext);
    const [inputText, setInputText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        todoHandlers.addTaskHandler(inputText);
        e.currentTarget.reset();
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
            <input type="text" onChange={e => setInputText(e.currentTarget.value)} />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default Form;