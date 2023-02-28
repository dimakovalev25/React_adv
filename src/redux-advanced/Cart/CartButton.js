import styles from "./CartButton.module.css";
import {useSelector, useDispatch} from "react-redux";
import {cartActions} from "../../store";

const CartButton = (props) => {

    const dispatch = useDispatch()
    const activeProducts = useSelector(state => state.cart.quantity)
    const showCart = () => {
        dispatch(cartActions.setCartShow())
    }

    return (
        <button onClick={showCart} className={styles.button}>
            <span>Корзина</span>
            <span className={styles.badge}>{activeProducts}</span>
        </button>
    );
};

export default CartButton;
