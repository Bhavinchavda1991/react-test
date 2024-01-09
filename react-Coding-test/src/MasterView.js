// MasterView.js
import React from 'react';
import './MasterView.css';

function MasterView({ items, onSelectItem, isMobile }) {
  return (
    <div className="master-view">
      {items.map((item) => (
        <div
          key={item.id}
          className={`item ${isMobile ? '' : item.selected ? 'selected' : ''}`}
          onClick={() => onSelectItem(item)}
        >
          <img src={item.image} alt={item.title} height="50" />
          <h3>{item.title}</h3>
          <p>{item.description.substring(0, 100)}...</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MasterView;
