import React from 'react';
import './cartDropdown.scss';
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../cartItem/CartItem';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cartActions';

function CartDropdown({ cartItems, history, toggleCart }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCart();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { cartItems: state.cart.cartItems };
}

export default withRouter(
  connect(mapStateToProps, { toggleCart })(CartDropdown)
);
