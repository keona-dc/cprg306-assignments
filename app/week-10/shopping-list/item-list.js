"use client";

import React, { useState, useEffect } from "react";
import { SortButtons } from "./sortbuttons";
import { Item } from "./item";

export function ItemList({ items: initialItems = [], onItemSelect }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(initialItems); // Updates state whenever `initialItems` changes
  }, [initialItems]); // Dependency array ensures this runs only when `initialItems` changes

  const handleSort = (sortBy) => {
    const sorted = [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    setItems(sorted);
  };

  return (
    <div>
      <SortButtons setSortBy={handleSort} />
      <ul>
        {items.map((item, index) => (
          <Item key={item.id || index} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </div>
  );
}