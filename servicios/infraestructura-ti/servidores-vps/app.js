// URL del archivo JSON
const url = 'https://inmedia.pe/servicios/infraestructura-ti/servidores-vps/paquetes.json';

fetch(url)
    .then(response => response.json())
    .then(data => renderPaquetes(data.paquetes))
    .catch(error => console.error('Error al obtener el JSON:', error));

function renderPaquetes(paquetes){
    const container = document.getElementById('paquetes');
    const telefono = '920210938';

    paquetes.forEach(paquete => {
        const paqueteDiv = document.createElement('div');
        paqueteDiv.classList.add('card-flex-4', 'padding-20', 'border-1-blue', 'border-radius-10', 'd-flex-column');

        const titulo = document.createElement('h2');
        titulo.textContent = `${paquete.titulo}`;
        titulo.classList.add('color-blue', 'text-title', 'text-center')

        const pryceContainer = document.createElement('div');
        pryceContainer.classList.add('d-flex-center-center');
        
        const pryce = document.createElement('div');
        pryce.classList.add('pryce', 'd-flex-align-start');

        const signe = document.createElement('p');
        signe.classList.add('color-blue');
        signe.textContent = 'S/.';

        const precio = document.createElement('p');
        precio.textContent = `${paquete.precio}`;
        precio.classList.add('block-title');

        const fre = document.createElement('p');
        fre.classList.add('color-blue');
        fre.textContent = '/anual';

        pryce.appendChild(signe);
        pryce.appendChild(precio);

        pryceContainer.appendChild(pryce);
        pryceContainer.appendChild(fre);

        const lista = document.createElement('ul');
        lista.classList.add('card-ul', 'margin-bottom-20');
        paquete.lista.forEach(items => {
            for (let key in items) {
                const listItem = document.createElement('li');
                listItem.textContent = items[key];
                lista.appendChild(listItem);
            }
        });

        const linkTexto = `Hola! *Inmedia Marketing Web* estoy interesado en adquirir el paquete: Servidores VPS > ${paquete.titulo}`;
        const adquirirButton = document.createElement('a');
        const whatsappLink = `https://wa.me/51${telefono}?text=${encodeURIComponent(linkTexto)}`;
        adquirirButton.href = whatsappLink;
        adquirirButton.target = '_blank';

        adquirirButton.classList.add('button-link', 'button-link-1-2', 'margin-top');
        adquirirButton.innerHTML = '<p class="button-link-text">Adquirir ahora</p><i class="fa-solid fa-arrow-right"></i>';

        paqueteDiv.appendChild(titulo);
        paqueteDiv.appendChild(pryceContainer);
        paqueteDiv.appendChild(lista);
        paqueteDiv.appendChild(adquirirButton);

        container.appendChild(paqueteDiv);
    });
}
