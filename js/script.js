document.addEventListener('DOMContentLoaded', function() {
    const galleryRow = document.querySelector('#gallery .row');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    for (let i = 1; i <= 8; i++) {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';

        const img = document.createElement('img');
        img.src = `img/${i}.jpg`;
        img.alt = `Diseño ${i}`;
        img.className = 'img-fluid';

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
