export const initialState = {
  shaking: false,
  apples: [],
  applesIndexes: [],
  reset: false,
};

const reducer = (state = initialState, action) => {
  let newApples = state.apples;

  switch (action.type) {
    case "SHAKE_TREE":
      return {
        ...state,
        shaking: true,
      };

    case "STOP_SHAKE_TREE":
      return {
        ...state,
        shaking: false,
      };

    case "GET_APPLES":
      const applesNodes = document.querySelectorAll(".apple");
      const appleArrayLength = [...applesNodes].length;
      let applesArray = [];
      let applesIndexes = [];

      for (let index = 0; index < appleArrayLength; index++) {
        const newObj = {
          animated: false,
        };
        applesArray.push(newObj);
        applesIndexes.push(index);
      }

      return {
        ...state,
        apples: applesArray,
        applesIndexes,
        reset: false,
      };

    case "DROP_APPLE":
      const random = (min, max) =>
        Math.floor(Math.random() * (max - min)) + min;

      const max = state.applesIndexes.length;

      const randomAppleIndex = random(0, max);

      for (const key in newApples) {
        if (state.applesIndexes[randomAppleIndex] == key) {
          newApples[key].animated = true;
        }
      }

      let newApplesIndexes = state.applesIndexes;

      newApplesIndexes.splice(randomAppleIndex, 1);

      return {
        ...state,
        apples: newApples,
        applesIndexes: newApplesIndexes,
      };

    case "RESET_APP":
      return {
        ...state,
        reset: true,
      };

    default:
      return state;
  }
};

export default reducer;
