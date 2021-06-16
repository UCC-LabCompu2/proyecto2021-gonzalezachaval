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
*   Funcion para activar aceleracion en MRUV
*    @method mruv_active
*    @return
*/
function mruv_active(){

    document.getElementById("aceleracion1").setAttribute("value" , "");
    document.getElementById("aceleracion1").removeAttribute("readonly");
    document.getElementById("aceleracion2").setAttribute("value" , "");
    document.getElementById("aceleracion2").removeAttribute("readonly");
    var mov;
    mov = ("mruv")
    return mov;
}

/*
*    Funcion para pasaje de unidades de velocidad
*    @method pasaje_uni_vel
*    @param (number) vel1 - valor de velocidad
*    @param (string) select_vel - unidad elegida en select
*    @return (number) velocidad - valor de velocidad en m/s
*/
function pasaje_uni_vel(vel, select_vel){
    var velocidad;
    if (select_vel == "km/h"){
        velocidad = vel * (0.277778);
    }
    else {
        velocidad = vel
    }
    return velocidad;
}

/*
*    Funcion para pasaje de unidades de aceleracion
*    @method pasaje_uni_acel
*    @param (number) acel1 - valor de aceleracion
*    @param (string) select_acel - unidad elegida en select
*    @return (number) aceleracion - valor de aceleracion en m/s2
*/
function pasaje_uni_acel(acel, select_acel){
    var aceleracion;
    if (select_acel == "km/h2"){
        aceleracion = acel * 1000;
    }
    else {
        aceleracion = acel
    }
    return aceleracion;
}

/*
*    Funcion para pasaje de unidades de posicion
*    @method pasaje_uni_pos
*    @param (number) pos1 - valor de posicion
*    @param (string) select_pos - unidad elegida en select
*    @return (number) posicion - valor de posicion en m
*/
function pasaje_uni_pos(pos, select_pos){
    var posicion;
    if (select_pos == "km"){
        posicion = pos * 1000;
    }
    else {
        posicion = pos
    }
    return posicion;
}

/*
*    Funcion para pasaje de unidades de tiempo
*    @method pasaje_uni_ti
*    @param (number) vel1 - valor de tiempo
*    @param (string) select_ti - unidad elegida en select
*    @return (number) tiempo -  valor de tiempo en segundos
*/
function pasaje_uni_ti(tiem, select_tiem){
    var tiempo;
    if (select_tiem == "h"){
        tiempo = tiem * 3600;
    }
    else {
        tiempo = tiem
    }
    return tiempo;
}

/*
*    Funcion para calculo de encuentro de movil 1 en mru
*    @method encuentro_mru1()
*    @return (number) posicion_final_mru_1 - posicion final del movil 1 en m
*/
function encuentro_mru1(){
    var posicion_final_mru_1;
    var posicion_mru_1 = pasaje_uni_pos(get_pos1(), get_sel_pos1());
    var velocidad_mru_1 = pasaje_uni_vel(get_vel1(), get_sel_vel1());
    var tiempo_mru_1 = pasaje_uni_ti(get_tiem1(), get_sel_tiem1());
    posicion_final_mru_1 = (velocidad_mru_1*tiempo_mru_1) + posicion_mru_1;
    return posicion_final_mru_1;
}

/*
*    Funcion para calculo de encuentro de movil 2 en mru
*    @method pasaje_uni_pos
*    @return (number) posicion_final_mru_2 - posicion final del movil 2 en m
*/
function encuentro_mru2(){
    var posicion_final_mru_2;
    var posicion_mru_2 = pasaje_uni_pos(get_pos2(), get_sel_pos2());
    var velocidad_mru_2 = pasaje_uni_vel(get_vel2(), get_sel_vel2());
    var tiempo_mru_2 = pasaje_uni_ti(get_tiem2(), get_sel_tiem2());
    posicion_final_mru_2 = posicion_mru_2 + (velocidad_mru_2*tiempo_mru_2);
    return posicion_final_mru_2;
}

/*
*    Funcion para calculo de encuentro de movil 1 en mruv
*    @method encuentro_mruv1
*    @return (number) posicion_final_mruv_1 - posicion final del movil 1 en m
*/
function encuentro_mruv1(){
    var posicion_final_mruv_1;
    var posicion_mruv_1 = pasaje_uni_pos(get_pos1(), get_sel_pos1())
    var velocidad_mruv_1 = pasaje_uni_vel(get_vel1(), get_sel_vel1())
    var tiempo_mruv_1 = pasaje_uni_ti(get_tiem1(), get_sel_tiem1())
    var aceleracion_mruv_1 = pasaje_uni_acel(get_acel1(), get_sel_acel1())
    posicion_final_mruv_1 = posicion_mruv_1 + (velocidad_mruv_1*tiempo_mruv_1) + ((1/2*aceleracion_mruv_1)*(tiempo_mruv_1*tiempo_mruv_1));
    return posicion_final_mruv_1;
}

/*
*    Funcion para calculo de encuentro de movil 2 en mruv
*    @method encuentro_mruv2()
*    @return (number) posicion_final_mruv_2 - posicion final del 2 movil en m
*/
function encuentro_mruv2(){
    var posicion_final_mruv_2;
    var posicion_mruv_2 = pasaje_uni_pos(get_pos2(), get_sel_pos2())
    var velocidad_mruv_2 = pasaje_uni_vel(get_vel2(), get_sel_vel2())
    var tiempo_mruv_2 = pasaje_uni_ti(get_tiem2(), get_sel_tiem2())
    var aceleracion_mruv_2 = pasaje_uni_acel(get_acel2(), get_sel_acel2())
    posicion_final_mruv_2 = posicion_mruv_2 + (velocidad_mruv_2*tiempo_mruv_2) + ((1/2*aceleracion_mruv_2)*(tiempo_mruv_2*tiempo_mruv_2));
    return posicion_final_mruv_2;
}

/*
*   Funcion para aplicar formula de mru y conseguir la posicion final de ambos moviles
*   @method final_mru()
*   return (number) resultado_mru_1 - resultado de posicion final del movil 1 en m
*   return (number) resultado_mru_2 - resultado de posicion final del movil 2 en m
*/
function final_mru(){
    var resultado_mru_1
    var resultado_mru_2
    resultado_mru_1 = encuentro_mru1();
    resultado_mru_2 = encuentro_mru2();
    console.log(resultado_mru_1)
    console.log(resultado_mru_2)
    alert("Posicion Movil 1 MRU:  " + resultado_mru_1 + "m"+ "       " + "Posicion Movil 2 MRU:  " + resultado_mru_2 + "m")
    return resultado_mru_1, resultado_mru_2;
}

/*
*   Funcion para aplicar formula de mru y conseguir la posicion final de ambos moviles
*   @method final_mruv()
*   return (number) resultado_mruv_1 - resultado de posicion final del movil 1 en m
*   return (number) resultado_mruv_2 - resultado de posicion final del movil 2 en m
*/
function final_mruv(){
    var resultado_mruv_1
    var resultado_mruv_2
    resultado_mruv_1 = encuentro_mruv1();
    resultado_mruv_2 = encuentro_mruv2();
    console.log(resultado_mruv_1)
    console.log(resultado_mruv_2)
    alert("Posicion Movil 1 MRUV:  " + resultado_mruv_1 + "m"+ "       " + "Posicion Movil 2 MRUV:  " + resultado_mruv_2 + "m")
    return resultado_mruv_1, resultado_mruv_2;
}
