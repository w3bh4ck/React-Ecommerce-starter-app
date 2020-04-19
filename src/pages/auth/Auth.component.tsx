import React from "react";
import "./Auth.styles.scss";
import SignIn from "./sign-in/SignIn.component";
import Signup from "./sign-up/Signup.component";

const Auth = () => {
	return (
		<>
			<div className="sign-in-and-sign-up">
				<SignIn />
				<Signup />
			</div>
		</>
	);
};

export default Auth;
