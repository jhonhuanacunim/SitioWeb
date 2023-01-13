const colores = new Array(
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
);

const generarTabla = () => {
    const numFilas = document.getElementById("numFilas").value;
    const numColumnas = document.getElementById("numColumnas").value;
    const contenedorTabla = document.getElementById("contenedorTabla");

    contenedorTabla.innerHTML = "";
    let colorFondo, colorLetra;
    let tabla = "<table>";
    tabla+="<thead > <th style='border: 1px solid black;'>N°</th> <th style='border: 1px solid black;'>Numero Aleatorio</th> </thead>";
    // var tabla = "<table class='table'>";
    for (let k = 1; k <= numFilas; k++) {
        tabla += "<tr>";
        for (let o = 1; o <= numColumnas; o++) {
            tabla += "<td >UK</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    contenedorTabla.innerHTML = tabla;
};

window.addEventListener('load', function () {

    document.getElementById('botonGenerar').addEventListener('click', function () {
        generarTabla();
    });

});