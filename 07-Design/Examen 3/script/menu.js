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


/***************************
 * Funcion para Progresss
 *******************************/
function move() {
  var elem = document.getElementById("barra");   
  var width = 10;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
