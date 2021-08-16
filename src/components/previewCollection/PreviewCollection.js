import React from 'react';
import './previewCollection.scss';
import ItemCollection from '../itemCollection/ItemCollection';

function PreviewCollection({ items, title }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
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
