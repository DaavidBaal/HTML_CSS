/* Cuando el usuario haga click en el boton, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/************************
 * Funcion noticias
******************** */
function noticias() {
    document.getElementById("noticias").classList.toggle("mostrar");
}

/***************************************
 * Cierra el menu si clicas fuera de el
 ***************************************/
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
/*********************************************
 * Cierra el menu si clicas fuera de noticias
 ********************************************/
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var noticias = document.getElementById("noticias");
      if (noticias.classList.contains('show')) {
        noticias.classList.remove('show');
      }
  }
}
