// Animation de survol pour les boutons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
// Générer des bulles en forme de cœur aléatoirement
function createHeartBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble', 'heart');
    
    // Position aléatoire sur l'écran
    const startPositionX = Math.random() * window.innerWidth;
    bubble.style.left = `${startPositionX}px`;
    
    // Ajouter la bulle au body
    document.body.appendChild(bubble);
    
    // Supprimer la bulle après l'animation
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Créer une nouvelle bulle toutes les 2 secondes
setInterval(createHeartBubble, 2000);
// Fonction pour créer des oursons qui flottent
function createTeddyBear() {
    const bear = document.createElement('div');
    bear.classList.add('teddy-bear');

    // Position aléatoire de l'ourson
    const startX = Math.random() * window.innerWidth; // Position horizontale aléatoire
    bear.style.left = `${startX}px`;

    // Ajouter l'élément ourson au body
    document.body.appendChild(bear);

    // Supprimer l'ourson après l'animation
    bear.addEventListener('animationend', () => {
        bear.remove();
    });
}

// Créer un nouvel ourson toutes les 2 secondes
setInterval(createTeddyBear, 2000);
