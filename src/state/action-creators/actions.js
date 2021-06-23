export const getApples = () => {
  return {
    type: "GET_APPLES",
  };
};

export const shakeTree = () => {
  return {
    type: "SHAKE_TREE",
  };
};

export const stopShakeTree = () => {
  return {
    type: "STOP_SHAKE_TREE",
  };
};

export const dropApple = () => {
  return {
    type: "DROP_APPLE",
  };
};

export const resetApp = () => {
  return {
    type: "RESET_APP",
  };
};
