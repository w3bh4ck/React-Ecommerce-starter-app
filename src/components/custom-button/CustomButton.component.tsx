import React, { Children } from "react";
import "./CustomButton.component.scss";
import { types } from "util";

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<button
			className={` ${otherProps.inverted ? "inverted" : ""} ${
				otherProps.isGoogleSignIn ? "google-sign-in" : ""
			} custom-button`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
