//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'acabar el curso por fin', completed: false},
  {text: 'hacer la del caballo', completed: true},
  {text: 'Que Fabio me ayude :(', completed: false}

] */


function App() {


  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}
export default App;
