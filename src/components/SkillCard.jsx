import React from 'react';

export const SkillCard = ({ image, title }) => (
  <div className="item">
    <img src={image} alt={title} />
    <h5>{title}</h5>
  </div>
);
