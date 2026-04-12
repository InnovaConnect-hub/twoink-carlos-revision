document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMACIONES DE SCROLL (Efecto Pop-in y Rebote)
    const elementosAnimados = document.querySelectorAll('.pop-in');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    elementosAnimados.forEach(elemento => {
        observador.observe(elemento);
    });

    const formulario = document.getElementById('formulario-contacto');
    if(formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();
            alert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
            formulario.reset();
        });
    }

    const faqPreguntas = document.querySelectorAll('.faq-pregunta');
    
    faqPreguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            const faqItem = pregunta.parentElement;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if(item !== faqItem) {
                    item.classList.remove('activa');
                }
            });

            faqItem.classList.toggle('activa');
        });
    });

});