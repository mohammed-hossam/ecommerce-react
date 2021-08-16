import React from 'react';
import './cartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

function CartIcon({ cartItems, toggleCart }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.quantity;
        }, 0)}
      </span>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return { cartItems: state.cart.cartItems };
}

export default connect(mapStateToProps, { toggleCart })(CartIcon);
