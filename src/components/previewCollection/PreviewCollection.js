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
          .map(({ id, ...otherItemProps }) => {
            return <ItemCollection key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
}

export default PreviewCollection;
