"use client";

import React, { useState, useEffect } from 'react';
import { SortButtons } from './sortbuttons';
import { Item } from './item';

export function ItemList({ item, onItemSelect }) {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const categories = [...new Set(item.map(item => item.category))];

  useEffect(() => {
    setItems(item);
  }, [item]);

  if (sortBy === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category' || sortBy === 'grouped') {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <SortButtons setSortBy={setSortBy} sortBy={sortBy} />

      <ul>
        {items.map((item, index) => {
          let showCategory = false;
          if (sortBy === 'grouped' && categories.includes(item.category)) {
            showCategory = true;
            categories.splice(categories.indexOf(item.category), 1);
          }
          return (
            <div key={index}>
              {showCategory && <h3 className='text-white text-lg font-bold m-2'>{item.category}</h3>}
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)} 
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
