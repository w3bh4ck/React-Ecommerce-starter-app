import React, { useState } from "react";
import FormInput from "../../../components/form-input/FormInput.component";
import CustomButton from "../../../components/custom-button/CustomButton.component";
import "./SignIn.styles.scss";
import { signInWithGoogle } from "../../../firebase/firebase.utils";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	const handleChangeEmail = (value: string) => {
		setEmail(value);
	};

	const handleChangePassword = (value: string) => {
		setPassword(value);
	};

	return (
		<>
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={(e) => handleSubmit(e)}>
					<FormInput
						required
						name="email"
						value={email}
						handleChange={handleChangeEmail}
						type="email"
						label={"Email"}
					/>
					<FormInput
						required
						value={password}
						handleChange={handleChangePassword}
						type="password"
						label={"Password"}
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton isGoogleSignIn onClick={() => signInWithGoogle()}>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignIn;
