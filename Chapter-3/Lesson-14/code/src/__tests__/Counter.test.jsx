import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { reducer } from "../reducer";
import Counter from "../pages/Counter";

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

it("inc counter", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initState: {
      counter: 5,
    },
  });

  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("6");
});

it("dec counter", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initState: {
      counter: 5,
    },
  });

  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("4");
});
