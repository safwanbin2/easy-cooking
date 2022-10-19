import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb, strInstructions} = meal;
    return (
        <div className="card glass">
            <figure><img src={strMealThumb} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strInstructions?.slice(0, 60)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/howto/${idMeal}`} className="btn btn-secondary">How to?</Link>
                </div>
            </div>
        </div>
    );
};

export default Meal;