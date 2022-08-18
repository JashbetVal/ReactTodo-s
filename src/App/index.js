//INDEX APP

import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos=[
  {text: 'Cortar cebolla', completed: ''},//No se envia nada en completed para no tachar la tarea
  {text: 'Bailar bachata', completed: 'true'},
  {text: 'Llorar con la llorona ', completed: 'true'},
  {text: 'Correr' , completed: ''},
  {text: 'BAILAR' , completed: ''},
];


function App(props) {
  const [todos, setTodos]= React.useState(defaultTodos);//El estado de nuestra busqueda
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

    const completedTodo = (text)=>{//Funcion para marcar como completado el TODO
    const todoIndex = todos.findIndex(todo=>todo.text===text);//Busca el array con el mismo texto
    const newTodos = [...todos];// se copia el mismo array
    newTodos[todoIndex].completed=true;
    alert("Completaste la tarea "+ text);
    setTodos(newTodos);//Actualiza el estado para vlvwer a renderizar
  };

  const deletedTodo = (text)=>{ //Funcion para borrar TODO's
    const todoIndex = todos.findIndex(todo=>todo.text===text);//Busca el array con el mismo texto
    const newTodos = [...todos];// se copia el mismo array
    newTodos.splice(todoIndex, 1);
    alert("Borraste la tarea "+ text);
    setTodos(newTodos);//Actualiza el estado para vlvwer a renderizar
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
  />
  );
}


export default App;