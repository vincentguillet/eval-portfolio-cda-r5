// Gestion du formulaire
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    alert(`L'envoi de message n'est pas encore disponible. Merci de réessayer ultérieurement.`);
    this.reset();
});

// Gestion des boutons "En savoir plus"
document.querySelectorAll('.btn-more').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`Pas encore de contenu supplémentaire à afficher. Revenez bientôt !`);
        this.reset();
    });
});