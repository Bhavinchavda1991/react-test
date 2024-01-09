import React from 'react';
import './DetailView.css';

function DetailView({ item, onBack }) {
  if (!item) {
    // Render a placeholder or nothing if no item is selected
    return <div className="detail-view-placeholder">Select an item to view details</div>;
  }

  return (
    <div className="detail-view">
      {onBack && (
        <button onClick={onBack} className="back-button" aria-label="Go back">
          {/* The content is generated through CSS */}
        </button>
      )}
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="price">${item.price}</p>
      <p>Category: {item.category}</p>
      <div className="ratings">
        {Array(Math.round(item.rating.rate)).fill().map((_, i) => (
          <span key={i}>⭐</span>
        ))}
        <span> {item.rating.rate} ({item.rating.count} reviews)</span>
      </div>
    </div>
  );
}

export default DetailView;
