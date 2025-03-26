import React from 'react';

export function Item({ name, quantity, category, onSelect }) {
    return (
<li className='p-4 mt-3 bg-blue-900 rounded-lg w-80 hover:bg-blue-800' onClick={onSelect}>
<h2 className='text-white text-xl font-bold'>{name}</h2>
            <p className='text-white'>Buy {quantity} in {category}</p>
        </li>
    );
}

export default Item;
