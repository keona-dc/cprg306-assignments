"use client";

import { useState } from 'react';

const NewItem = ({onAddItem}) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Math.random().toString(36).substring(2, 9),
            name,
            quantity,
            category,
          };

        onAddItem(newItem);

        setName('');
        setQuantity(1);
        setCategory('Produce');
    }

    return (
        <div className=''>
            <div className='mt-5 mb-5 p-4 flex flex-col items-center w-80 bg-blue-900 rounded-lg'>
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
                                <option value="produce">produce</option>
                                <option value="dairy">dairy</option>
                                <option value="bakery">bakery</option>
                                <option value="meat">meat</option>
                                <option value="frozen foods">frozen foods</option>
                                <option value="canned goods">canned foods</option>
                                <option value="dry goods">dry foods</option>
                                <option value="beverages">beverages</option>
                                <option value="snacks">snacks</option>
                                <option value="household">household</option>
                                <option value="other">other</option>
                            </select>
                        </label>
                        <div className='flex items-center'>
                            <button 
                                type="button" 
                                onClick={decrement} 
                                disabled={quantity === 1} 
                                className={`w-8 h-8 rounded-lg ${quantity === 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'}`}
                            >
                                -
                            </button>
                            <p className='mx-4 text-white w-8 text-center'>{quantity}</p>
                            <button 
                                type="button" 
                                onClick={increment} 
                                disabled={quantity === 20} 
                                className={`w-8 h-8 rounded-lg ${quantity === 20 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'}`}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white">
                        +
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewItem;