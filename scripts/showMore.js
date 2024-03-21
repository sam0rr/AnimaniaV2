document.addEventListener('DOMContentLoaded', function() {
    function showMoreCards() {
        document.querySelectorAll('.extra-anime-card').forEach(card => {
            card.classList.toggle('d-none');
        });

        const btn = document.querySelector('#toggleButton'); // Utilisez l'ID pour une sélection plus spécifique

        if (btn.innerText.includes('Voir plus')) {
            btn.innerText = 'Voir moins';
        } else {
            btn.innerText = 'Voir plus';
        }
    }

    // Liez l'événement de clic au bouton "Voir plus/Voir moins"
    document.querySelector('#toggleButton').addEventListener('click', showMoreCards);
});
