//Servicios
const telefono = 920210938;

function renderServicios(servicios) {
    const container = document.getElementById('servicios');
    container.innerHTML = '';

    servicios.forEach(servicio => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('d-grid-auto-1', 'card-flex-3', 'gap-10', 'padding-20', 'border-1-blue', 'border-radius-10');

        serviceElement.innerHTML = `
            <div class="icon-img icon-img-blue">
                <img src="${servicio.icono}" alt="${servicio.iconoAlt}" width="22" height="22" />
            </div>
            
            <div class="d-flex-column">
                <div class="card-title card-title-1">
                    <span>${servicio.titulo[0]['span-1']}</span>
                    <span>${servicio.titulo[0]['span-2']}</span>
                </div>
                <ul class="card-ul">
                    <li>
                        <p class="text">${servicio.texto}</p>
                    </li>
                </ul>
            </div>
        `;

        container.appendChild(serviceElement);
    });
}

fetch('https://inmedia.pe/servicios/marketing-estrategico/servicios.json')

.then(response => response.json())
.then(data => {
    renderServicios(data.servicios);
})
.catch(error => {
    console.error('Error al cargar el JSON:', error);
});

//Paquetes
function renderPaquetes(paquetes) {
    const container = document.querySelector('.m-e-paquetes');
    // container.innerHTML = ''; // Limpiar el contenedor

    paquetes.forEach(paquete => {
        // Crear el contenedor de cada paquete
        const paqueteElement = document.createElement('div');
        paqueteElement.classList.add('card-flex-3', 'padding-20', 'bg-blue', 'border-radius-10', 'd-flex-column', 'gap-10');

        // Crear la lista de características
        let listaHTML = '<ul class="card-ul">';
        const items = paquete.lista[0]; // 'lista' es un objeto, así que tomamos el primer elemento
        Object.keys(items).forEach(key => {
            listaHTML += `<li>
                <p class="color-white">${items[key]}</p>
            </li>`;
        });
        listaHTML += '</ul>';

        // Agregar los detalles del paquete
        paqueteElement.innerHTML = `
            <p class="text-title color-white text-center">${paquete.titulo}</p>
            <p class="color-white text-center">S/.<b class="color-white block-title">${paquete.precio}</b> /pago único</p>
            <p class="color-white">${paquete.texto}</p>
            ${listaHTML}
        `;

        const linkTexto = `Hola! *Inmedia Marketing Web* estoy interesado en adquirir el paquete: Marketing estratégico > ${paquete.titulo}`;
        const adquirirButton = document.createElement('a');
        const whatsappLink = `https://wa.me/51${telefono}?text=${encodeURIComponent(linkTexto)}`;
        adquirirButton.href = whatsappLink;
        adquirirButton.target = '_blank';

        adquirirButton.classList.add('button-link', 'button-link-1-2', 'margin-top');
        adquirirButton.innerHTML = '<p class="button-link-text">Adquirir ahora</p><i class="fa-solid fa-arrow-right"></i>';

        // Agregar el paquete al contenedor
        paqueteElement.appendChild(adquirirButton);
        container.appendChild(paqueteElement);
    });
}

// Obtener los datos del JSON y renderizarlos
fetch('https://inmedia.pe/servicios/marketing-estrategico/servicios.json')
    .then(response => response.json())
    .then(data => {
        renderPaquetes(data.paquetes); // Llamar a la función con los paquetes del JSON
    })
    .catch(error => {
        console.error('Error al cargar el JSON:', error);
    });
