import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/home-page/Homepage.component";

import "./App.css";
import ShopPage from "./pages/shop-page/Shop.component";
import Header from "./components/header/Header.component";
import Auth from "./pages/auth/Auth.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { firestore } from "firebase";
import { getCurrentUser } from "./redux/actions/user.actions";

const App = (props: any) => {
	const [currentUser, setcurrentUser] = useState({});

	let unSubscribeFromAuth: any;

	useEffect(() => {
		unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth: any) => {
			if (userAuth) {
				const userRef: any = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot: any) => {
					setcurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			setcurrentUser(userAuth);
		});
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/signin" component={Auth} />
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={ShopPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, getCurrentUser)(App);
