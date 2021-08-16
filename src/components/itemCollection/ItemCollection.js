import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './itemCollection.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

function ItemCollection({ item, addItem }) {
  return (
    <div className="collection-item">
      <div className="image" style={{ background: `url(${item.imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addItem(item);
        }}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
}

export default connect(null, { addItem })(ItemCollection);
