// Slider
let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for slider buttons
document.querySelector('.slider-button-prev')?.addEventListener('click', () => moveSlide(-1));
document.querySelector('.slider-button-next')?.addEventListener('click', () => moveSlide(1));

// Fetch and render microservicios
const container = document.querySelector('#index-microservicios');

if (container) {
    fetch('https://inmedia.pe/index.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener el archivo JSON');
            }
            return response.json();
        })
        .then(data => renderMicroservices(data.microservicios))
        .catch(error => console.error('Error:', error));
}

function renderMicroservices(microservicios) {
    microservicios.forEach(service => {
        const MicroservicioDiv = document.createElement('div');
        MicroservicioDiv.classList.add('d-grid-auto-1', 'gap-5', 'card-flex', 'card-flex-4', 'padding-10', 'border-1-blue', 'border-radius-10');

        MicroservicioDiv.innerHTML = `
            <div class="icon-img icon-img-blue">
                <img src="${service.iconoImg}" alt="${service.iconoImgAlt}">
            </div>
            <div class="d-flex-column gap-10 height-100-x-100">
                <div class="card-title card-title-1">
                    <span>${service.titulo[0]['span-1']}</span>
                    <span>${service.titulo[0]['span-2']}</span>
                </div>
                <p class="text">${service.texto}</p>
                <a class="button-link button-link-1 margin-top ver-paquetes" href="${service.link}">
                    <p class="button-link-text">Ver paquetes</p>
                </a>
            </div>
        `;
        container.appendChild(MicroservicioDiv);
    });
}

// Fetch and render FAQ
const FaqContainer = document.getElementById('faq');

if (FaqContainer) {
    fetch('https://inmedia.pe/index.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener el archivo JSON');
            }
            return response.json();
        })
        .then(data => renderFAQ(data.faq))
        .catch(error => console.error('Error al renderizar FAQ:', error));
}

function renderFAQ(faqs) {
    FaqContainer.classList.add('d-flex-column', 'gap-5');

    faqs.forEach(faq => {
        const Faq = document.createElement('div');
        Faq.classList.add('faq-target', `faq-target-${faq.id}`);

        Faq.innerHTML = `
            <button class="faq-target-title d-flex-justify-between gap-10" type="button">
                <p class="color-blue"><b>${faq.titulo}</b></p>
                <i class="fa-solid fa-angle-down color-blue"></i>
            </button>
            <div class="faq-target-content">
                ${faq.respuesta.map(resp => `
                    <p class="text texto-1">${resp['parrafo-1']}</p>
                    ${resp['parrafo-2'] ? `<p class="text texto-2">${resp['parrafo-2']}</p>` : ''}
                `).join('')}
            </div>
        `;
        FaqContainer.appendChild(Faq);
    });
}
