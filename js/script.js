document.addEventListener('DOMContentLoaded', function() {
    const galleryRow = document.querySelector('#gallery .row');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const estadoFiltrado = document.getElementById("estadoFiltrado");

    let filtroActual = "todos"; // Valor predeterminado para mostrar todas las imágenes

    const filtros = {
        "a1": "vintage",
        "a2": "moderno",
        "a3": "minimalista",
        "a4": "americano",
        "a5": "todos"
    };

    for (let clave in filtros) {
        const elemento = document.getElementById(clave);
        if(clave !== "a5") {
            elemento.addEventListener('click', cambiarFiltro);
        } else {
            elemento.addEventListener('click', borrarFiltros);
        }
    }

    const categoriasImagenes = {
        1: "minimalista",
        2: "minimalista",
        3: "moderno",
        4: "americano",
        5: "vintage",
        6: "moderno",
        7: "moderno",
        8: "americano"
    };

    for (let i = 1; i <= 8; i++) {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4 foto';
        col.classList.add(categoriasImagenes[i]);

        const img = document.createElement('img');
        img.src = `../img/${i}.jpg`;
        img.alt = `Diseño ${i}`;
        img.className = 'img-fluid';

        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.style.display = 'block';
        });

        col.appendChild(img);
        galleryRow.appendChild(col);
    }

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    function cambiarFiltro(event) {
        const valorSeleccionado = event.target.id;
        mostrarPorCategoria(filtros[valorSeleccionado]);
    }

    function borrarFiltros() {
        mostrarPorCategoria("todos");
    }

    function mostrarPorCategoria(categoria) {
        const todas = document.querySelectorAll('.foto');
        todas.forEach(elem => elem.style.display = "none");

        if (categoria === "todos") {
            todas.forEach(elem => elem.style.display = "");
            estadoFiltrado.innerHTML = "Todos";
        } else {
            const seleccionadas = document.querySelectorAll(`.foto.${categoria}`);
            seleccionadas.forEach(elem => elem.style.display = "");
            estadoFiltrado.innerHTML = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        }
        estadoFiltrado.style.textAlign = "center";
    }
});


//CODIGO PARA DISENO.HTML
const productos = document.querySelectorAll('.productos div');
let seleccionado = false; // Variable para ver si está seleccionado

productos.forEach(producto => {
    producto.onclick = seleccionar;
});

function seleccionar() {
    if (seleccionado) {
        this.style.border = ""; 
    } else {
        this.style.border = "5px solid #77A290"; 
    }    
    seleccionado = !seleccionado;
    
}
// FIN CODIGO PARA DISENO.HTML