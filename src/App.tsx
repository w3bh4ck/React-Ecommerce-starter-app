import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/home-page/Homepage.component";

import "./App.css";
import ShopPage from "./pages/shop-page/Shop.component";
import Header from "./components/header/Header.component";
import Auth from "./pages/auth/Auth.component";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/signin" component={Auth} />
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={ShopPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
