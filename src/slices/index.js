import { createSlice } from "@reduxjs/toolkit";
import catalog from '../catalog';

const initialState = {
    catalog,
    orders: JSON.parse(localStorage.getItem('orders')) || []
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addOrder: (state, { payload }) => {
            const order = {
                id: payload,
                ingredients: {},
                total: 0,
                paid: false
            }
            // Mise à jour du localStorage
            localStorage.setItem('orders', JSON.stringify([...state.orders, order]));
            // Mise à jour du state global
            state.orders.push(order);
        },

        addIngrToOrder: (state, { payload }) => {
            const oid = payload.oid;
            const iid = payload.iid;

            const index = state.orders.findIndex(order => {
                return order.id === oid;
            });

            const currentOrder = {...state.orders[index]};

            if (!currentOrder.ingredients[iid]) {
                currentOrder.ingredients[iid] = 1;
            } else {
                currentOrder.ingredients[iid]++;
            }

            currentOrder.total = currentOrder.total + state.catalog[iid].price;

            state.orders[index] = currentOrder;
            localStorage.setItem('orders', JSON.stringify(state.orders));
        },

        deleteOrder: (state, { payload }) => {

            const index = state.orders.findIndex(order => {
                return order.id === payload;
            });
            state.orders.splice(index, 1);

            localStorage.setItem('orders', JSON.stringify(state.orders));
        },

        setOrderPaid: (state, {payload}) => {
            const index = state.orders.findIndex(order => {
                return order.id === payload;
            });
            state.orders[index].paid = true;
            
            localStorage.setItem('orders', JSON.stringify(state.orders));
        }
    }
});

export const { addOrder, addIngrToOrder, deleteOrder, setOrderPaid } = dataSlice.actions;

export default dataSlice.reducer;