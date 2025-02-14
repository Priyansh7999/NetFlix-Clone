import React from 'react';
import './Skeleton.css';

export default function Skeleton() {
  const placeholderItems = Array.from({ length: 10 }); // Create an array of 10 placeholders

  return (
    <div className="skeleton-grid">
      {placeholderItems.map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-image" />
          <div className="skeleton-title" />
        </div>
      ))}
    </div>
  );
}
