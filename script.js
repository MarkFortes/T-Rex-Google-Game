//Funcion que oye las teclas pulsadas
document.addEventListener('keydown', function(evento){
  if (evento.keyCode == 32 || evento.keyCode == 38) {
    console.log("Salto");
  }
});


var imgRex, imgNube, imgCactus, imgSuelo;

function cargaImagenes(){
  imgRex = new Image();
  imgNube = new Image();
  imgCactus = new Image();
  imgSuelo = new Image();

  imgRex.src = "img/rex.png";
  imgNube.src = "img/nube.png";
  imgCactus.src = "img/cactus.png";
  imgSuelo.src = "img/suelo.png";
}

var ancho = 700;
var alto = 300;
var canvas,ctx;

function init(){
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  cargaImagenes();
}

function borraCanvas(){
  canvas.width = ancho;
  canvas.height = alto;
}

function dibujaRex(){
  ctx.drawImage(imgRex,100,150,50,50);
}


//BUCLE PRINCIPAL -------------------------------------------------------------
var FPS = 10;
setInterval(function(){
  principal();
},1000/10); //10 veces por segundo

function principal(){
  borraCanvas();
  dibujaRex();
}
