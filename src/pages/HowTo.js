import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HowTo = () => {
    const meal = useLoaderData().meals[0];
    console.log(meal)
    const { strArea, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strInstructions, strMeal, strMealThumb, strYoutube } = meal;
    return (
        <div className='py-8 mr-16'>
            <h2 className='text-2xl font-bold'>How to cook {strMeal} <span className='ml-2 text-xl'>({strCategory})</span></h2>
            <div className='my-8'>
                <div className='grid grid-cols-2 gap-4'>
                    <img src={strMealThumb} alt="" />
                    <div>
                        <p className='text-2xl mb-4'>Name: {strMeal}</p>
                        <p className='font-semibold'>Region: {strArea}</p>
                        <a className='mb-6 block' href={strYoutube}>Youtube : {strYoutube}</a>
                        <p className='text-xl mb-2'>Ingredients: </p>
                        <ol className='ml-12'>
                            {strIngredient1 && <li className='list-disc'>{strIngredient1}</li>}
                            {strIngredient2 && <li className='list-disc'>{strIngredient2}</li>}
                            {strIngredient3 && <li className='list-disc'>{strIngredient3}</li>}
                            {strIngredient4 && <li className='list-disc'>{strIngredient4}</li>}
                            {strIngredient5 && <li className='list-disc'>{strIngredient5}</li>}
                            {strIngredient6 && <li className='list-disc'>{strIngredient6}</li>}
                            {strIngredient7 && <li className='list-disc'>{strIngredient7}</li>}
                            {strIngredient8 && <li className='list-disc'>{strIngredient8}</li>}
                            {strIngredient9 && <li className='list-disc'>{strIngredient9}</li>}
                            {strIngredient10 && <li className='list-disc'>{strIngredient10}</li>}
                            {strIngredient11 && <li className='list-disc'>{strIngredient11}</li>}
                            {strIngredient12 && <li className='list-disc'>{strIngredient12}</li>}
                            {strIngredient13 && <li className='list-disc'>{strIngredient13}</li>}
                            {strIngredient14 && <li className='list-disc'>{strIngredient14}</li>}
                            {strIngredient15 && <li className='list-disc'>{strIngredient15}</li>}
                        </ol>
                    </div>
                </div>
                <h3 className='mt-12 mb-6 text-3xl font-semibold'>Procedure: </h3>
                <p>{strInstructions}</p>
            </div>
        </div>
    );
};

export default HowTo;