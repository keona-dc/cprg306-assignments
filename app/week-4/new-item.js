"use client";

import { useState } from 'react';

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <div className='flex justify-center m-5'>
            <div className='p-1 flex justify-between items-center w-40 bg-white rounded-lg'>
                <p className='mx-4 text-black w-8 text-left'>{quantity}</p>
                <button 
                    onClick={decrement} 
                    disabled={quantity === 1} 
                    className={`w-8 m-1 rounded-lg ${quantity === 1 ? 'bg-gray-400' : 'bg-pink-400 hover:bg-pink-500 active:bg-pink-700'}`}
                >
                    -
                </button>
                <button 
                    onClick={increment} 
                    disabled={quantity === 20} 
                    className={`w-8 m-1 rounded-lg ${quantity === 20 ? 'bg-gray-400' : 'bg-pink-400 hover:bg-pink-500 active:bg-pink-700'}`}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default NewItem;