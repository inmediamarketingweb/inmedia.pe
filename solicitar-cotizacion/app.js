//Formulario de solicitud de cotización
const $quote = document.querySelector('#formulario-de-cotizacion');
const modalquote = document.querySelector('.quote-modal-container');

$quote.addEventListener('submit', handleSubmit);
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
        solicitudEnviada();
    }
}

function solicitudEnviada(){
    modalquote.classList.add('active');

    setTimeout(function(){
        modalquote.classList.remove('active');
    }, 5000);
}

const modalquoteClose = document.querySelector('.quote-modal-close');

modalquote.addEventListener('click', function(){
    modalquote.classList.remove('active');
});