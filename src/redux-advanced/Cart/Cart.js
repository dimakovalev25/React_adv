import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store";


import {useSelector} from "react-redux";

const Cart = (props) => {

    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items)
    // console.log(items)

    useEffect(() => {

        dispatch(cartActions.showStatusMessage(
            {
                status: 'pending',
                title: 'sending data',
                message: 'sending cart data'
            }
        ))

        fetch('https://rmgcvjctjv-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(items)
        })
            .then(res => {
                dispatch(cartActions.showStatusMessage(
                    {
                        status: 'success',
                        title: 'sent data',
                        message: 'sent cart data on server'
                    }
                ))
            })
            .catch(err => {
                dispatch(cartActions.showStatusMessage(
                    {
                        status: 'error',
                        title: 'error sending data',
                        message: 'data not sent'
                    }
                ))
            })

    }, [items])


    return (
        <Card className={styles.cart}>
            <h2>My purchases</h2>
            <ul>

                {items.map(item => <CartItem key={item.id}
                                             item={{
                                                 id: item.id,
                                                 title: item.title,
                                                 quantity: item.quantity,
                                                 total: item.totalPrice,
                                                 price: item.price
                                             }}
                />)}

            </ul>
        </Card>
    );
};

export default Cart;
