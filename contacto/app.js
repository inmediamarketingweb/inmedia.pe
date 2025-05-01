//Formulario de contacto
const $contact = document.querySelector('#formulario-de-contacto');
const modalContact = document.querySelector('.contact-modal-container');

$contact.addEventListener('submit', handleSubmit);
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
        contacto();
    }
}

function contacto(){
    modalContact.classList.add('active');

    setTimeout(function(){
        modalContact.classList.remove('active');
    }, 5000);
}

const modalContactClose = document.querySelector('.contact-modal-close');

modalContact.addEventListener('click', function(){
    modalContact.classList.remove('active');
});