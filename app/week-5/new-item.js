"use client";

import { useState } from 'react';

const NewItem = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('Produce');
    }

    return (
        <div className='flex justify-center m-5'>
            <div className='p-4 flex flex-col items-center w-80 bg-white rounded-lg'>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>
                            <input 
                                required
                                placeholder="Item"
                                type='text' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                className='mt-1 block w-full border border-gray-400 rounded-md p-2'
                            />
                        </label>
                    </div>
                    <div className='mb-4 flex justify-between items-center'>
                        <label className='block text-gray-700'>                        
                            <select 
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)} 
                                className='mt-1 block w-full border border-gray-400 rounded-md p-2'
                            >                                
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        <div className='flex items-center'>
                            <button 
                                type="button" 
                                onClick={decrement} 
                                disabled={quantity === 1} 
                                className={`w-8 h-8 rounded-lg ${quantity === 1 ? 'bg-gray-400' : 'bg-pink-400 hover:bg-pink-500 active:bg-pink-700'}`}
                            >
                                -
                            </button>
                            <p className='mx-4 text-black w-8 text-center'>{quantity}</p>
                            <button 
                                type="button" 
                                onClick={increment} 
                                disabled={quantity === 20} 
                                className={`w-8 h-8 rounded-lg ${quantity === 20 ? 'bg-gray-400' : 'bg-pink-400 hover:bg-pink-500 active:bg-pink-700'}`}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-2 rounded-lg bg-pink-400 hover:bg-pink-500 active:bg-pink-700 text-white">
                        +
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewItem;