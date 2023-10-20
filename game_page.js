jugador1_nombre= localStorage.getItem("jugador1_nombre");
jugador2_nombre=localStorage.getItem("jugador2_nombre");

jugador1_puntaje=0; //Puntuación para los jugadores 
jugador2_puntaje=0; 

document.getElementById("jugador1_nombre").innerHTML=jugador1_nombre+":";
document.getElementById("jugador2_nombre").innerHTML=jugador2_nombre+":";

document.getElementById("jugador1_puntaje").innerHTML=jugador1_puntaje;
document.getElementById("jugador2_puntaje").innerHTML=jugador2_puntaje;

document.getElementById("jugador_pregunta").innerHTML = "Turno para preguntar - " + jugador1_nombre ;
document.getElementById("jugador_respuesta").innerHTML = "Turno para responder - " + jugador2_nombre ;


function send()
{
    get_word = document.getElementById("palabra").value;
	palabra = get_word.toLowerCase();
	console.log("word in lowerCase = " + palabra);
    
    charAt1 = palabra.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(palabra.length/2);
	charAt2 = palabra.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = palabra.length - 1; 
    charAt3 = palabra.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = palabra.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    pregunta_palabra = "<h4 id='palabra_display'> P. "+remove_charAt3+"</h4>";
    caja_texto = "<br>Respuesta : <input type='text' id='caja_texto_check'>";
    boton_check = "<br><br><button class='btn btn-info' onclick='comprobar()'>Comprobar</button>";
    row =  pregunta_palabra + caja_texto + boton_check ; 
    document.getElementById("salida").innerHTML = row;
    document.getElementById("palabra").value = "";

}

//Desde aqui copiar el código a trabajar 

pregunta_devuelve = "jugador1";
respuesta_devuelve = "jugador2";

function comprobar()
{
    obtener_respuesta = document.getElementById("caja_texto_check").value;
	respuesta = obtener_respuesta.toLowerCase();
	console.log("answer in lower case - " + respuesta);
	if(respuesta == palabra)	
	{
		if(respuesta_devuelve == "jugador1")
		{
			jugador1_puntaje = jugador1_puntaje +1;
		    document.getElementById("jugador1_puntaje").innerHTML = jugador1_puntaje;
		}
		else 
		{
			jugador2_puntaje = jugador2_puntaje +1;
		    document.getElementById("jugador2_puntaje").innerHTML = jugador2_puntaje;
		}
	}

    if(pregunta_devuelve == "jugador1")
	{
		pregunta_devuelve = "jugador2"
		document.getElementById("jugador_pregunta").innerHTML = "Turno para preguntar - " + jugador2_nombre ;
	}
	else 
	{
		pregunta_devuelve = "jugador1"
		document.getElementById("jugador_pregunta").innerHTML = "Turno para preguntar - " + jugador1_nombre ;
	}

	if(respuesta_devuelve == "jugador1")
	{
		respuesta_devuelve = "jugador2"
		document.getElementById("jugador_respuesta").innerHTML = "Turno para responder - " + jugador2_nombre ;
	}
	else 
	{
		respuesta_devuelve = "jugador1"
		document.getElementById("jugador_respuesta").innerHTML = "Turno para responder - " + jugador1_nombre ;
	}

    document.getElementById("salida").innerHTML = "";
}
