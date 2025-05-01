//Formulario de reclamos
const $complaint = document.querySelector('#formulario-de-reclamos');
const modalComplaint = document.querySelector('.complaint-modal-container');

$complaint.addEventListener('submit', handleSubmit);
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
        reclamoEnviado();
    }
}

function reclamoEnviado(){
    modalComplaint.classList.add('active');

    setTimeout(function(){
        modalComplaint.classList.remove('active');
    }, 5000);
}

const modalComplaintClose = document.querySelector('.complaint-modal-close');

modalComplaintClose.addEventListener('click', function(){
    modalComplaint.classList.remove('active');
});