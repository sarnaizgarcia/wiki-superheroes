export function actionSearchHero(heroName) {
  return {
    type: "SEARCH_HERO",
    payload: {
      heroName: heroName
    }
  };
}
