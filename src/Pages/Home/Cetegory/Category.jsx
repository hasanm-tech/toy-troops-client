import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Cat_Toys from './Cat_Toys';
import '../Cetegory/Category.css';

const Category = () => {
    const [toys, setToys] = useState([]);
    const [catToy, setCatToy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setCatToy(data.filter(cat_toy => cat_toy.category === 'marvel'));
            });
    }, []);

    const filterItem = (updateItem) => {
        const update_Cat_Item = toys.filter(cat_toy => cat_toy.category === updateItem);
        setCatToy(update_Cat_Item);
    };

    return (
        <div className='container mx-auto'>
            <div className='py-10'>
                <h2 className='text-4xl font-bold text-center'> Shop by category </h2>
            </div>

            <div className='flex gap-6 justify-center'>
                <button className='font-xl font-bold' onClick={() => filterItem('marvel')}>Marvel</button>
                <button className='font-xl font-bold' onClick={() => filterItem('transformers')}>Transformers</button>
                <button className='font-xl font-bold' onClick={() => filterItem('Star Wars')}>Star Wars</button>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 toys-cat justify-items-center'>
                {catToy.map(t => <Cat_Toys key={t._id} t={t}></Cat_Toys>)}
            </div>
        </div>
    );
};

export default Category;
