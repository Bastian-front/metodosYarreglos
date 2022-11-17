
const btn = document.querySelector('#agregar');
const arrayTareas = [];
let ultimoId = 1;
const eliminarTarea = function (idTarea){
    const posicion = arrayTareas.findIndex((e) => e.id == idTarea);
    if (posicion >= 0 ) {
    arrayTareas.splice(posicion,1);

    dibujaLista();
}
}

const marcarTareaRealizada = function(idTarea){
    const posicion = arrayTareas.findIndex((e) => e.id == idTarea);

    arrayTareas[posicion].realizada = !arrayTareas[posicion].realizada;

    dibujaLista();
    
}

const dibujaLista = function () {

    const listaTareas = document.querySelector('#listaTareas');
    
    let html = '<thead><tr><th>ID</th><th>Tarea</th><th></th><tr></thead><tbody>';

    for (const tarea of arrayTareas) {
        if (tarea.realizada){
            statusCheck = 'checked';
        } else{
            statusCheck = '';
        }
    html += `<tr><td>${tarea.id}</td> <td>${tarea.nombre}</td> <td><input type="checkbox" ${statusCheck} onclick= "marcarTareaRealizada(${tarea.id})"><button class = "btn btn-danger" onclick="eliminarTarea(${tarea.id});">Eliminar</button></td></tr> `;  

    }

    html += '</tbody>';

    
   
   listaTareas.innerHTML = html;
   document.querySelector('#totalTareas').innerHTML = arrayTareas.length;

   const arrayTareasRealizadas = arrayTareas.filter ((e) => e.realizada == true);

   document.querySelector('#tareasRealizadas').innerHTML = arrayTareasRealizadas.length;
 
}



btn.addEventListener('click', function (){
const nombreTarea = document.querySelector('#nombreTarea').value;
const id = ultimoId;
const realizada = false;

const tarea = {
    id: id,
    nombre: nombreTarea,
    realizada: realizada

}

arrayTareas.push(tarea);

dibujaLista();

ultimoId++;

});