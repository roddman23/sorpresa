function revealGender() {
    // Definir el nombre de revelación fijo
    const name = 'Catalina';
    
    // Mostrar el mensaje de revelación
    document.getElementById('revealMessage').innerText = `¡Es ${name}!`;
    
    // Crear animación de confeti con colores de niña
    createConfetti(false);  // false para los colores de niña
}

function createConfetti(isBoy) {
    const colors = isBoy 
        ? ['blue', 'yellow', 'green'] 
        : ['pink', 'yellow', 'green'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti', ...colors.map(color => `${color}`));
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(confetti);
        
        // Eliminar confetti después de 2 segundos
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Contador regresivo desde el 1 de marzo de 2025
const countdownDate = new Date('February 25, 2025 00:00:00').getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `Tiempo restante: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown').innerHTML = "¡Es hora de revelar!";
    }
}, 1000)