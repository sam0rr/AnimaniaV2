let inactivityTimer;

function resetTimer() {
    // Effacer le timer existant
    clearTimeout(inactivityTimer);
    // Fermer le message d'inactivité s'il est déjà affiché
    document.getElementById('inactivityMessage').style.display = 'none';
    // Définir un nouveau timer
    inactivityTimer = setTimeout(showInactivityMessage, 15000); // 15000 millisecondes = 15 secondes
}

function showInactivityMessage() {
    document.getElementById('inactivityMessage').style.display = 'block';
}

function closeInactivityMessage() {
    // Cacher le message d'inactivité et réinitialiser le timer
    document.getElementById('inactivityMessage').style.display = 'none';
    resetTimer();
}

// Écouter les événements de mouvement de souris, de frappe, et de défilement pour réinitialiser le timer
window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.onscroll = resetTimer;