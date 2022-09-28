import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewtodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewtodoValue(event.target.value);
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Tareas</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe tu nueva tarea"
            />
            <div className="TodoForm-buttonContainer">

                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">cancelar</button>
                <button type="submit" class="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export  { TodoForm }