// Funzione per gestire la registrazione
document.getElementById('formRegistrazione')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Ferma l'invio del modulo

    const username = document.getElementById('username').value; // Ottieni username
    const password = document.getElementById('password').value; // Ottieni password

    // Controlla se la password è valida
    if (!isPasswordValida(password)) {
        alert('La password deve avere almeno 6 caratteri e includere sia lettere che numeri.');
        return; // Ferma l'esecuzione se la password non è valida
    }

    // Reindirizza alla pagina delle bandiere
    window.location.href = 'home.php';
});

// Funzione per controllare se la password è valida
//Utilizzo delle regex
function isPasswordValida(password) {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/; // Regex per validare
    return regex.test(password); // Restituisce true o false
}

// Quando la pagina delle bandiere è caricata, mostra le bandiere e i monumenti
window.onload = function() {
    if (document.getElementById('bandiere')) {
        caricaBandiere(); // Carica le bandiere
    }
    
    if (document.getElementById('monumenti')) {
        const paese = ottieniPaese(); // Ottieni il paese dalla URL
        caricaMonumenti(paese); // Carica i monumenti per il paese
    }
};

// Funzione per caricare le bandiere
function caricaBandiere() {
    const bandiere = [
        { paese: 'italia', img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' },
        { paese: 'francia', img: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg' },
        { paese: 'spagna', img: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg' },
        { paese: 'peru', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg' }
    ];

    const container = document.getElementById('bandiere');
    bandiere.forEach(bandiera => {
        const col = document.createElement('div'); // Crea un nuovo elemento div
        col.className = 'col-md-3 text-center'; // Aggiungi classi per lo stile
        col.innerHTML = `
            <a href="details.php?country=${bandiera.paese}">
                <img src="${bandiera.img}" class="img-fluid" alt="${bandiera.paese}" style="width: 150px;">
            </a>
        `;
        container.appendChild(col); // Aggiungi il div al contenitore
    });
}

// Funzione per ottenere il paese dalla URL
function ottieniPaese() {
    const params = new URLSearchParams(window.location.search);
    return params.get('country'); // Restituisce il valore del paese
}

// Funzione per caricare i monumenti dal file JSON
function caricaMonumenti(paese) {
    fetch('dati.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nel caricamento dei dati: ' + response.status);
            }
            return response.json(); // Restituisce i dati JSON
        })
        .then(data => {
            mostraMonumenti(data[paese] || []); // Mostra i monumenti
        })
}

// Funzione per visualizzare i monumenti
function mostraMonumenti(monumenti) {
    const container = document.getElementById('monumenti'); // Ottieni il contenitore
    container.innerHTML = ''; // Pulisci il contenitore esistente

    monumenti.forEach(monumento => {
        const col = document.createElement('div'); // Crea un nuovo elemento div
        col.className = 'col-md-6 mb-4'; // Aggiungi classi per lo stile
        col.innerHTML = `
            <div class="card">
                <img src="${monumento.img}" class="card-img-top" alt="${monumento.name}">
                <div class="card-body">
                    <h5 class="card-title">${monumento.name}</h5>
                </div>
            </div>
        `;
        container.appendChild(col); // Aggiungi il div al contenitore
    });
}
