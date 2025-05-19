/**
 * Creates a deck of 56 cards with the specified distribution and returns 6 random cards
 * @returns {{ numberCards: number[], targetCard: number }} Object containing 5 number cards and 1 target card
 */
export const shuffleDeck = () => {
  // Build the deck according to the distribution
  const deck = [];

  // Numbers 1-6: 3 copies each
  for (let i = 1; i <= 6; i++) {
    for (let j = 0; j < 3; j++) {
      deck.push(i);
    }
  }

  // Numbers 7-10: 4 copies each
  for (let i = 7; i <= 10; i++) {
    for (let j = 0; j < 4; j++) {
      deck.push(i);
    }
  }

  // Numbers 11-17: 2 copies each
  for (let i = 11; i <= 17; i++) {
    for (let j = 0; j < 2; j++) {
      deck.push(i);
    }
  }

  // Numbers 18-25: 1 copy each
  for (let i = 18; i <= 25; i++) {
    deck.push(i);
  }

  // Fisher-Yates shuffle algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Draw 6 cards
  const drawnCards = deck.slice(0, 6);

  // Select one card as target and the rest as number cards
  const targetIndex = Math.floor(Math.random() * 6);
  const targetCard = drawnCards[targetIndex];
  const numberCards = drawnCards.filter((_, index) => index !== targetIndex);

  return {
    numberCards,
    targetCard
  };
}; 