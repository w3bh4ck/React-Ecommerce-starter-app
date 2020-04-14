import React from "react";
import "./FormInput.styles.scss";

// added intarface for form-input
// interface IProps {
// 	label: string;
// 	onchange: Function;
// }

const FormInput = ({ handleChange, label, ...otherProps }) => {
	// const { label, onchange, required, value, type, className, ...otherProps } = props;
	return (
		<div className="group">
			<input className="group" onChange={handleChange} {...otherProps} />
			{label ? <label></label> : null}
		</div>
	);
};

export default FormInput;
