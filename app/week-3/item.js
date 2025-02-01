import React from 'react';

export function Item({name, quantity, category}) {
    return (
        <li className='p-4 bg-blue-900 rounded-lg w-80'>
            <h2 className=' text-white text-xl font-bold'>{name}</h2>
            <p className='text-white'>Buy {quantity} in {category}</p>
        </li>
    );
}

export default Item;