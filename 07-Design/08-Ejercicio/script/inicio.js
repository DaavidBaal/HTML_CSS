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
