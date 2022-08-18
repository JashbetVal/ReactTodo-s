//App UI
//EN ESTE DOCUMENTO SE MAQUETEA LA APP

import './App.css'; 
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

import React from "react";

function AppUI({
    
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo, 
    deletedTodo, 
}) {

return(
<React.Fragment>
    <TodoCounter
    total ={totalTodos}
    completed={completedTodo}
    />
    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    <TodoList>
        {/* Regresamos solamente los TODOs buscados */}
        {searchedTodos.map(todo => (
        <TodoItem
            key={todo.text} //KEY: esta propiedad ayuda a React para mantener un registro de los elementos que han cambiado, y saber cuál elemento es cuál, también es importante que esta propiedad no se repita en ningún otro item.
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completedTodo(todo.text)}
            onDelete={() =>deletedTodo(todo.text)}
        />
        ))}
    </TodoList>
    <CreateTodoButton/> 
</React.Fragment>
        
    );
}

export {AppUI}