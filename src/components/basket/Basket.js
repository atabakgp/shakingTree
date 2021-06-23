import basket from "../../images/basket.svg";
import styles from "./Basket.module.scss";

const Basket = () => {
  return (
    <div className={styles.basket}>
      <img src={basket} alt="tree" />
    </div>
  );
};
export default Basket;
