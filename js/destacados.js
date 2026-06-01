const tarjetas = document.querySelectorAll('.tarjeta');
const resultado = document.getElementById('resultado');

function actualizarContador() {
    const seleccionadas = Array.from(tarjetas).filter((tarjeta) => tarjeta.classList.contains('seleccionada')).length;
    resultado.style.display = 'block';
    resultado.textContent = `Tarjetas seleccionadas: ${seleccionadas}`;
}

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('seleccionada');
        actualizarContador();
    });
});

actualizarContador();
