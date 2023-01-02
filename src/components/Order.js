import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Ingredient from './Ingredient';
import OrderList from './OrderList';
import { addIngrToOrder } from '../slices';
import displayPrice from './DisplayPrice';

const Order = () => {
    const dispatch = useDispatch();

    const ingredients = useSelector(state => state.data.catalog);
    const orders = useSelector(state => state.data.orders);

    // Equivalent d'un this.props.match.params.oid dans React Router v5 avec un composant stateful
    const { oid } = useParams()

    const handleClick = (oid, iid) => {
        dispatch(addIngrToOrder({oid, iid}));
    }

    const index = orders.findIndex(order => {
        return order.id === oid;
    });

    const catalogList = Object.keys(ingredients).map(key => {
        return (
            <Ingredient
                key={key}
                name={ingredients[key].name}
                price={ingredients[key].price}
                image={ingredients[key].image}
                addToOrder={() => handleClick(oid, key)}
            />
        );
    });

    return (
        <div className="App">
            <Header />

            <div className="order">
                <div className="ingredients-wrapper">
                    {catalogList}
                </div>
                <div className="order-details-wrapper">
                    <div className="order-details">
                        <h2>Détail de la commande n°{oid}</h2>
                        <OrderList
                            catalog={ingredients}
                            orderIngredients={orders[index].ingredients}
                            total={orders[index].total}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order