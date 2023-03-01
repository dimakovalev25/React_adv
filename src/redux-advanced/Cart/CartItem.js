import styles from "./CartItem.module.css";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store";

const CartItem = (props) => {
    const {id, title, quantity, total, price} = props.item;

    const dispatch = useDispatch();

    const item = {
        id: id,
        price: price,
        title: title,
    }

    const addItem = () => {
        dispatch(cartActions.addItem(item))
    }

    const removeItem = () => {
        dispatch(cartActions.removeItem(id))
    }


    return (
        <li className={styles.item}>
            <header>
                <h3>{title}</h3>
                <div className={styles.price}>
                    ${total.toFixed(2)}{" "}
                    <span className={styles["item-price"]}>
            (${price.toFixed(2)} / thing.)
          </span>
                </div>
            </header>
            <div className={styles.details}>
                <div className={styles.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={removeItem}>-</button>
                    <button onClick={addItem}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
