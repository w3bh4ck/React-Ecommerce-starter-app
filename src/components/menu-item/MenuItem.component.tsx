import React from "react";
import { Link } from "react-router-dom";
import "./menuItem.styles.scss";
interface IPROPS {
	title: string;
	imageUrl: string;
	size: string;
	link: string;
}

const MenuItem = ({ title, imageUrl, size, link }: IPROPS) => {
	return (
		<>
			<div className={`${size} menu-item`}>
				<div
					className="background-image"
					style={{
						background: `url(${imageUrl})`,
					}}
				/>

				<div className="content">
					<h1 className="title">{title.toUpperCase()}</h1>
					<span className="subtitle">
						<Link to={link}>Shop Now</Link>
					</span>
				</div>
			</div>
		</>
	);
};

export default MenuItem;
