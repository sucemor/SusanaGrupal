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