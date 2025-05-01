//Header
const Header = document.querySelector('header');
const HeaderTop = document.querySelector('.header-top-container');

const Menu = document.querySelector('#menu-container');

const MenuButton = document.querySelector('.menu-button');
MenuButton.addEventListener('click', MenuActive);

window.addEventListener('scroll', Scroll);

function Scroll(){
    var ypos = window.pageYOffset;

    if (ypos > 50){
        Header.classList.add('active');
        HeaderTop.classList.add('active');
        Menu.classList.add('scroll');
    } else {
        Header.classList.remove('active');
        HeaderTop.classList.remove('active');
        Menu.classList.remove('scroll');
    }
}

function MenuActive(){
    MenuButton.classList.toggle('active');
    Menu.classList.toggle('active')
}

function MenuDesactive(){
    MenuButton.classList.remove('active');
    Menu.classList.remove('active')
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://inmedia.pe/Componentes/Json/TopLinks.json')
        .then(response => response.json())
        .then(data => {
            const Container = document.getElementById('header-top-links');
            const ul = document.createElement('ul');
            ul.className = 'top-links';

            data.forEach((enlace) => {
                const li = document.createElement('li');

                if (enlace.id === 7) {
                    // Crear div con clase menu-link
                    const button = document.createElement('div');
                    button.className = `menu-link menu-link-${enlace.id}`;
                    
                    // Agregar el texto del botón
                    const buttonText = document.createElement('h2');
                    buttonText.textContent = enlace.texto;
                    button.appendChild(buttonText);

                    const innerUl = document.createElement('ul');
                    innerUl.className = 'submenu';

                    enlace.lista.forEach((item) => {
                        const innerLi = document.createElement('li');
                        const img = document.createElement('img');
                        img.src = item.img;
                        img.alt = `Bandera de ${img.texto}`;

                        const span = document.createElement('span');
                        span.textContent = item.texto;

                        innerLi.appendChild(img);
                        innerLi.appendChild(span);
                        innerUl.appendChild(innerLi);
                    });

                    button.appendChild(innerUl);
                    li.appendChild(button);
                } else {
                    const a = document.createElement('a');
                    a.href = enlace.link;
                    a.className = `menu-link menu-link-${enlace.id}`;
                    a.title = enlace.title;

                    const h2 = document.createElement('h2');
                    h2.textContent = enlace.texto;

                    a.appendChild(h2);
                    li.appendChild(a);
                }

                ul.appendChild(li);
            });

            Container.appendChild(ul);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});



//
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://inmedia.pe/Componentes/Json/RedesSociales.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('social-networks');
            const ul = document.createElement('ul');
            ul.className = 'networks';

            data.forEach((network) => {
                const li = document.createElement('li');
                const a = document.createElement('a');

                a.href = network.link;
                a.className = `network network-${network.id}`;
                a.title = network.title;

                const icon = document.createElement('img');
                icon.src= `${network.iconoSrc}`;
                icon.alt = `icono de ${network.text}`;
                icon.width = 18;
                icon.height = 18;

                const text = document.createElement('span');
                text.textContent = network.texto;

                a.appendChild(icon);
                a.appendChild(text);
                li.appendChild(a);
                ul.appendChild(li);
            });

            container.appendChild(ul);
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});

//
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://inmedia.pe/Componentes/Json/MenuLinks.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('menu-container');
        const ul = document.createElement('ul');
        ul.className = "menu";

        data.forEach(service => {
            const li = document.createElement('li');
            let linkElement;

            if (service.sublinks && service.sublinks.length > 0) {
                const div = document.createElement('div');
                div.className = `link link-${service.id} link-sub-link-7`;

                const a = document.createElement('a');
                a.href = service.link;
                a.title = service.title;

                const h2 = document.createElement('h2');
                h2.textContent = service.texto;
                a.appendChild(h2);

                div.appendChild(a);
                
                const icono = document.createElement('i');
                icono.classList.add('fa-solid', 'fa-angle-down');
                div.appendChild(icono);
                
                li.appendChild(div);
            } else {
                linkElement = document.createElement('a');
                linkElement.href = service.link;
                linkElement.className = `link link-${service.id}`;

                const h2 = document.createElement('h2');
                h2.textContent = service.texto;

                linkElement.appendChild(h2);
                li.appendChild(linkElement);
            }

            if (service.sublinks && service.sublinks.length > 0) {
                const SubUl = document.createElement('ul');
                SubUl.className = 'sublinks';

                service.sublinks.forEach(sublink => {
                    const SubLi = document.createElement('li');
                    
                    const SubA = document.createElement('a');
                    SubA.href = sublink.sublink;
                    SubA.title = SubA.texto;
                    
                    const SubH3 = document.createElement('h3');
                    SubH3.textContent = sublink.texto;
                    SubA.appendChild(SubH3);

                    const SubIcon = document.createElement('img');
                    SubIcon.src = sublink.icono;
                    SubIcon.alt = sublink.iconoAlt;
                    SubIcon.width = 16,
                    SubIcon.height = 16;

                    SubA.appendChild(SubIcon);

                    SubLi.appendChild(SubA);

                    SubUl.appendChild(SubLi);
                });

                li.appendChild(SubUl);
            }

            ul.appendChild(li);
        });

        container.appendChild(ul);

        const subLinkSevens = document.querySelectorAll('.link-sub-link-7');
        subLinkSevens.forEach(subLinkSeven => {
            subLinkSeven.addEventListener('click', function() {
                const subLinks = this.closest('li').querySelector('.sublinks');
                if (subLinks) {
                    subLinks.classList.toggle('active');
                }
            });
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});
