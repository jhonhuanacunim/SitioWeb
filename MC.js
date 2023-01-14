function NumAletorio(){
    let num=Math.random();
    return num;
}


const generarTabla = () => {
    //obtenemos  los datos 
    const numFilas = parseInt(document.getElementById("numFilas").value);
    const contenedorTabla = document.getElementById("contenedorTabla");
    const contenedorTablaRe = document.getElementById("contenedorTabla-Resul");

    //generamos el codigo html para crear la tabla
    contenedorTabla.innerHTML = "";
    var ite=1;
    let tabla = "<table id='card-table'>";
    tabla+="<thead > <th >N°</th> <th>N. Aleatorio</th> </thead>";
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
    
    ite=1;
    contenedorTablaRe.innerHTML="";
    let tablaRe = "<table id='card-table-resul'>";
    tablaRe+="<thead > <th >N°</th> <th>N. Aleatorio</th> </thead>";
    for (let k = 1; k <= numFilas; k++) {
        tablaRe += "<tr>";
        for (let o = 1; o <= 2; o++) {
            if(o==1){
                tablaRe += "<th >"+ite+"</th>";
                ite++;
            }else{
                let num_ale=NumAletorio().toFixed(5);
                tablaRe += "<td >"+num_ale+"</td>"; 
            }
        }
        tablaRe += "</tr>";
    }
    tablaRe += "</table>";
    contenedorTablaRe.innerHTML = tablaRe;

};

const generarTablaEntrada = () => {
    let numeroFi= document.getElementById("numeroFilas").value;
    const contenedorTablaEn = document.getElementById("contenedorTabla-Entry");
    let auxID=1;
    contenedorTablaEn.innerHTML="";
    let tablaEntry= "<table id='card-table-entry'>";
    tablaEntry+="<thead > <th ><p class='enca'> Unidades</p></th> <th><p class='enca'>Frecuencia</p></th> <th><p class='enca'>Prob. Ocurrencia</p></th> <th><p class='enca'>F. Acumulada </p></th></thead>";
    for (let k = 1; k <= numeroFi; k++) {
        tablaEntry += "<tr>";
        for (let o = 1; o <= 4; o++) {
            if(o==1 || o==2){
                tablaEntry += "<td > <input class='card-date-entry' type='number' id='number"+auxID+"'  min='1' /> </td>";
                auxID++;
            }else{
                let num_ale=NumAletorio().toFixed(5);
                tablaEntry += "<td >"+num_ale+"</td>"; 
            }
        }
        tablaEntry += "</tr>";
    }
    tablaEntry += "</table>";
    contenedorTablaEn.innerHTML = tablaEntry;
}



window.addEventListener('load', function () {
    document.getElementById('botonGenerarTablaAle').addEventListener('click', function () {
        generarTabla();
    });
}); 

window.addEventListener('load', function () {
    document.getElementById('botonGenerarTableEntry').addEventListener('click', function () {
        generarTablaEntrada();
    });
}); 


