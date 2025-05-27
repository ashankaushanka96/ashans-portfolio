import React from 'react';

export const ToolCard = ({ image, title }) => (
  <div className="item">
    <img src={image} alt={title} />
    <h5>{title}</h5>
  </div>
);
