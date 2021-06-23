import "./App.css";
import Tree from "./components/tree/Tree";
import Basket from "./components/basket/Basket";
import Button from "./components/button/Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_APPLES" });
  }, []);

  return (
    <div className="App">
      <h2>Shake the tree to collect apples</h2>
      <Tree />
      <Basket />
      <Button />
      <h4>Frontend Challenge by Atabak Gholipour</h4>
      <small>
        (Reactjs, Redux, SASS, Css animations, React testing library, SVG
        Images)
      </small>
    </div>
  );
}

export default App;
