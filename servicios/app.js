document.addEventListener('DOMContentLoaded', function() {
    const listaServicios = document.getElementById('lista-servicios');
    const slider = document.getElementById('slider'); // Verifica que este ID exista en tu HTML

    // Asegurarse de que el slider esté presente
    if (!slider) {
        console.error("El contenedor del slider no existe. Asegúrate de tener un elemento con id='slider' en tu HTML.");
        return;
    }

    // Establecer margin-left en 0 por defecto
    slider.style.marginLeft = '0%';

    fetch('https://inmedia.pe/Componentes/Json/MenuLinks.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(servicio => {
                const li = document.createElement('li');

                const button = document.createElement('button');
                button.type = 'button';
                button.classList.add('services-button', `services-button-${servicio.id}`);

                button.setAttribute('data-category', servicio.id === 0 ? 'all' : `category-${servicio.id}`);

                const icon = document.createElement('i');
                icon.classList.add('fa-solid', 'fa-chevron-right');

                const h2 = document.createElement('h2');
                h2.textContent = servicio.texto;

                button.appendChild(icon);
                button.appendChild(h2);

                li.appendChild(button);

                listaServicios.appendChild(li);
            });

            const serviceButtons = document.querySelectorAll('.services-button');
            const categories = document.querySelectorAll('.category');

            categories.forEach(category => {
                category.style.display = 'flex';
                category.style.flexDirection = 'column';
            });

            serviceButtons.forEach(button => {
                button.addEventListener('click', function() {
                    serviceButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    const categoryToShow = this.getAttribute('data-category');

                    // Ajusta el margin-left del slider dependiendo de la categoría seleccionada
                    if (categoryToShow === 'all') {
                        slider.style.marginLeft = '0%'; // Si es 'all', margin-left = 0%
                    } else {
                        const categoryId = parseInt(categoryToShow.split('-').pop()); // Obtener el número de la categoría
                        const offset = (categoryId - 1) * -100; // Calcula el margin-left en base al número
                        slider.style.marginLeft = `${offset}%`;
                    }

                    if (categoryToShow === 'all') {
                        categories.forEach(category => {
                            category.style.display = 'flex';
                            category.style.flexDirection = 'column';
                        });
                    } else {
                        categories.forEach(category => {
                            category.style.display = 'none';
                        });

                        const selectedCategory = document.querySelector(`.${categoryToShow}`);
                        if (selectedCategory) {
                            selectedCategory.style.display = 'flex';
                            selectedCategory.style.flexDirection = 'column';
                        }
                    }
                });
            });

            // Selecciona el primer botón automáticamente
            document.querySelector('.services-button-0').click();
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
});


//Renderizar los servicios
//Diseño web
const disenowebURL = 'https://inmedia.pe/servicios/diseno-web/servicios.json';

fetch(disenowebURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('diseno-web');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
        <div class="icon-img icon-img-blue">
            <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
        </div>

        <div class="card-title card-title-1">
            <span>${servicio.titulo[0]['span-1']}</span>
            <span>${servicio.titulo[0]['span-2']}</span>
        </div>
        
        <a href="https://inmedia.pe/servicios/diseno-web/" class="text-link margin-left margin-top">
            <p class="color-light-blue">Ver más</p>
            <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
        </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Marketing estratégico
const marketingestrategicoURL = 'https://inmedia.pe/servicios/marketing-estrategico/servicios.json';

fetch(marketingestrategicoURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('marketing-estrategico');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
        <div class="icon-img icon-img-blue">
            <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
        </div>

        <div class="card-title card-title-1">
            <span>${servicio.titulo[0]['span-1']}</span>
            <span>${servicio.titulo[0]['span-2']}</span>
        </div>
        
        <a href="https://inmedia.pe/servicios/marketing-estrategico/" class="text-link margin-left margin-top">
            <p class="color-light-blue">Ver más</p>
            <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
        </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Marketing estratégico
const publicidaddigitalURL = 'https://inmedia.pe/servicios/publicidad-digital/servicios.json';

fetch(publicidaddigitalURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('publicidad-digital');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
        <div class="icon-img icon-img-blue">
            <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
        </div>

        <div class="card-title card-title-1">
            <span>${servicio.titulo[0]['span-1']}</span>
            <span>${servicio.titulo[0]['span-2']}</span>
        </div>
        
        <a href="https://inmedia.pe/servicios/publicidad-digital/" class="text-link margin-left margin-top">
            <p class="color-light-blue">Ver más</p>
            <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
        </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Diseño gráfico
const disenograficoURL = 'https://inmedia.pe/servicios/diseno-grafico/servicios.json';

fetch(disenograficoURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('diseno-grafico');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
            <div class="icon-img icon-img-blue">
                <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
            </div>

            <span class="text-title color-blue">${servicio.titulo[0]['span-1']} ${servicio.titulo[0]['span-2']}</span>
            
            <a href="https://inmedia.pe/servicios/diseno-grafico/" class="text-link margin-left margin-top">
                <p class="color-light-blue">Ver más</p>
                <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
            </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Video marketing
const videomarketingURL = 'https://inmedia.pe/servicios/video-marketing/servicios.json';

fetch(videomarketingURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('video-marketing');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
            <div class="icon-img icon-img-blue">
                <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
            </div>

            <span class="text-title color-blue">${servicio.titulo[0]['span-1']} ${servicio.titulo[0]['span-2']}</span>
            
            <a href="https://inmedia.pe/servicios/video-marketing/" class="text-link margin-left margin-top">
                <p class="color-light-blue">Ver más</p>
                <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
            </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Chatbot y ventas
const chatbotyventasURL = 'https://inmedia.pe/servicios/chatbot-&-ventas/servicios.json';

fetch(chatbotyventasURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('chatbot-&-ventas');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
            <div class="icon-img icon-img-blue">
                <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
            </div>

            <span class="text-title color-blue">${servicio.titulo[0]['span-1']} ${servicio.titulo[0]['span-2']}</span>
            
            <a href="https://inmedia.pe/servicios/chatbot-&-ventas/" class="text-link margin-left margin-top">
                <p class="color-light-blue">Ver más</p>
                <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
            </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Infraestructura TI
const infraestructuratiURL = 'https://inmedia.pe/servicios/infraestructura-ti/servicios.json';

fetch(infraestructuratiURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('infraestructura-ti');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
            <div class="icon-img icon-img-blue">
                <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
            </div>

            <span class="text-title color-blue">${servicio.titulo[0]['span-1']} ${servicio.titulo[0]['span-2']}</span>
            
            <a href="${servicio.link}" class="text-link margin-left margin-top">
                <p class="color-light-blue">Ver más</p>
                <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
            </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Gestión de redes sociales
const gestionderedesURL = 'https://inmedia.pe/servicios/gestion-de-redes-sociales/servicios.json';

fetch(gestionderedesURL)
.then(response => response.json())
.then(data => {
    const serviciosContainer = document.getElementById('gestion-de-redes-sociales');

    data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('card-flex', 'card-flex-4', 'd-flex-column', 'padding-20', 'gap-5', 'border-radius-10', 'border-1-blue')

        servicioDiv.innerHTML = `
            <div class="icon-img icon-img-blue">
                <img src="${servicio.icono}" alt="${servicio.iconoAlt}"/>
            </div>

            <span class="text-title color-blue">${servicio.titulo[0]['span-1']} ${servicio.titulo[0]['span-2']}</span>
            
            <a href="https://inmedia.pe/servicios/gestion-de-redes-sociales/" class="text-link margin-left margin-top">
                <p class="color-light-blue">Ver más</p>
                <img src="https://inmedia.pe/Imagenes/Iconos/celeste/arrow-right-solid.svg" alt="icono de flecha a la derecha"/>
            </a>
        `;

        serviciosContainer.appendChild(servicioDiv);
    });
})
.catch(error => console.error('Error al obtener el JSON:', error));

//Slider
