import React from 'react';
import displayPrice from './DisplayPrice'

const Ingredient = ({ name, price, image, addToOrder }) => {

    return (
        <div className="ingredient-wrapper" onClick={addToOrder}>
            <div className="ingredient">
                <img src={require(`../img/ingredients/${image}`)} alt="" className="ingredient-image" />
                <div className="ingredient-text">
                    <h3>{name}</h3>
                    <div className="ingredient-price">{displayPrice(price)}</div>
                </div>
            </div>
        </div>
    );
};

export default Ingredient;
