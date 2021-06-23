import reducer from "../shakeReducer";

describe("shake reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      shaking: false,
      apples: [],
      applesIndexes: [],
      reset: false,
    });
  });

  it("should handle SHAKE_TREE", () => {
    expect(
      reducer(
        {
          shaking: false,
          apples: [],
          applesIndexes: [],
          reset: false,
        },
        {
          type: "SHAKE_TREE",
        }
      )
    ).toEqual({
      shaking: true,
      apples: [],
      applesIndexes: [],
      reset: false,
    });
  });

  it("should handle STOP_SHAKE_TREE", () => {
    expect(
      reducer(
        {
          shaking: true,
          apples: [],
          applesIndexes: [],
          reset: false,
        },
        {
          type: "STOP_SHAKE_TREE",
        }
      )
    ).toEqual({
      shaking: false,
      apples: [],
      applesIndexes: [],
      reset: false,
    });
  });

  it("should handle RESET_APP", () => {
    expect(
      reducer(
        {
          shaking: false,
          apples: [],
          applesIndexes: [],
          reset: false,
        },
        {
          type: "RESET_APP",
        }
      )
    ).toEqual({
      shaking: false,
      apples: [],
      applesIndexes: [],
      reset: true,
    });
  });
});
