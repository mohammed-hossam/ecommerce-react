import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
function Checkout({ cartItems }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span></span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <div className="total">
        <span>
          Total: $
          {cartItems.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.quantity;
          }, 0)}
        </span>
      </div>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return { cartItems: state.cart.cartItems };
}
export default connect(mapStateToProps)(Checkout);
