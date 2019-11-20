//BUCLE PRINCIPAL --------------------------------------------------------------
var FPS = 35;
setInterval(function(){
  principal();
},1000/FPS); //10 veces por segundo

function principal(){
  borraCanvas();
  gravedad();
  colision();
  logicaCactus();
  logicaNube1();
  logicaNube2();
  dibujaSuelo();
  dibujaCactus();
  dibujaNube1();
  dibujaNube2();
  dibujaRex();
}

//Función llamada en el momento que inicializa las variables y funciones necesarias
function init(){
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  cargaImagenes();
}

//Funcion que borra el canvas y vuelve a dibujar--------------------------------
function borraCanvas(){
  canvas.width = ancho;
  canvas.height = alto;
}

//Funcion que oye las teclas pulsadas-------------------------------------------
document.addEventListener('keydown', function(evento){
  if (evento.keyCode == 32 || evento.keyCode == 38) {
    if (nivel.muerto == false) {
      saltar();
    }
  }
});

//Variables --------------------------------------------------------------------
var ancho = 700;
var alto = 300;
var canvas,ctx;
var imgRex, imgNube, imgCactus, imgSuelo;
var suelo = 200;
var trex = {x:100, y:suelo, vy:0, gravedad:2, salto:24, vymax:9, saltando:false};
var cactus = {x:ancho + 100, y:suelo};
var nube1 = {x:ancho + 50, y:20, velocidad: 1};
var nube2 = {x:ancho + 500, y:70, velocidad: 1};
var nivel = {velocidad:7, puntuacion:0, muerto:false};
var sueloGraph = {x:0, y:suelo + 40};

//Función llamada en init para cargar las imagenes -----------------------------
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

//Funciones que dibujan en el myCanvas------------------------------------------
function dibujaRex(){
  ctx.drawImage(imgRex,trex.x,trex.y,50,50); //.drawImage(img,x,y,width,height);
}

function dibujaCactus(){
  ctx.drawImage(imgCactus,cactus.x,cactus.y,50,50);
}

function dibujaNube1(){
  ctx.drawImage(imgNube,nube1.x, nube1.y,40,40);
}

function dibujaNube2(){
  ctx.drawImage(imgNube,nube2.x, nube2.y,40,40);
}

function dibujaSuelo(){
  ctx.drawImage(imgSuelo,sueloGraph.x, sueloGraph.y,ancho + 300,100);
}

//Apartado CACTUS-----------------------------------------------------------------
function logicaCactus(){
  if (cactus.x < -80) { //Si ya se ha salido de la vista por la izquirda del canvas
    cactus.x = ancho + 100;
  }else {
    cactus.x -= nivel.velocidad;
  }
}

//Apartado TREX-----------------------------------------------------------------
function saltar(){
  trex.saltando = true;
  trex.vy = trex.salto;
}

function gravedad(){
  if (trex.saltando == true) {

    if (trex.y - trex.vy - trex.gravedad > suelo) {
      trex.saltando = false;
      trex.vy = 0;
      trex.y = suelo;
    }else{
      trex.vy -= trex.gravedad;
      trex.y -= trex.vy;
    }

  }
}

function colision(){
  if (cactus.x >= 100 && cactus.x <= 150 ) {
    if (trex.y >= 200 && trex.y <= 250) {
      nivel.muerto = true;
      nivel.velocidad = 0;
      nube1.velocidad = 0;
      nube2.velocidad = 0;
      alert("PERDISTEEE");
    }
  }
}

//Apartado NUBES----------------------------------------------------------------
function logicaNube1(){
  if (nube1.x < -100) {
    nube1.x = ancho;
  }else {
    nube1.x -= nube1.velocidad;
  }
}

function logicaNube2(){
  if (nube2.x < -100) {
    nube2.x = ancho;
  }else {
    nube2.x -= nube2.velocidad;
  }
}
