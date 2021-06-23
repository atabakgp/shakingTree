import styles from "./Button.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.shakeReducer);

  const shakeTree = () => {
    // start shaking the tree
    dispatch({ type: "SHAKE_TREE" });

    // stop shaking after 3seconds
    setTimeout(() => {
      dispatch({ type: "STOP_SHAKE_TREE" });

      // start droping apples after stop shaking the tree
      let drop = setInterval(() => {
        dispatch({ type: "DROP_APPLE" });

        // stop droping apples if all apples has been droped
        if (state.applesIndexes.length === 0) {
          clearInterval(drop);
          dispatch({ type: "RESET_APP" });
        }
      }, 1000);
    }, 3000);
  };

  // if all apples droped, click the button for reset the app
  const getApples = () => {
    dispatch({ type: "GET_APPLES" });
  };

  return (
    <div className={styles.button}>
      <button onClick={() => (state.reset ? getApples() : shakeTree())}>
        {state.reset ? "Reset" : "Shake"}
      </button>
    </div>
  );
};
export default Button;
