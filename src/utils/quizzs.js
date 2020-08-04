export const getCardNumber = (ws, view, space) => {
  const w = parseInt(ws, 10);
  if (view === 'card') {
    if (w >= 1280) {
      if (space === 'eco') return 4;
      return 3;
    }
    if (w >= 960) {
      if (space === 'eco') return 3;
      return 2;
    }
    if (w >= 600) {
      return 2;
    }
    return 1;
  }
  return 1;
};

const cardScroll = (cardLength, cardNeedScroll) => {
  const cardScroll = (cardLength + cardNeedScroll) % (cardNeedScroll / 2);
  if (cardScroll === 0) return cardNeedScroll;
  return cardNeedScroll - cardScroll;
};

export const getCardNumberToScroll = (ws, view, space, cardLength) => {
  const w = parseInt(ws, 10);
  if (view === 'card') {
    if (w >= 1280) {
      if (space === 'eco') {
        return cardScroll(cardLength, 8);
      }
      return cardScroll(cardLength, 6);
    }
    if (w >= 960) {
      if (space === 'eco') return cardScroll(cardLength, 6);
      return cardScroll(cardLength, 4);
    }
    if (w >= 600) {
      return cardScroll(cardLength, 4);
    }
    return 4;
  }
  return 4;
};
