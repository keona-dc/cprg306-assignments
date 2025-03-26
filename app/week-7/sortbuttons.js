"use client";

import React from 'react';

export function SortButtons({ setSortBy, sortBy }) {
  const buttons = [
    { label: 'Name', value: 'name' },
    { label: 'Category', value: 'category' },
    { label: 'Grouped Category', value: 'grouped' }
  ];

return (
    <div className="flex space-x-4 mb-4">
        {buttons.map(button => (
            <button
                key={button.value}
                onClick={() => setSortBy(button.value)}
                className={`p-2 rounded ${sortBy === button.value ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
            >
                {button.label}
            </button>
        ))}
    </div>
);
}
