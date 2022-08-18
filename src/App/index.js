//INDEX APP

import React from "react";
import { AppUI } from "./AppUI";
import{useLocalStorage} from "../Hooks/hooks.js"

function App(props) {

  const [todos, saveTodos]= useLocalStorage('TODOS_V1',[])//El estado de nuestra busqueda
  const [searchValue, setSearchValue] = React.useState(""); // [variable , funcion] = ("Estado inicial")
  
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  //Logica para filtrar la busqueda
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

      // Creamos la función en la que actualizaremos nuestro localStorage
  

    const completedTodo = (text)=>{//Funcion para marcar como completado el TODO
    const todoIndex = todos.findIndex(todo=>todo.text===text);//Busca el array con el mismo texto
    const newTodos = [...todos];// se copia el mismo array
    newTodos[todoIndex].completed=true;
    alert("Completaste la tarea "+ text);
    saveTodos(newTodos);
  };

  const deletedTodo = (text)=>{ //Funcion para borrar TODO's
    const todoIndex = todos.findIndex(todo=>todo.text===text);//Busca el array con el mismo texto
    const newTodos = [...todos];// se copia el mismo array
    newTodos.splice(todoIndex, 1);
    alert("Borraste la tarea "+ text);
    saveTodos(newTodos);
  };



  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completedTodo={completedTodo}
    deletedTodo={deletedTodo}
    //completed={completed}
  />
  );
}


export default App;