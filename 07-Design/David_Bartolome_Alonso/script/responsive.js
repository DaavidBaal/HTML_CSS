/**************************
 * Funcion menu responsive
 *************************/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function miFuncion() {
    document.getElementById("Desplegable").classList.toggle("mostrar");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.responsive2')) {

    var desplegable = document.getElementsByClassName("sorpresa");
    var i;
    for (i = 0; i < desplegable.length; i++) {
      var openDropdown = desplegable[i];
      if (openDropdown.classList.contains('mostrar')) {
        openDropdown.classList.remove('mostrar');
      }
    }
  }
}