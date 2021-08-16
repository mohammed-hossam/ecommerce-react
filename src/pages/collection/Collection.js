import React from 'react';
import './collection.scss';
import ItemCollection from '../../components/itemCollection/ItemCollection';
import { withRouter } from 'react-router-dom';

function Collection({ collections, match }) {
  const collectionNeeded = collections[match.params.collectionId];
  return (
    <div className="collection-page">
      <h2 className="title">{collectionNeeded.title}</h2>
      <div className="items">
        {collectionNeeded.items.map((item) => {
          return <ItemCollection key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default withRouter(Collection);
