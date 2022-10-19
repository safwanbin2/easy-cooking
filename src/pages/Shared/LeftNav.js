import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    }, []);

    return (
        <div className='ml-16 py-8'>
            <h3 className='text-2xl font-bold'>Category: </h3>
            {
                categories.map(category => <p key={category.idCategory} className="my-2 text-md font-semibold underline"><Link title={category.strCategoryDescription.slice(0, 80)} to={`/category/${category.strCategory}`}>{category.strCategory}</Link></p>)
            }
        </div>
    );
};

export default LeftNav;