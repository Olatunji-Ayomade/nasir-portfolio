// Handle hover animation so only one card is active at once
const cards = document.querySelectorAll('.skill-card');
let lastCard = null;

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (lastCard && lastCard !== card) {
      lastCard.classList.remove('is-hovered');
    }
    card.classList.add('is-hovered');
    lastCard = card;
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('is-hovered');
  });
});
