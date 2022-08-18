import React from "react";


//CREAMOS NUETRO PROPIO HOOK
//useLocalStorage

function useLocalStorage(itemName, initialValue){ // Recibimos como parámetros el nombre y el estado inicial de nuestro item.
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem){ //Si el usuario es nuevo no exite ningun item creado en local storage, por ello creamos uno con array vacio
    localStorage.setItem(itemName,JSON.stringify(initialValue)); //local storage solo acepta strings, por ello enviamos un array stringifiado osea converido en texto
    parsedItem = [];
    }else{
    //// Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedItem = JSON.parse(localStorageItem);// JSON.parse convierte en JS
    }

    
    const [item, setItem] =React.useState(parsedItem);// ¡Podemos utilizar otros hooks!
    
    
    const saveItem =(newItem)=>{ // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
    const stringifiedItem = JSON.stringify(newItem);// Convertimos a string nuestros TODOs 
    localStorage.setItem(itemName, stringifiedItem);// Los guardamos en el localStorage
    setItem(newItem);////Actualiza el estado para vlvwer a renderizar
    };

    return[  // Regresamos los datos que necesitamos
    item,
    saveItem, 
    ];
}

export {useLocalStorage}