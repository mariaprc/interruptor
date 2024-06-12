var interruptor = document.querySelector(".interruptor");
//var encendido = false; //porque de por si, está todo apagado.

interruptor.addEventListener("click", () => {
    interruptor.classList.toggle("encendido")
    /*
    if(interruptor.classList.contains("encendido")){ //va a preguntar: encendido es true? como no es true, va a else
        //para apagar
        //interruptor.className= "interruptor";
        interruptor.classList.remove("encendido")
        }else{//en este caso es la primera interacción que hace el usuario
        //para encender
        //interruptor.className= "interruptor encendido";//.className le da a interruptor una nueva clase cuando se hace click
        interruptor.classList.add("encendido");
        }
    //encendido = !encendido; //si era true se va a convertir en false (esto hace que con cada click haga un switch, si entras por el else, vuelves al if, y viceversa.)
//interruptor.className = `interruptor ${!encendido ? "encendido" : ""}`; //se pone `interruptor` porque siempre se repite. va a preguntar: encendido es false? efectivamente, entonces el le va a poner "encendido". Si encendido es TRUE, va a poner nada ("")
//encendido = !encendido; //para convertir de TRUE a FALSE, y viceversa*/

    });

//negativo y false = positivo, true