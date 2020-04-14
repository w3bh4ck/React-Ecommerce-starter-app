import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
	// const { label, onchange, required, value, type, className, ...otherProps } = props;
	return (
		<div className="group">
			<input className="group" onChange={handleChange} {...otherProps} />
			{label ? (
				<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
			) : null}
		</div>
	);
};

export default FormInput;
