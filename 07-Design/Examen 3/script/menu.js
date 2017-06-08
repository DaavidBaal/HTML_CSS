/**Cuando el usuario hace clic en el botón,
Alternar entre ocultar y mostrar el contenido desplegable
*********************************************************/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Cierra el menu cuando clicas fuera de el
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}


