/*
*   @author Gonzalez Achaval, Spinelli
*   @descripcion Trabajo Practico Laboratorio de Computacion II  
*/

/*
*   Funcion para tomar el valor de velocidad del movil 1
*   @method get_vel1()
*   return (number) vel1 - velocidad del movil 1
*/
function get_vel1(){
    var vel1 = document.getElementById("velocidad1").value
    vel1 = parseFloat(vel1)
    return vel1
}

/*
*   Funcion para tomar el valor de posicion del movil 1
*   @method get_pos1()
*   return (number) pos1 - posicion del movil 1
*/
function get_pos1(){
    var pos1 = document.getElementById("posicion1").value
    pos1 = parseFloat(pos1)
    return pos1
}

/*
*   Funcion para tomar el valor de aceleracion del movil 1
*   @method get_acel1()
*   return (number) acel1 - aceleracion del movil 1
*/
function get_acel1(){
    var acel1 = document.getElementById("aceleracion1").value
    acel1 = parseFloat(acel1)
    return acel1
}

/*
*   Funcion para tomar el valor de tiempo del movil 1
*   @method get_tiem1()
*   return (number) tiem1 - tiempo del movil 1
*/
function get_tiem1(){
    var tiem1 = document.getElementById("tiempo1").value
    tiem1 = parseFloat(tiem1)
    return tiem1
}

/*
*   Funcion para tomar el valor de velocidad del movil 2
*   @method get_vel12()
*   return (number) vel2 - velocidad del movil 2
*/
function get_vel2(){
    var vel2 = document.getElementById("velocidad2").value
    vel2 = parseFloat(vel2)
    return vel2
}

/*
*   Funcion para tomar el valor de posicion del movil 2
*   @method get_pos2()
*   return (number) pos2 - posicion del movil 2
*/
function get_pos2(){
    var pos2 = document.getElementById("posicion2").value
    pos2 = parseFloat(pos2)
    return pos2
}

/*
*   Funcion para tomar el valor de aceleracion del movil 2
*   @method get_acel2()
*   return (number) acel2 - aceleracion del movil 2
*/
function get_acel2(){
    var acel2 = document.getElementById("aceleracion2").value
    acel2 = parseFloat(acel2)
    return acel2
}

/*
*   Funcion para tomar el valor de tiempo del movil 2
*   @method get_tiem2()
*   return (number) tiem2 - tiempo del movil 2
*/
function get_tiem2(){
    var tiem2 = document.getElementById("tiempo2").value
    tiem2 = parseFloat(tiem2)
    return tiem2
}

/*
*   Funcion para tomar la unidad seleccionada de velocidad del movil 1
*   @method get_sel_vel1()
*   return (string) select_vel1 - unidad de velocidad del movil 1
*/
function get_sel_vel1(){
    var select_vel1 = document.getElementsByName("select_vel1").selectedIndex
    return select_vel1
}

/*
*   Funcion para tomar la unidad seleccionada de posicion del movil 1
*   @method get_sel_pos1()
*   return (string) select_pos1 - unidad de posicion del movil 1
*/
function get_sel_pos1(){
    var select_pos1 = document.getElementsByName("select_pos1").value
    return select_pos1
}

/*
*   Funcion para tomar la unidad seleccionada de aceleracion del movil 1
*   @method get_sel_acel1()
*   return (string) select_acel1 - unidad de aceleracion del movil 1
*/
function get_sel_acel1(){
    var select_acel1 = document.getElementsByName("select_acel1").value
    return select_acel1
}

/*
*   Funcion para tomar la unidad seleccionada de tiempo del movil 1
*   @method get_sel_tiem1()
*   return (string) select_tiem1 - unidad de tiempo del movil 1
*/
function get_sel_tiem1(){
    var select_tiem1 = document.getElementsByName("select_tiem1").value
    return select_tiem1
}

/*
*   Funcion para tomar la unidad seleccionada de velocidad del movil 2
*   @method get_sel_vel2()
*   return (string) select_vel2 - unidad de velocidad del movil 2
*/
function get_sel_vel2(){
    var select_vel2 = document.getElementsByName("select_vel2").value
    return select_vel2
}

/*
*   Funcion para tomar la unidad seleccionada de posicion del movil 2
*   @method get_sel_pos2()
*   return (string) select_pos2 - unidad de posicion del movil 2
*/
function get_sel_pos2(){
    var select_pos2 = document.getElementsByName("select_pos2").value
    return select_pos2
}

/*
*   Funcion para tomar la unidad seleccionada de aceleracion del movil 2
*   @method get_sel_acel2()
*   return (string) select_acel2 - unidad de aceleracion del movil 2
*/
function get_sel_acel2(){
    var select_acel2 = document.getElementsByName("select_acel2").value
    return select_acel2
}

/*
*   Funcion para tomar la unidad seleccionada de tiempo del movil 2
*   @method get_sel_tiem2()
*   return (string) select_tiem2 - unidad de tiempo del movil 2
*/
function get_sel_tiem2(){
    var select_tiem2 = document.getElementsByName("select_tiem2").value
    return select_tiem2
}

/*
*    Funcion para desactivar aceleracion en MRU
*    @method mru_active
*    @return
*/
function mru_active(){
    document.getElementById("aceleracion1").setAttribute("value" ,"0");
    document.getElementById("aceleracion1").setAttribute("readonly", true);
    document.getElementById("aceleracion2").setAttribute("value" ,"0");
    document.getElementById("aceleracion2").setAttribute("readonly", true);
    var mov;
    mov = ("mru")
    return mov;
}
/*
*   Funcion para aplicar formula de mru o mruv segun eleccion del usuario
*   @method mru_or_mruv
*   @param (function) all_mruv - formulas de mruv
*   @param (function) all_mru - formulas de mru
*/
function mru_or_mruv(){
    document.getElementById("button1").addEventListener("click", all_mru());
    document.getElementById("button2").addEventListener("click", all_mruv());
    alert("se calculo");
}
