const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnUbicación(){
    const textolocalidad = Ubicación(inputTexto.value)
    mensaje.value = textolocalidad;
    /*mensaje.style.backgroundImage = "none"*/
    inputTexto.value = "" 
}

function Ubicación(stringLocalidad){

    var matrizCodigo = [["suba","Norte de la ciudad-------Técnicos: Arturo Lopéz, Luis Zapata, Jose Carlos Tejedor"],
    ["usaquen","Norte de la ciudad------- Técnicos: Luis Fernandéz "],
    ["engativa","Noroccidente de la ciudad-------Técnicos: Luis Angarita, Alexander Lopéz, Andrés Ariza, Oscar Caceres, Diego Alba, Fabian Ruiz, Felipe Diaz, Javier Mendivelso, Alejandro Meneses, Nestor Colmenares"],
    ["barrios unidos","Norte de la ciudad"],["chapinero","Norte de la ciudad"],
    ["teusaquillo","Centro de la ciudad"],["fontibon","Occidente de la ciudad-------Técnicos: Andrés Gary"],["la candelaria","Centro"],["santa fe","Centro"],
    ["puente aranda","Centro de la ciudad-------Técnicos: Efraín"],
    ["martires","Centro de la ciudad"],["kenedy","Suroccidente de la ciudad"],
    ["bosa","Suroccidente de la ciudad-------Técnicos: Alexander pava, Johan Chacón"],["tunjuelito","Sur de la ciudad"],
    ["ciudad bolivar","Sur de la ciudad-------Técnicos: Javier Nope"],["antonio nariño","Sur de la ciudad"],["rafael uribe u","Sur de la ciudad"],
    ["san cristobal","Suroriente de la ciudad-------Técnicos: Yeison Buitrago"],["usme","Suroriente de la ciudad: Técnicos: Jesus Coromoto"],
    ["sumapaz","Suroriente de la ciudad"]];
    stringLocalidad = stringLocalidad
    
    
    for(var i = 0; i < matrizCodigo.length; i++ ){

        if(stringLocalidad.includes(matrizCodigo[i][0])){
            stringLocalidad = stringLocalidad.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            
        } 
    }
    return stringLocalidad;
}