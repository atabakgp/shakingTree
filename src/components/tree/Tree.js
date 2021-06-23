import tree from "../../images/tree.svg";
import Apple from "../apple/Apple";
import styles from "./Tree.module.scss";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Tree = () => {
  const state = useSelector((state) => state.shakeReducer);

  let [applesPositions] = useState([
    {
      top: "40%",
      left: "20%",
    },
    {
      top: "10%",
      left: "60%",
    },
    {
      top: "30%",
      left: "70%",
    },
    {
      top: "40%",
      left: "50%",
    },
    {
      top: "25%",
      left: "30%",
    },
  ]);

  let [dropedIndexes, serDropedIndexes] = useState([]);

  // Get droped apples index and send them to Apple component
  useEffect(() => {
    let dropedIndexes = [];
    for (const key in state.apples) {
      if (state.apples[key].animated) {
        dropedIndexes.push(parseInt(key));
      }
    }
    serDropedIndexes(dropedIndexes);
  }, [state]);

  let shakeClass = state.shaking ? styles.shaking : "";
  let classes = [shakeClass, styles.tree];

  return (
    <div className={classes.join(" ")}>
      <img src={tree} alt="tree" />
      {applesPositions.map((apple, index) => {
        return (
          <Apple
            top={apple.top}
            left={apple.left}
            key={index}
            droping={dropedIndexes.includes(index) ? "droping" : ""}
          />
        );
      })}
    </div>
  );
};
export default Tree;
