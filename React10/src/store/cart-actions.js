import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";


import axios from "axios";

import { pendingNotification } from "../components/data/pending_notification";

export const getCart = () => {
    return async dispatch => {
        dispatch(uiActions.showNotification(pendingNotification));
        try {
            // const fetchData = async () => {
            const response = await axios.get('https://react-test-3e7fc-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            const { data } = response;
            const { status: code, statusText: message } = response;
            dispatch(uiActions.showNotification({ name: "SUCCESS", code, message }));
            dispatch(cartActions.replaceCart({
                items: data.items || [],
                totalQuantity: data.totalQuantity
            }));
            return data;
        }
        catch (err) {
            const { name, code, message } = err;
            dispatch(uiActions.showNotification({ name, code, message }));
        } finally {
            dispatch(uiActions.removeNotification());
        }
    }
    // }
}

export const sendCartData = (cart) => {
    console.log(cart);
    return async dispatch => {
        dispatch(uiActions.showNotification(pendingNotification));

        // (async () => {
        try {
            // dispatch(uiActions.showNotification({ notification: pendingNotification }
            const response = await axios.put('https://react-test-3e7fc-default-rtdb.europe-west1.firebasedatabase.app/cart.json', cart);
            // console.log(response);
            const { status: code, statusText: message } = response;
            dispatch(uiActions.showNotification({ name: "SUCCESS", code, message }));

        } catch (err) {
            const { name, code, message } = err;
            dispatch(uiActions.showNotification({ name, code, message }));
        } finally {
            dispatch(uiActions.removeNotification());
        }
    };
}