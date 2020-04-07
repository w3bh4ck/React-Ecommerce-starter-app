import React from "react";
import "./menuItem.styles.scss";
interface IPROPS {
	title: string;
}

const MenuItem = ({ title }: IPROPS) => {
	return (
		<>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">{title}</h1>
					<span className="subtitle">Shop Now</span>
				</div>
			</div>
		</>
	);
};

export default MenuItem;
