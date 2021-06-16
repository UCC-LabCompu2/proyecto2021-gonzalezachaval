/*
*   @author Gonzalez Achaval, Spinelli
*   @descripcion Trabajo Practico Laboratorio de Computacion II  
*/


var vel1 = document.getElementById("velocidad1").value
var pos1 = document.getElementById("posicion1").value
var acel1 = document.getElementById("aceleracion1").value
var tiem1 = document.getElementById("tiempo1").value
var vel2 = document.getElementById("velocidad2").value
var pos2 = document.getElementById("posicion2").value
var acel2 = document.getElementById("aceleracion2").value
var tiem2 = document.getElementById("tiempo2").value

let select_vel1 = document.getElementsByName("select_vel1").value
let select_pos1 = document.getElementsByName("select_pos1").value
let select_acel1 = document.getElementsByName("select_acel1").value
let select_tiem2 = document.getElementsByName("select_tiem1").value
let select_vel2 = document.getElementsByName("select_vel2").value
let select_pos2 = document.getElementsByName("select_pos2").value
let select_acel2 = document.getElementsByName("select_acel2").value
let select_tiem2 = document.getElementsByName("select_tiem2").value



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
}

/* 
*   Funcion para activar aceleracion en MRUV
*    @method mruv_active
*    @return
*/
function mruv_active(){
    location.reload()
    document.getElementById("aceleracion1").setAttribute("value" , "reset");
    document.getElementById("aceleracion1").removeAttribute("readonly");
    document.getElementById("aceleracion2").setAttribute("value" , "reset");
    document.getElementById("aceleracion2").removeAttribute("readonly");
}

/* 
*    Funcion para pasaje de unidades de velocidad
*    @method pasaje_uni_vel 
*    @param (number) vel1 - valor de velocidad
*    @param (string) select_vel - unidad elegida en select
*    @return (number) velocidad - valor de velocidad en km/h
*/
function pasaje_uni_vel(vel1, select_vel){
    var velocidad;
    if (select_vel == "m/s"){
        velocidad = valor * 3.6;
    }
    else {
        velocidad = valor
    }
    return velocidad;
}

/* 
*    Funcion para pasaje de unidades de aceleracion
*    @method pasaje_uni_acel
*    @param (number) acel1 - valor de aceleracion
*    @param (string) select_acel - unidad elegida en select 
*    @return (number) aceleracion - valor de aceleracion en km/h2
*/
function pasaje_uni_acel(acel1, select_acel){
    var aceleracion;
    if (select_acel == "m/s2"){
        aceleracion = valor * 3.6;
    }
    else {
        aceleracion = valor
    }
    return aceleracion;
}

/* 
*    Funcion para pasaje de unidades de posicion
*    @method pasaje_uni_pos
*    @param (number) pos1 - valor de posicion
*    @param (string) select_pos - unidad elegida en select
*    @return (number) posicion - valor de posicion en km
*/
function pasaje_uni_pos(pos1, select_pos){
    var posicion;
    if (select_pos == "m"){
        posicion = valor / 1000;
    }
    else {
        posicion = valor
    }
    return posicion;
}

/* 
*    Funcion para pasaje de unidades de tiempo
*    @method pasaje_uni_ti
*    @param (number) vel1 - valor de tiempo
*    @param (string) select_ti - unidad elegida en select
*    @return (number) tiempo -  valor de tiempo en horas
*/
function pasaje_uni_ti(tiem1, select_tiem){
    var tiempo;
    if (select_tiem == "s"){
        tiempo = valor / 3600;
    }
    else {
        tiempo = valor
    }
    return tiempo;
}

/* 
*    Funcion para calculo de encuentro de movil 1 en mru
*    @method pasaje_uni_pos
*    @return (number) posicion_final - posicion final del movil en km 
*/
function encuentro_mru1(){
    var posicion_final;
    var posicion = pasaje_uni_pos(pos1, select_pos1)
    var velocidad = pasaje_uni_vel(vel1, select_vel1)
    var tiempo = pasaje_uni_ti(tiem1, select_tiem1)
    posicion_final_1 = posicion + velocidad*tiempo1;
    return posicion_final;
}

/* 
*    Funcion para calculo de encuentro de movil 2 en mru
*    @method pasaje_uni_pos
*    @return (number) posicion_final - posicion final del movil en km 
*/
function encuentro_mru2(){
    var posicion_final;
    var posicion = pasaje_uni_pos(pos2, select_pos2)
    var velocidad = pasaje_uni_vel(vel2, select_vel2)
    var tiempo = pasaje_uni_ti(tiem2, select_tiem2)
    posicion_final_1 = posicion + velocidad*tiempo1;
    return posicion_final;
}

/* 
*    Funcion para calculo de encuentro de movil en mruv
*    @method pasaje_uni_pos
*    @return (number) posicion_final - posicion final del movil en km 
*/
function encuentro_mruv1(){
    var posicion_final;
    var posicion = pasaje_uni_pos(pos1, select_pos1)
    var velocidad = pasaje_uni_vel(vel1, select_vel1)
    var tiempo = pasaje_uni_ti(tiem1, select_tiem1)
    var aceleracion = pasaje_uni_acel(acel1, select_acel1)
    posicion_final_2 = posicion + velocidad*tiempo + 1/2*aceleracion*(tiempo*tiempo);
    return posicion_final;
}

/* 
*    Funcion para calculo de encuentro de movil 2 en mruv
*    @method pasaje_uni_pos
*    @return (number) posicion_final - posicion final del movil en km 
*/
function encuentro_mruv2(){
    var posicion_final;
    var posicion = pasaje_uni_pos(pos2, select_pos2)
    var velocidad = pasaje_uni_vel(vel2, select_vel2)
    var tiempo = pasaje_uni_ti(tiem2, select_tiem2)
    var aceleracion = pasaje_uni_acel(acel2, select_acel2)
    posicion_final_2 = posicion + velocidad*tiempo + 1/2*aceleracion*(tiempo*tiempo);
    return posicion_final;
}

/* 
*    Funcion para ejecucion de funciones correspondientes al calculo de mru
*    @method all_mru
*    @return (number) posicion_final1, posicion_final2 - valores de posicion en km
*/
function all_mru(){
    var posicion_final1;
    var posicion_final2;
    posicion_final1 = encuentro_mru1();
    posicion_final2 = encuentro_mru2();
    return posicion_final1, posicion_final2;
}

/* 
*    Funcion para ejecucion de funciones correspondientes al calculo de mruv
*    @method all_mru
*    @return (number) posicion_final1, posicion_final2 - valores de posicion en km
*/
function all_mruv(){
    var posicion_final1;
    var posicion_final2;
    posicion_final1 = encuentro_mruv1();
    posicion_final2 = encuentro_mruv2();
    return posicion_final1, posicion_final2;
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