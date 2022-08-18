//INDEX TODO SEARCH

import React from "react";
import "./TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}){ ///Recuerda siempre poner {} en los parametros
const onSearchChangeValue = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return(
        <input className="TodoSearch" 
        placeholder="Buscar" 
        onChange={onSearchChangeValue}/>
    );
}

export {TodoSearch};


