function NumAletorio(){
    let num=Math.random();
    return num;
}


const generarTabla = () => {
    const numFilas = parseInt(document.getElementById("numFilas").value);
    const contenedorTabla = document.getElementById("contenedorTabla");

    contenedorTabla.innerHTML = "";
    var ite=1;
    let tabla = "<table id='card-table'>";
    tabla+="<thead > <th >N°</th> <th>Numero Aleatorio</th> </thead>";
    // var tabla = "<table class='table'>";
    for (let k = 1; k <= numFilas; k++) {
        tabla += "<tr>";
        for (let o = 1; o <= 2; o++) {
            if(o==1){
                tabla += "<th >"+ite+"</th>";
                ite++;
            }else{
                let num_ale=NumAletorio().toFixed(5);
                tabla += "<td >"+num_ale+"</td>"; 
            }
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    contenedorTabla.innerHTML = tabla;

    var tabla1 = document.getElementById("card-table");
    for(let i=1;i<tabla1.rows.length;i++){
        let celda = tabla1.rows[i].cells[1];
        console.log(celda);
    }
};



window.addEventListener('load', function () {
    document.getElementById('botonGenerar').addEventListener('click', function () {
        generarTabla();
    });
}); 


