//Servicios
const telefono = 920210938;

fetch('https://inmedia.pe/servicios/publicidad-digital/servicios.json')
    .then(response => response.json())
    .then(data => {
        const servicesContainer = document.getElementById('servicios');

        data.servicios.forEach(servicio => {
            let servicioCard = document.createElement('div');
            servicioCard.classList.add('d-grid-auto-1', 'gap-5', 'card-flex', 'card-flex-3', 'padding-10', 'border-1-blue', 'border-radius-10');

            let icono = document.createElement('div');
            icono.className = 'icon-img icon-img-blue';

            let iconImg = document.createElement('img');
            iconImg.src = servicio.icono;
            iconImg.alt = servicio.iconoAlt;
            iconImg.width = 22;
            iconImg.height = 22;

            icono.appendChild(iconImg);

            let servicioInfo = document.createElement('div');
            servicioInfo.classList.add('d-flex-column', 'gap-10', 'height-100-x-100');

            let tituloDiv = document.createElement('div');
            tituloDiv.classList.add('card-title', 'card-title-1');

            let span1 = document.createElement('span');
            span1.textContent = servicio.titulo[0]["span-1"];
            let span2 = document.createElement('span');
            span2.textContent = servicio.titulo[0]["span-2"];

            tituloDiv.appendChild(span1);
            tituloDiv.appendChild(span2);

            let contentDiv = document.createElement('div');
            contentDiv.classList.add('d-flex-column');

            let texto1 = document.createElement('p');
            texto1.textContent = servicio.content[0]["parrafo-1"];
            let texto2 = document.createElement('p');
            texto2.textContent = servicio.content[0]["parrafo-2"];

            contentDiv.appendChild(texto1);
            contentDiv.appendChild(texto2);

            let LinkPaquete = document.createElement('a');
            LinkPaquete.classList.add('button-link', 'button-link-1', 'margin-top', 'ver-paquetes');

            let tituloServicio = `${span1.textContent} ${span2.textContent}`;
            let slug = tituloServicio.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/ñ/g, 'n')
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

            LinkPaquete.href = `#${slug}`;

            let buttonText = document.createElement('p');
            buttonText.classList.add('button-link-text');
            buttonText.textContent = 'Ver paquetes';

            LinkPaquete.appendChild(buttonText);

            LinkPaquete.addEventListener('click', function (event) {
                event.preventDefault();
                renderizarPaquetes(servicio, slug);
            });

            servicioInfo.appendChild(tituloDiv);
            servicioInfo.appendChild(contentDiv);
            servicioInfo.appendChild(LinkPaquete);

            servicioCard.appendChild(icono);
            servicioCard.appendChild(servicioInfo);

            servicesContainer.appendChild(servicioCard);
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

function renderizarPaquetes(servicio, slug) {
    if (!servicio.paquetes || servicio.paquetes.length === 0) {
        console.error(`El servicio ${slug} no tiene paquetes.`);
        return;
    }

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container-paquetes');
    modalContainer.id = slug;

    const modalY = document.createElement('div');
    modalY.classList.add('modal-y');

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

        if (Array.isArray(paquete.lista)) {
            paquete.lista.forEach(listaItem => {
                Object.values(listaItem).forEach(itemValue => {
                    const item = document.createElement('li');
                    const itemText = document.createElement('p');
                    itemText.textContent = itemValue;
                    item.appendChild(itemText);
                    listaPaquete.appendChild(item);
                });
            });
        } else {
            const noFeatures = document.createElement('li');
            noFeatures.textContent = 'No hay características disponibles';
            listaPaquete.appendChild(noFeatures);
        }

        const linkTexto = `Hola! *Inmedia Marketing Web* estoy interesado en adquirir el paquete: Publicidad digital > ${servicio.titulo[0]["span-1"]} ${servicio.titulo[0]["span-2"]} > ${paquete.titulo}`;
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
fetch('https://inmedia.pe/servicios/publicidad-digital/servicios.json')

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
            Object.keys(resp).forEach(key => {
                const FaqContentP = document.createElement('p');
                FaqContentP.classList.add('text', key);
                FaqContentP.textContent = resp[key];
                FaqContent.appendChild(FaqContentP);
            });
        });

        Faq.appendChild(FaqTitle);
        Faq.appendChild(FaqContent);

        FaqContainer.appendChild(Faq);
    });

    const eventScript = document.createElement('script');
    eventScript.src = '../../Componentes/Js/Faq.js';
    document.body.appendChild(eventScript);
}
