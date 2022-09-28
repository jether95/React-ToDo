import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    //estas etiquetas son los llamados componentes
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Paila no sirve pere...</p>}
        {loading && <p>Estamos cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>Bueno cree su primer todo</p>}

        {searchedTodos.map(i => (
          <TodoItem
            key={i.text}
            text={i.text}
            completed={i.completed}
            onComplete={() => completeTodo(i.text)}
            onDelete={() => deleteTodo(i.text)} />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal = {setOpenModal}
      />


    </React.Fragment>

  );
}


export { AppUI };