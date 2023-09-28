
import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let precioElemento = document.getElementById('precio');
let imagenElemento = document.getElementById('box');
let parrafoElemento = document.getElementById('parrafo');


enlaces.forEach(function(enlace){

    enlace.addEventListener('click',function(){          
       
            enlaces.forEach(function(enlace){              
                enlace.classList.remove('active');
            })

        this.classList.add('active');
        let contenido = obtenerContenido(this.textContent);
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        precioElemento.innerHTML = contenido.precio;
        parrafoElemento.innerHTML = contenido.parrafo;

        imagenElemento.innerHTML = '';
        let img = document.createElement('img');
        img.src = `images/${contenido.img}.jpg`;
        imagenElemento.appendChild(img);
        

    })


});




function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace];
}




