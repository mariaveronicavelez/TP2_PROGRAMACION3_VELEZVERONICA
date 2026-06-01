const items = [
    { nombre: 'Manzana', categoria: 'Fruta' },
    { nombre: 'Banana', categoria: 'Fruta' },
    { nombre: 'Pera', categoria: 'Fruta' },
    { nombre: 'Zanahoria', categoria: 'Verdura' },
    { nombre: 'Brócoli', categoria: 'Verdura' },
    { nombre: 'Zapallo', categoria: 'Verdura' }
];

const lista = document.getElementById('lista-frutas-verduras');
const btnTodas = document.getElementById('btn-todas');
const btnFrutas = document.getElementById('btn-frutas');
const mensaje = document.getElementById('mensaje-filtro');
const resultado = document.getElementById('resultado-frutas-verduras');
let filtroActual = null;

function actualizarBotonActivo() {
    btnTodas.classList.toggle('activo', filtroActual === null);
    btnFrutas.classList.toggle('activo', filtroActual === 'Fruta');
}

function actualizarContador(itemsFiltrados) {
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <p>Elementos mostrados: <strong>${itemsFiltrados.length}</strong></p>
        <p>${filtroActual ? `Filtrados por ${filtroActual.toLowerCase()}` : 'Mostrando todos los elementos'}</p>
    `;
}

function mostrarItems(filtro) {
    filtroActual = filtro;
    const itemsFiltrados = filtro ? items.filter((item) => item.categoria === filtro) : items;

    lista.innerHTML = '';
    itemsFiltrados.forEach((item) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta item';
        tarjeta.innerHTML = `<h3>${item.nombre}</h3><p>${item.categoria}</p>`;
        lista.appendChild(tarjeta);
    });

    mensaje.textContent = filtro ? `Mostrando solo ${filtro.toLowerCase()}s` : 'Mostrando todos los elementos';
    actualizarBotonActivo();
    actualizarContador(itemsFiltrados);
}

btnTodas.addEventListener('click', () => mostrarItems(null));
btnFrutas.addEventListener('click', () => mostrarItems('Fruta'));

mostrarItems(null);
