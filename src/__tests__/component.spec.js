import { render, cleanup, waitFor, act, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Reviewer from "../pages/reviewer";
import Picker from "../components/Picker";
import { getRandomPhoto } from "../services/redux/photos/index";
import { store } from "../services/store";

const imageUrl =
  "https://images.unsplash.com/photo-1642693909273-023cb0806ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTcxNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQwNzk2MzY&ixlib=rb-1.2.1&q=80&w=1080";

const entities = {
  id: "1",
  urls: {
    regular: imageUrl,
  },
};

const renderProduct = () =>
  render(
    <Provider store={store}>
      <Reviewer />
    </Provider>
  );

const renderPicker = () =>
  render(
    <Provider store={store}>
      <Picker imageUrl={imageUrl} />
    </Provider>
  );

test("Renders Reviewer correctly", async () => {
  await act(async () => {
    const { getByTestId } = renderProduct();
    expect(getByTestId("reviewer")).toBeInTheDocument();
  });
});

test("Renders a Picker with url correctly", async () => {
  const mockedAxios = jest.fn();
  mockedAxios.mockImplementation(() => Promise.resolve(entities));

  await act(async () => {
    const { getByTestId } = renderPicker();
    const image = getByTestId("picker");
    await waitFor(() =>
      expect(image).toHaveStyle({ backgroundImage: imageUrl })
    );
  });
});
