import React from 'react';
import './overviewCollection.scss';
import { connect } from 'react-redux';
import PreviewCollection from '../previewCollection/PreviewCollection';

function OverviewCollection({ collections }) {
  return (
    <div className="collections-overview">
      {Object.keys(collections)
        .map((key) => {
          return collections[key];
        })
        .map((el) => {
          return (
            <PreviewCollection key={el.id} items={el.items} title={el.title} />
          );
        })}
    </div>
  );
}

export default OverviewCollection;
