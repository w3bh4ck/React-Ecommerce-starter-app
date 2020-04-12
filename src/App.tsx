import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/home-page/Homepage.component";
import "./App.css";
import ShopPage from "./pages/shop-page/Shop.component";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shops" component={ShopPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
