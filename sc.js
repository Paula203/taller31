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

