import { useContext } from "react";

import Button from "../Button";

import { ToDoContext } from "./TodoContext";

import ToDoListStyles from "./ToDoList.module.css";

const ToDoList = () => {
    const { todoListState } = useContext(ToDoContext);
    return (
        <div className={ToDoListStyles.outlineBox}>
            <h4>Listado de tareas</h4>
            <ol>
                {todoListState.map((todo) => {
                    return <li key={todo.date}>{`${todo.name} - ${todo.date}`}</li>
                })}
            </ol>
            <Button text="Borrar tareas" />
        </div>
    )
}

export default ToDoList;