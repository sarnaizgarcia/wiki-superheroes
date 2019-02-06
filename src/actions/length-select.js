export function actionLengthSelect(lengthSelected) {
  return {
    type: "LENGTH",
    payload: {
      length: lengthSelected
    }
  };
}
