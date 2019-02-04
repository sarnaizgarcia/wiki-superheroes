export function actionLengthSelect(lengthSelected) {
  return {
    type: "LENGTH",
    payload: {
      heroName: lengthSelected
    }
  };
}
