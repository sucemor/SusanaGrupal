document.addEventListener('DOMContentLoaded', function() {
    const galleryRow = document.querySelector('#gallery .row');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    // Variable para mantener un seguimiento del filtro seleccionado
    var filtroActual = "todos"; // Valor predeterminado para mostrar todas las imágenes

    // Obtén todas las etiquetas <a> por su ID
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");

    // Agrega un evento "click" a cada etiqueta <a>
    a1.addEventListener('click', cambiarFiltro);
    a2.addEventListener('click', cambiarFiltro);
    a3.addEventListener('click', cambiarFiltro);
    a4.addEventListener('click', cambiarFiltro);
    a5.addEventListener('click', borrarFiltros); // Agrega un evento para "Borrar Filtros"

    for (let i = 1; i <= 8; i++) {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4 foto';

        const img = document.createElement('img');
        img.src = `../img/${i}.jpg`;
        img.alt = `Diseño ${i}`;
        img.className = 'img-fluid';

        switch (i) {
            case 1:
            case 2:
                col.className += " minimalista";
                break;
            case 5:
                col.className += " vintage";
                break;
            case 3:
            case 6:
            case 7:
                col.className += " moderno";
                break;
            case 4:
            case 8:
                col.className += " americano";
                break;
            default:
                break;
        }

        // Evento para mostrar el lightbox al hacer clic en la imagen
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.style.display = 'block';
        });

        col.appendChild(img);
        galleryRow.appendChild(col);
    }

    // Evento para ocultar el lightbox al hacer clic fuera de la imagen ampliada
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

function cambiarFiltro(event) {
    // Obtén el valor del atributo "id" de la etiqueta <a> clicada
    var valorSeleccionado = event.target.id;
    console.log("Valor seleccionado:", valorSeleccionado);

    // Oculta todas las imágenes con la clase "foto"
    var chaquetasTodas = document.getElementsByClassName("foto");
    for (var i = 0; i < chaquetasTodas.length; i++) {
        chaquetasTodas[i].style.display = "none";
    }
    
    // Mostrar imágenes específicas según el valor seleccionado
    if (valorSeleccionado === "a1") { // Vintage
        var chaquetasVintage = document.getElementsByClassName("vintage");
        for (var i = 0; i < chaquetasVintage.length; i++) {
            chaquetasVintage[i].style.display = "";
        }
        // Actualiza el filtro actual
        filtroActual = "vintage";
    } else if (valorSeleccionado === "a2") { // Moderno
        var chaquetasModerno = document.getElementsByClassName("moderno");
        for (var i = 0; i < chaquetasModerno.length; i++) {
            chaquetasModerno[i].style.display = "";
        }
        // Actualiza el filtro actual
        filtroActual = "moderno";
    } else if (valorSeleccionado === "a3") { // Minimalista
        var chaquetasMinimalista = document.getElementsByClassName("minimalista");
        for (var i = 0; i < chaquetasMinimalista.length; i++) {
            chaquetasMinimalista[i].style.display = "";
        }
        // Actualiza el filtro actual
        filtroActual = "minimalista";
    } else if (valorSeleccionado === "a4") { // Estilo Americano
        var chaquetasAmericano = document.getElementsByClassName("americano");
        for (var i = 0; i < chaquetasAmericano.length; i++) {
            chaquetasAmericano[i].style.display = "";
        }
        // Actualiza el filtro actual
        filtroActual = "americano";
    }
}

function borrarFiltros() {
    // Mostrar todas las imágenes cuando se hace clic en "Borrar Filtros"
    var chaquetasTodas = document.getElementsByClassName("foto");
    for (var i = 0; i < chaquetasTodas.length; i++) {
        chaquetasTodas[i].style.display = "";
    }
    
    // Actualiza el filtro actual a "todos"
    filtroActual = "todos";
}