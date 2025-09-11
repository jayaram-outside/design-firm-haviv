import React from 'react';

const Filter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'curated', label: 'Curated' },
    { key: 'a-z', label: 'A-Z' },
    { key: 'newest', label: 'Newest' }
  ];

  return (
    <div className="filters">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={currentFilter === filter.key ? 'active' : ''}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
