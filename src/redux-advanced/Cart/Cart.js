import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";


import {useSelector} from "react-redux";

const Cart = (props) => {

    const goods = useSelector(state => state.cart.goods)
    console.log(goods)


    return (
        <Card className={styles.cart}>
            <h2>Мои Покупки</h2>
            <ul>

                {goods.map((good, i) =>  <CartItem key={i}
                    item={{title: good.name, quantity: 1, total: 1, price: good.price}}
                /> )}

            </ul>
        </Card>
    );
};

export default Cart;
