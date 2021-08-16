import React from 'react';
import './checkoutItem.scss';
import { connect } from 'react-redux';
import { removeItem, reduceItem, addItem } from '../../redux/cart/cartActions';

function CheckoutItem({ cartItem, removeItem, reduceItem, addItem }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="img" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            reduceItem(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div
        onClick={() => {
          removeItem(cartItem);
        }}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
}

export default connect(null, { removeItem, reduceItem, addItem })(CheckoutItem);
