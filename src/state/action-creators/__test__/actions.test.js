import * as actions from "../actions";

describe("getApples", () => {
  it("should create an action to get All apples", () => {
    const expectedAction = {
      type: "GET_APPLES",
    };
    expect(actions.getApples()).toEqual(expectedAction);
  });
});

describe("shakeTree", () => {
  it("should create an action to shake the tree", () => {
    const expectedAction = {
      type: "SHAKE_TREE",
    };
    expect(actions.shakeTree()).toEqual(expectedAction);
  });
});

describe("stopShakeTree", () => {
  it("should create an action to stop shaking the tree", () => {
    const expectedAction = {
      type: "STOP_SHAKE_TREE",
    };
    expect(actions.stopShakeTree()).toEqual(expectedAction);
  });
});

describe("dropApple", () => {
  it("should create an action to drop apple", () => {
    const expectedAction = {
      type: "DROP_APPLE",
    };
    expect(actions.dropApple()).toEqual(expectedAction);
  });
});

describe("reset", () => {
  it("should create an action to drop apple", () => {
    const expectedAction = {
      type: "RESET_APP",
    };
    expect(actions.resetApp()).toEqual(expectedAction);
  });
});
