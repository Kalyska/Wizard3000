import React, { Fragment } from 'react';
import displayPrice from './DisplayPrice';

const OrderList = ({ catalog, orderIngredients, total, paid = false, setPaid = false }) => {
    
    const ingrList = Object.keys(orderIngredients).map(key => {
        const totalIngredientPrice = catalog[key].price * orderIngredients[key];
        return (
            <div className="order-details-item" key={key}>
                <div className="ingredient-details">
                    <span>{catalog[key].name}</span>
                    <span>{displayPrice(totalIngredientPrice)}</span>
                </div>
                <div className="price-details">({orderIngredients[key]} x {displayPrice(catalog[key].price)})</div>
            </div>
        );
    });

    return (
        <Fragment>
            <div className="order-details-list">
                {ingrList}
            </div>
            <div className="order-summary">
                <div className="order-total">
                    Soit un total de : <strong>{displayPrice(total)}</strong>
                </div>
                {paid ? <button className="order-paid-button" onClick={setPaid}>Encaisser la commande</button> : ""}
            </div>
        </Fragment>
    )
};

export default OrderList;