var canvas,contexto
function inicio(){
    b = document.getElementById("dibujalo");
    canvas = document.getElementById('miCanvas');
    contexto = canvas.getContext('2d');

    b.addEventListener("click", dibujarLetras);

    // le damos un color de llenado al contexto
    contexto.fillStyle = '#00a8ec';
 
    // dibujamos un cuadrado con el color de llenado
    contexto.fillRect(0, 10, 300,300 ); // fillRect(x, y, largo, alto)

    // le damos al contexto un tamaño y color de linea
    contexto.lineWidth = 5;
    contexto.strokeStyle = 'black';
     
    // dibujamos un cuadrado pero solo de contorno
    contexto.strokeRect(1, 10, 299, 289); // strokeRect(x, y, largo, alto)
   
}

function dibujarLetras(){

     // le damos un color de llenado al contexto
    contexto.fillStyle = '#00a8ec';
 
    // dibujamos un cuadrado con el color de llenado
    contexto.fillRect(0, 10, 300,300 ); // fillRect(x, y, largo, alto)

    // le damos al contexto un tamaño y color de linea
    contexto.lineWidth = 5;
    contexto.strokeStyle = 'black';
     
    // dibujamos un cuadrado pero solo de contorno
    contexto.strokeRect(1, 10, 299, 289); // strokeRect(x, y, largo, alto)

    // me guardo la configuración de contexto actual
    contexto.save();
    // escalo el contexto (amplío)
    contexto.scale(3, 4);  //.scale(ancho, alto)
    t = document.getElementById("usuario");
    var texto = t.value;
    // dibujo la palabra JS, pero ahora con la escala
    contexto.fillStyle = '#333';
    contexto.font = 'bold 64px sans-serif';
    contexto.textBaseline = 'top';
    contexto.fillText(texto, 10, 3);
     
    // recupero la configuracion del contexto guardada con .save()
    contexto.restore();
}