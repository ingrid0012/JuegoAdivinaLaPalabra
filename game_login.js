function addUsuario() 
{
    jugador1_nombre=document.getElementById("nombre_jugador1").value;
    jugador2_nombre=document.getElementById("nombre_jugador2").value;

    localStorage.setItem("jugador1_nombre", jugador1_nombre); //locarstorage es un almacenamiento local 
    localStorage.setItem("jugador2_nombre",jugador2_nombre);

    window.location="game_page.html"; //me ayuda ir a otra pagina 

} //Función para guardar a los usuarios 