import React, { useState } from "react";
import "./directory.styles.scss";
import { connect } from "react-redux";
import MenuItem from "../menu-item/MenuItem.component";

const Directory = ({ directory }) => {
	const renderDirectory = () => {
		if (directory.length > 0) {
			return directory.map((dir, i) => (
				<MenuItem key={i} imageUrl={dir.imageUrl} title={dir.title} size={dir.size ? dir.size : ""} />
			));
		} else {
			return <p>Nothing dey</p>;
		}
	};

	return (
		<>
			<div className="directory-menu">{renderDirectory()}</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	directory: state.directory.directory,
});

export default connect(mapStateToProps)(Directory);
