import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Category = () => {
    const meals = useLoaderData().meals;

    return (
        <div className='py-8 mr-16'>
           <h2 className='text-2xl font-bold'>Selected Category: </h2>
            <div className='grid grid-cols-3 gap-8 my-8'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Category;