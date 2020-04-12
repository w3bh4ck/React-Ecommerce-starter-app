import React from "react";
import "./FormInput.styles.scss";

interface IProps {
	label: string;
	onchange: Function;
	required: boolean;
	value: string;
	type: string;
	className: string;
	otherProps?: JSX.Element;
}

const FormInput = (props: IProps) => {
	const { label, onchange, required, value, type, className, ...otherProps } = props;
	return (
		<div className="group">
			<input
				value={value ? value : ""}
				type={type ? type : "text"}
				required={required}
				className={className ? className : ""}
				onChange={(e) => onchange(e.target.value)}
			/>
		</div>
	);
};

export default FormInput;
