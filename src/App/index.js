//INDEX APP

import React from "react";
import { AppUI } from "./AppUI";

/* 
const defaultTodos=[
  {text: 'Cortar cebolla', completed: ''},//No se envia nada en completed para no tachar la tarea
  {text: 'Bailar bachata', completed: 'true'},
  {text: 'Llorar con la llorona ', completed: 'true'},
  {text: 'Correr' , completed: ''},
  {text: 'BAILAR' , completed: ''},
]; */


function App(props) {
//Traemos a nuestros TODO'almacenados
const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos){ //Si el usuario es nuevo no exite ningun item creado en local storage, por ello creamos uno con array vacio
    localStorage.setItem('TODOS_V1',JSON.stringify([])); //local storage solo acepta strings, por ello enviamos un array stringifiado osea converido en texto
    parsedTodos = [];
  }else{
    //// Si existen TODOs en el localStorage los regresamos como nuestros todos
  parsedTodos = JSON.parse(localStorageTodos);// JSON.parse convierte en JS
  }



  const [todos, setTodos]= React.useState(parsedTodos);//El estado de nuestra busqueda
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
      const saveTodos =(newTodos)=>{
      const stringifiedTodos = JSON.stringify(newTodos);// Convertimos a string nuestros TODOs 
      localStorage.setItem('TODOS_V1',stringifiedTodos);// Los guardamos en el localStorage
      setTodos(newTodos);////Actualiza el estado para vlvwer a renderizar
    }

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