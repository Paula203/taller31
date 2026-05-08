const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function actualizarViewport() {
  xmin = Number(document.getElementById("xmin").value);
  xmax = Number(document.getElementById("xmax").value);
  ymin = Number(document.getElementById("ymin").value);
  ymax = Number(document.getElementById("ymax").value);
  mostrarEscena();
}

let xmin = 200;
let ymin = 150;
let xmax = 500;
let ymax = 350;

const lineas = [
  {x1:250, y1:200, x2:450, y2:300},
  {x1:100, y1:250, x2:300, y2:250},
  {x1:250, y1:250, x2:600, y2:250},
  {x1:100, y1:100, x2:600, y2:400},
  {x1:50, y1:50, x2:150, y2:100}
];

let escena = 0;

function convertirY(y) {
  return canvas.height - y;
}

function dibujarViewport() {
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.strokeRect(xmin, convertirY(ymax), xmax - xmin, ymax - ymin);
}

function dibujarLinea(x1, y1, x2, y2,color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

  ctx.moveTo(x1, convertirY(y1));
  ctx.lineTo(x2, convertirY(y2));

  ctx.stroke();
}
