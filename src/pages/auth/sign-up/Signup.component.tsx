import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../../firebase/firebase.utils";
import FormInput from "../../../components/form-input/FormInput.component";
import CustomButton from "../../../components/custom-button/CustomButton.component";

const Signup = (props: any) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const handeleSubmit = async (e: any) => {
		e.preventDefault();
		if (password === repeatPassword) {
			let data = {
				name,
				email,
				password,
			};
			try {
				const { user } = await auth.createUserWithEmailAndPassword(email, password);
				await createUserProfileDocument(user, { name });
			} catch (error) {
				console.log(error);
			}
		} else {
			alert("Password do not match");
		}
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={(e) => handeleSubmit(e)} className="sign-up-form">
				<FormInput
					handleChange={setName}
					type="text"
					name="displayName"
					value={name}
					label="Display Name"
					required
				/>
				<FormInput
					handleChange={setEmail}
					type="email"
					name="email"
					value={email}
					label="Email "
					required
				/>
				<FormInput
					handleChange={setPassword}
					type="password"
					name="password"
					value={password}
					label="Password "
					required
				/>
				<FormInput
					handleChange={setRepeatPassword}
					type="password"
					name="repeatPassword"
					value={repeatPassword}
					label="Confirm Password "
					required
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

export default Signup;
