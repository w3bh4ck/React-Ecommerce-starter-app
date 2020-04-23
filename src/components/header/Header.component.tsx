import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { getCurrentUser } from "../../redux/actions/user.actions";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";

const Header = ({ currentUser, getCurrentUser }) => {
	useEffect(() => {
		if (currentUser && currentUser.hasOwnProperty("id")) {
			getCurrentUser(currentUser);
		}
	}, [currentUser]);

	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/contact" className="option">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			<CartDropdown />
		</div>
	);
};

export default connect(null, { getCurrentUser })(Header);
