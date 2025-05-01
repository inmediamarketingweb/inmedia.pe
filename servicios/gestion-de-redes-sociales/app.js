const telefono = 920210938;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://inmedia.pe/servicios/gestion-de-redes-sociales/servicios.json')
        .then(response => response.json())
        .then(data => renderServicios(data.servicios))
        .catch(error => console.error('Error al cargar el JSON:', error));
});

function renderServicios(servicios) {
    const container = document.getElementById('servicios');
    
    servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex-4', 'd-flex-column', 'padding-20', 'border-radius-10', 'border-1-blue');

        const icono = document.createElement('i');
        icono.className = servicio.icono;
        icono.classList.add('icon', 'icon-blue')

        const titulo = document.createElement('h3');
        titulo.innerHTML = `<span>${servicio.titulo[0]["span-1"]}</span> <span>${servicio.titulo[0]["span-2"]}</span>`;
        titulo.classList.add('text-title', 'color-blue')

        const lista = document.createElement('ul');
        lista.classList.add('card-ul', 'margin-bottom-20')
        Object.keys(servicio.lista[0]).forEach(item => {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.classList.add('text')
            p.textContent = servicio.lista[0][item];

            li.appendChild(p)
            lista.appendChild(li);
        });

        const linkTexto = `Hola! *Inmedia Marketing Web* estoy interesado en adquirir el paquete: Gestión de redes sociales > ${servicio.titulo[0]["span-1"]} ${servicio.titulo[0]["span-2"]}`;
        const adquirirButton = document.createElement('a');
        const whatsappLink = `https://wa.me/51${telefono}?text=${encodeURIComponent(linkTexto)}`;
        adquirirButton.href = whatsappLink;
        adquirirButton.target = '_blank';

        adquirirButton.classList.add('button-link', 'button-link-1-2', 'margin-top');
        adquirirButton.innerHTML = '<p class="button-link-text">Adquirir ahora</p><i class="fa-solid fa-arrow-right"></i>';

        servicioDiv.appendChild(icono);
        servicioDiv.appendChild(titulo);
        servicioDiv.appendChild(lista);

        servicioDiv.appendChild(adquirirButton);

        container.appendChild(servicioDiv);
    });
}

//FAQ
fetch('https://inmedia.pe/servicios/gestion-de-redes-sociales/servicios.json')

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

        faq.respuestas.forEach(resp => {
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