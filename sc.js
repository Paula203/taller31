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

const INSIDE = 0;
const LEFT = 1;
const RIGHT = 2;
const BOTTOM = 4;
const TOP= 8;

function calcularCodigo(x, y) { 
    let codigo = INSIDE;    
    if (x < xmin) {
        codigo |= LEFT;
    } else if (x > xmax) {
        codigo |= RIGHT;
    }
    if (y < ymin) {
        codigo |= BOTTOM;
    } else if (y > ymax) {
        codigo |= TOP;
    }
    return codigo;
}

function recortarLinea(x1, y1, x2, y2) {
    let codigo1 = calcularCodigo(x1, y1);
    let codigo2 = calcularCodigo(x2, y2);
    let aceptada = false;
    while (true) {
        if ((codigo1 | codigo2) === 0) {
            aceptada = true;
            break;
        }
         else if ((codigo1 & codigo2) !== 0) {
            break;
        } else {
            let codigoFuera;
            let x, y;
            if (codigo1 !== 0) {
                codigoFuera = codigo1;
            } else {
                codigoFuera = codigo2;
            }
            if (codigoFuera & TOP) {
                x = x1 + (x2 - x1) * (ymax - y1) / (y2 - y1);
                y = ymax;
            } else if (codigoFuera & BOTTOM){
                x = x1 + (x2 - x1) * (ymin - y1) / (y2 - y1);
                y = ymin;
            } else if (codigoFuera & RIGHT) {
                y = y1 + (y2 - y1) * (xmax - x1) / (x2 - x1);
                x = xmax;
            } else if (codigoFuera & LEFT) {
                y = y1 + (y2 - y1) * (xmin - x1) / (x2 - x1);
                x = xmin;
            }   
            if (codigoFuera === codigo1) {
                x1 = x;
                y1 = y;
                codigo1 = calcularCodigo(x1, y1);
            }
        }
        } 
    if (aceptada) {
        return {x1, y1, x2, y2};
    }
    return null; 
    }
