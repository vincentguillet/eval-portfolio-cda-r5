// Gestion du formulaire
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    alert(`L'envoi de message n'est pas encore disponible. Merci de réessayer ultérieurement.`);
    this.reset();
});

// Animation des cartes au scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});