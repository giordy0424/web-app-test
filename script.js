document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('welcome-title');
    const hour = new Date().getHours();
    
    // Logica di personalizzazione temporale
    if (hour < 12) {
        title.textContent = "Buongiorno";
    } else if (hour < 18) {
        title.textContent = "Buon pomeriggio";
    } else {
        title.textContent = "Buonasera";
    }

    const btn = document.getElementById('action-btn');
    btn.addEventListener('click', () => {
        btn.textContent = "Caricamento...";
        btn.style.opacity = "0.7";
        // Qui potresti reindirizzare l'utente o attivare un'animazione
        console.log("L'utente ha accettato la sfida.");
    });
});