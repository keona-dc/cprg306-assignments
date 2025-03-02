"use client";

import React, { useState, useEffect } from 'react';
import itemsList from './items.json';
import { SortButtons } from './sortbuttons';

export function ItemList() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const categories = [...new Set(itemsList.map(item => item.category))];

  useEffect(() => {
    setItems(itemsList);
  }, []);

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
              <li className='p-4 mb-5 bg-blue-900 rounded-lg w-80'>
                <h2 className='text-white text-xl font-bold'>{item.name}</h2>
                <p className='text-white'>Buy {item.quantity} in {item.category}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}