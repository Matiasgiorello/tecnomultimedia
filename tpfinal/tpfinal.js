//tpfinal
//Izurieta, Lucia y Giorello, Matias
let presentacion;
function setup() {
  createCanvas(800, 800);
  presentacion = new Presentacion();
}

function draw() {
  background(255);
  presentacion.mostrar();
  //presentacion.verificarFinDeJuego();
}

function mousePressed() {
  presentacion.clicpresentacion();
}

function keyPressed() {
  presentacion.juego.teclas();
}
