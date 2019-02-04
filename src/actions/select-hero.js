export function aselectHero(heroId) {
  return {
    type: "SELECT_HERO",
    payload: {
      heroId: heroId
    }
  };
}
