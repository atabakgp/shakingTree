import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";

test("renders app", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Shake the tree to collect apples/i);
  expect(linkElement).toBeInTheDocument();
});