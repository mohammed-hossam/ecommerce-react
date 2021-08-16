import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
function Header({ currentUser, cartHidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  //el state ele el function bta5odha ka parameter deh heya yo3tbr el rootReducer.
  return {
    currentUser: state.userData.currentUser,
    cartHidden: state.cart.hidden,
  };
}

export default connect(mapStateToProps)(Header);
