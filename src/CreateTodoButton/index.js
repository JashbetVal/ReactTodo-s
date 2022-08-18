//INDEX CREATE BUTTON

import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(){
    const onClickButton = ()=>{
        alert("DISTE CLICK");
        console.log("AQUI TAMBIEN SE MUESTRA QUE DISTE CLICK");
    };
    
    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >+
        </button>
    );
}

export {CreateTodoButton};