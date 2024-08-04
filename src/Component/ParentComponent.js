import React, { useState } from 'react';
import Aquasel from './Aquasel';
import Selturf from './Selturf';

const ParentComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Aquasel searchQuery={searchQuery} />
      <Selturf searchQuery={searchQuery} />
    </div>
  );
};

export default ParentComponent;
