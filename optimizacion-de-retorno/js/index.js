var cantidad_laptops = 400;

function verificarDisponibilidad(cantidad){
    /*if(cantidad < cantidad_laptops){
        return true;
    }else{
        return false;
    }*/
    //de manera resumida
    return(cantidad < cantidad_laptops && cantidad > 0)
}

console.log(verificarDisponibilidad(200));