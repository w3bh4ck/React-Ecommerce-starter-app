import React, { useState } from "react";
import FormInput from "../../../components/form-input/FormInput.component";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
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
						handleChange={setEmail}
						type="email"
						label={"Email"}
						className="form-input"
					/>
					<FormInput
						required
						value={password}
						handleChange={setPassword}
						type="password"
						label={"Password"}
						className="form-input"
					/>
					<input type="submit" value="submit" />
				</form>
			</div>
		</>
	);
};

export default SignIn;
