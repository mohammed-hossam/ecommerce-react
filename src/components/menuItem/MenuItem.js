import React from 'react';
import './menuItem.scss';
import { withRouter } from 'react-router-dom';

function MenuItem({ title, subtitle, imageUrl, size, ...props }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        props.history.push(`${props.match.url}${props.linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
