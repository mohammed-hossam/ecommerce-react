import React from 'react';
import './previewCollection.scss';
import ItemCollection from '../itemCollection/ItemCollection';
import { useHistory } from 'react-router-dom';

function PreviewCollection({ items, title }) {
  const history = useHistory();
  console.log();
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => {
          history.push(`/shop/${title.toLowerCase()}`);
        }}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((el, idx) => idx < 4)
          .map((item) => {
            return <ItemCollection key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default PreviewCollection;
