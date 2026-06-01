const meriendas = [
    'Yogur con granola',
    'Banana con maní',
    'Tostada integral con palta',
    'Frutos secos mixtos',
    'Ensalada de frutas'
];

const listaMeriendas = document.getElementById('lista-meriendas');
const btnContar = document.getElementById('btn-contar');
const resultado = document.getElementById('resultado');

const elementosMeriendas = meriendas.map((nombre, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${nombre}`;
    return li;
});

elementosMeriendas.forEach((li) => listaMeriendas.appendChild(li));

btnContar.addEventListener('click', () => {
    resultado.style.display = 'block';
    resultado.innerHTML = `
        <p>Total de meriendas: <strong>${meriendas.length}</strong></p>
        <p>Menú: ${meriendas.join(', ')}.</p>
    `;
});
