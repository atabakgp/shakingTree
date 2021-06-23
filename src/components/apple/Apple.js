import apple from "../../images/apple.svg";
import styles from "./Apple.module.scss";
import { useSelector } from "react-redux";

const Apple = ({ top, left, droping }) => {
  const state = useSelector((state) => state.shakeReducer);

  let dropClass = droping ? styles.droping : "";
  let shakeClass = state.shaking ? styles.shaking : "";
  let classes = ["apple", styles.apple, shakeClass, dropClass];

  return (
    <div className={classes.join(" ")} style={{ top, left }}>
      <img src={apple} alt="tree" />
    </div>
  );
};
export default Apple;
