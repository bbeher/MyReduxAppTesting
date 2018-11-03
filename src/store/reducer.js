const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  // switch (action.type) {
  //   case 'AGE_UP':
  //     newState.age += action.value;
  //     break;

  //   case 'AGE_DOWN':
  //     newState.age -= action.value;
  //     break;
  // }

  if (action.type === "AGE_UP") {
    newState.age++;
  }
  if (action.type === "AGE_DOWN") {
    newState.age--;
  }
  return newState;
};

export default reducer;
