//Servicios
const telefono = 920210938;

fetch('https://inmedia.pe/servicios/video-marketing/servicios.json')
    .then(response => response.json())
    .then(data => renderServicios(data.servicios))
    .catch(error => console.error('Error al cargar el JSON:', error));

function renderServicios(servicios) {
    const container = document.getElementById('servicios');
    
    servicios.forEach(servicio => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('d-grid-auto-1', 'gap-5', 'card-flex', 'card-flex-3', 'padding-20', 'border-1-blue', 'border-radius-10');

        // Renderizar icono
        const icon = document.createElement('div');
        icon.className = 'icon-img icon-img-blue';

        let iconImg = document.createElement('img');
        iconImg.src = servicio.icono;
        iconImg.alt = servicio.iconoAlt;
        iconImg.width = 22;
        iconImg.height = 22;

        icon.appendChild(iconImg);
        serviceDiv.appendChild(icon);

        // Contenedor para el contenido del servicio
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('d-flex-column', 'gap-10', 'height-100-x-100');

        // Título
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('d-flex-column');
        
        const titulo = servicio.titulo[0];
        let span1 = '';
        
        if (titulo) {
            if (titulo['span-1']) {
                span1 = titulo['span-1'];
                titleDiv.appendChild(createSpan('span-1', span1, 'text-title', 'color-blue'));
            }
            titulo['span-2'] && titleDiv.appendChild(createSpan('span-2', titulo['span-2'], 'text-title', 'color-blue'));
            titulo['span-3'] && titleDiv.appendChild(createSpan('span-3', titulo['span-3'], 'text-title', 'color-light-blue'));
        }
        
        contentDiv.appendChild(titleDiv);

        // Contenido del servicio
        const contenidoDiv = document.createElement('div');
        contenidoDiv.classList.add('d-flex-column', 'contenido');
        
        servicio.contenido.forEach(item => {
            const contentItemDiv = document.createElement('div');
            contentItemDiv.classList.add('d-flex-column', 'gap-5');

            if (item.titulo) {
                const tituloP = document.createElement('p');
                tituloP.classList.add('text');
                tituloP.innerHTML = `<b class="color-blue">${item.titulo}</b>`;
                contentItemDiv.appendChild(tituloP);
            }

            const ul = document.createElement('ul');
            ul.classList.add('card-ul');

            const li = document.createElement('li');
            li.innerHTML = `<p class="text">${item.texto}</p>`;
            ul.appendChild(li);

            contentItemDiv.appendChild(ul);
            contenidoDiv.appendChild(contentItemDiv);
        });

        contentDiv.appendChild(contenidoDiv);

        // Botón para ver paquetes
        const link = document.createElement('a');
        
        const hrefValue = `#${span1.toLowerCase().replace(/ /g, '-')}`;
        link.href = hrefValue;

        link.classList.add('button-link', 'button-link-1', 'margin-top');
        link.innerHTML = `
            <p class="button-link-text">Ver paquetes</p>
            <i class="fa-solid fa-arrow-right"></i>
        `;
        link.addEventListener('click', function(event) {
            event.preventDefault();
            renderizarPaquetes(servicio, hrefValue.substring(1));
        });
        
        contentDiv.appendChild(link);
        serviceDiv.appendChild(contentDiv);
        container.appendChild(serviceDiv);
    });
}

function createSpan(className, text, ...additionalClasses) {
    const span = document.createElement('span');
    span.classList.add(className, ...additionalClasses);
    span.textContent = text;
    return span;
}

function renderizarPaquetes(servicio, slug) {
    if (!servicio.paquetes || servicio.paquetes.length === 0) {
        console.error(`El servicio ${slug} no tiene paquetes.`);
        return;
    }

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container-paquetes');
    modalContainer.id = slug;

    const modalY = document.createElement('div');
    modalY.classList.add('modal-y-min');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const tituloPaquetes = document.createElement('p');
    tituloPaquetes.classList.add('block-title', 'margin-bottom-20');
    tituloPaquetes.textContent = `${servicio.titulo[0]["span-1"]} ${servicio.titulo[0]["span-2"]}`;

    const nav = document.createElement('nav');
    nav.classList.add('d-flex-justify-center', 'gap-10', 'd-flex-wrap');

    const closeButton = document.createElement('a');
    closeButton.href = '';
    closeButton.classList.add('modal-content-close');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeButton.addEventListener('click', function (event) {
        event.preventDefault();
        modalContainer.remove();
    });

    nav.appendChild(closeButton);

    servicio.paquetes.forEach(paquete => {
        const paqueteCard = document.createElement('ul');
        paqueteCard.classList.add('card-flex', 'card-flex-3', 'd-flex-column', 'gap-10', 'bg-blue', 'padding-10', 'border-radius-10');

        const paqueteTop = document.createElement('div');
        paqueteTop.classList.add('paquete-top');

        const paqueteTitulo = document.createElement('p');
        paqueteTitulo.classList.add('text-title', 'color-white');
        paqueteTitulo.textContent = paquete.titulo;

        const paquetePrecio = document.createElement('div');
        paquetePrecio.classList.add('paquete-pryce');

        const pryce = document.createElement('div');
        pryce.classList.add('pryce');

        const coin = document.createElement('b');
        coin.classList.add('coin', 'color-white');
        coin.textContent = 'S/.';

        const precio = document.createElement('p');
        precio.classList.add('block-title', 'color-white');
        precio.textContent = paquete.precio;

        const frecuencia = document.createElement('p');
        frecuencia.classList.add('text', 'color-white');
        frecuencia.textContent = '/ mensual';

        pryce.appendChild(coin);
        pryce.appendChild(precio);
        paquetePrecio.appendChild(pryce);
        paquetePrecio.appendChild(frecuencia);

        paqueteTop.appendChild(paqueteTitulo);
        paqueteTop.appendChild(paquetePrecio);

        const listaPaquete = document.createElement('ul');
        listaPaquete.classList.add('card-ul');

        for (let key in paquete) {
            if (key.startsWith('lista')) {
                const listaItems = paquete[key];
                listaItems.forEach(lista => {
                    const tituloLista = document.createElement('p');
                    tituloLista.classList.add('text-title', 'color-white');
                    tituloLista.textContent = lista.titulo;
                    listaPaquete.appendChild(tituloLista);

                    lista.lista.forEach(listaItem => {
                        Object.values(listaItem).forEach(itemValue => {
                            const item = document.createElement('li');
                            const itemText = document.createElement('p');
                            itemText.textContent = itemValue;
                            item.appendChild(itemText);
                            listaPaquete.appendChild(item);
                        });
                    });
                });
            }
        }

        const linkTexto = `Hola! *Inmedia Marketing Web* estoy interesado en adquirir el paquete: Video Marketing > ${servicio.titulo[0]["span-1"]} ${servicio.titulo[0]["span-2"]} > ${paquete.titulo}`;
        const adquirirButton = document.createElement('a');
        const whatsappLink = `https://wa.me/51${telefono}?text=${encodeURIComponent(linkTexto)}`;
        adquirirButton.href = whatsappLink;
        adquirirButton.target = '_blank';

        adquirirButton.classList.add('button-link', 'button-link-1-2', 'margin-top');
        adquirirButton.innerHTML = '<p class="button-link-text">Adquirir ahora</p><i class="fa-solid fa-arrow-right"></i>';

        paqueteCard.appendChild(paqueteTop);
        paqueteCard.appendChild(listaPaquete);
        paqueteCard.appendChild(adquirirButton);

        nav.appendChild(paqueteCard);
    });

    modalContent.appendChild(tituloPaquetes);
    modalContent.appendChild(nav);

    modalY.appendChild(modalContent);
    modalContainer.appendChild(modalY);

    document.body.appendChild(modalContainer);
}


// FAQ
fetch('https://inmedia.pe/servicios/video-marketing/servicios.json')

.then(response => {
    if (!response.ok) {
        throw new Error('Error al obtener el archivo JSON');
    }
    return response.json();
})

.then(data => {
    const faqs = data.faq;
    renderFAQ(faqs);
})

.catch(error => {
    console.error('Error al renderizar FAQ:', error);
});

function renderFAQ(faqs){
    const FaqContainer = document.getElementById('faq');
    FaqContainer.classList.add('d-flex-column', 'gap-5');

    faqs.forEach(faq => {
        const Faq = document.createElement('div');
        Faq.classList.add('faq-target', `faq-target-${faq.id}`);

        const FaqTitle = document.createElement('button');
        FaqTitle.classList.add('faq-target-title', 'd-flex-justify-between', 'gap-10');

        const Titulo = document.createElement('p');
        Titulo.classList.add('color-blue');

        const TituloB = document.createElement('b');
        TituloB.textContent = faq.titulo;

        const Icono = document.createElement('i');
        Icono.classList.add('fa-solid', 'fa-angle-down', 'color-blue');

        Titulo.appendChild(TituloB);
        FaqTitle.appendChild(Titulo);
        FaqTitle.appendChild(Icono);

        const FaqContent = document.createElement('div');
        FaqContent.classList.add('faq-target-content');

        faq.respuesta.forEach(resp => {
            const FaqContentP1 = document.createElement('p');
            FaqContentP1.classList.add('text', 'texto-1');
            FaqContentP1.textContent = resp['parrafo-1'];
            FaqContent.appendChild(FaqContentP1);

            if (resp['parrafo-2']) {
                const FaqContentP2 = document.createElement('p');
                FaqContentP2.classList.add('text', 'texto-2');
                FaqContentP2.textContent = resp['parrafo-2'];
                FaqContent.appendChild(FaqContentP2);
            }
        });

        Faq.appendChild(FaqTitle);
        Faq.appendChild(FaqContent);

        FaqContainer.appendChild(Faq);
    });

    const eventScript = document.createElement('script');
    eventScript.src = '../../Componentes/Js/Faq.js';
    document.body.appendChild(eventScript);
}
