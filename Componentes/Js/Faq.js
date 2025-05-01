// FAQ Toggle Behavior
function initializeFAQToggle() {
    const FaqTargets = document.querySelectorAll('.faq-target');
    const FaqTitles = document.querySelectorAll('.faq-target-title');

    if (FaqTargets.length === 0 || FaqTitles.length === 0) {
        console.error('No se encontraron FAQs para inicializar el comportamiento.');
        return;
    }

    FaqTitles.forEach((button, index) => {
        button.addEventListener('click', () => {
            FaqTargets.forEach((FaqTarget, i) => {
                const FaqContent = FaqTarget.querySelector('.faq-target-content');

                if (i === index) {
                    // Alternar la clase 'active' en el faq-target actual
                    FaqTarget.classList.toggle('active');
                } else {
                    // Remover la clase 'active' de los dem¨¢s faq-target
                    FaqTarget.classList.remove('active');
                }
            });
        });
    });
}

// Usar un MutationObserver para esperar a que se rendericen din¨¢micamente los FAQs
const observer = new MutationObserver(() => {
    const FaqContainer = document.getElementById('faq');
    if (FaqContainer && FaqContainer.querySelector('.faq-target')) {
        initializeFAQToggle();
        observer.disconnect(); // Detener la observaci¨®n una vez que se han renderizado los FAQs
    }
});

observer.observe(document.body, { childList: true, subtree: true });
