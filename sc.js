const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function actualizarViewport() {
  xmin = Number(document.getElementById("xmin").value);
  xmax = Number(document.getElementById("xmax").value);
  ymin = Number(document.getElementById("ymin").value);
  ymax = Number(document.getElementById("ymax").value);
  mostrarEscena();
}


