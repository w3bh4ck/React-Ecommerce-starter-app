import React from "react";
import "./CustomButton.component.scss";

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<button className="custom-button" {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
