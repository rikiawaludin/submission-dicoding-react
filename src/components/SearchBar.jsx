import React from 'react';

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      className="note-search"
      type="text"
      placeholder="Cari catatan..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}