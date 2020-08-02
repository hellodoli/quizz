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
