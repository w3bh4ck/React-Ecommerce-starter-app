import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store/store";

beforeEach(() => {
	jest.spyOn(console, "error").mockImplementation(() => {});
});

test("renders learn react link", () => {
	render(
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
});
