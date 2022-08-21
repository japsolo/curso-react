import { useState, useContext } from "react";

import { ToDoContext } from "./TodoContext";

import FormStyles from "./Form.module.css"

const Form = () => {
    const { todoHandlers } = useContext(ToDoContext);
    const [inputText, setInputText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        todoHandlers.addTaskHandler(inputText);
        e.currentTarget.reset();
    }

    return (
        <form onSubmit={e => submitHandler(e)} className={FormStyles.outlineBox}>
            <input
                type="text"
                onChange={e => setInputText(e.currentTarget.value)}
                className={`
                    ${FormStyles.baseInput}
                    ${inputText === "" ? FormStyles.emptyInput : FormStyles.fillInput}
                `}
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default Form;