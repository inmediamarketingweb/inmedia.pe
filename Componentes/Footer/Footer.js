//Formulario de suscripcion
const $suscripcion = document.querySelector('#formulario-de-suscripcion');
const modalSuscripcion = document.querySelector('.footer-modal-container');

$suscripcion.addEventListener('submit', handleSubmit);
async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: { 'Accept': 'application/json' }
    });
    if (response.ok){
        this.reset();
        suscrito();
    }
}

function suscrito(){
    modalSuscripcion.classList.add('active');

    setTimeout(function(){
        modalSuscripcion.classList.remove('active');
    }, 3200);
}

const modalSuscripcionClose = document.querySelector('.footer-modal-close');

modalSuscripcionClose.addEventListener('click', function(){
    modalSuscripcion.classList.remove('active');
});

//Servicios
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://inmedia.pe/Componentes/Json/MenuLinks.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('footer-services');
        const ul = document.createElement('ul');
        ul.className = 'card-ul gap-10';

        data.forEach(service => {
            const li = document.createElement('li');

            const a = document.createElement('a');
            a.href = service.link;
            a.className = 'text-underline';
            a.textContent = service.texto;
            a.title = service.title;

            const p = document.createElement('p');
            p.appendChild(a);

            li.appendChild(p);
            ul.appendChild(li);
        });

        container.appendChild(ul);
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});

//Páginas
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://inmedia.pe/Componentes/Json/TopLinks.json')
        .then(response => response.json())
        .then(data => {
            const Container = document.getElementById('footer-pages');
            const ul = document.createElement('ul');
            ul.className = 'top-links d-flex-wrap d-flex-center-center';

            data.forEach((enlace) => {
                const li = document.createElement('li');
                const a = document.createElement('a');

                a.href = enlace.link;
                a.className = `menu-link menu-link-${enlace.id}`

                const icon = document.createElement('i');
                icon.className = 'fa-solid fa-angle-right';

                const h2 = document.createElement('h2');
                h2.textContent = enlace.texto;

                a.appendChild(icon);
                a.appendChild(h2);
                li.appendChild(a);
                ul.appendChild(li);
            });

            Container.appendChild(ul);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});