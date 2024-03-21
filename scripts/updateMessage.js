// updateMessage.js

function updateInactivityMessage(newMessage) {
    const messageElement = document.querySelector('#inactivityMessage h2');
    if (messageElement) {
        messageElement.textContent = newMessage;
    }
}

// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', () => {
    updateInactivityMessage(' Coucou??  Êtes-vous inactif?? ');
});
