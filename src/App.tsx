import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Homepage from "./pages/home-page/Homepage.component";

import "./App.css";
import ShopPage from "./pages/shop-page/Shop.component";
import Header from "./components/header/Header.component";
import Auth from "./pages/auth/Auth.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { firestore } from "firebase";
import { getCurrentUser } from "./redux/actions/user.actions";
import Checkout from "./pages/checkout/Checkout.component";

const App = (props: any) => {
	const [currentUser, setcurrentUser] = useState({});
	const { user } = props;
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
					<Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <Auth />)} />
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={Checkout} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	user: state.user.currentUser,
});

export default connect(mapStateToProps, getCurrentUser)(App);
