import Card from "../UI/Card";
import styles from "./ProductItem.module.css";

import {cartActions} from "../../store";
import {useDispatch, useSelector} from "react-redux";

const ProductItem = (props) => {
    const cart = useSelector(state => state.cart)


    const {id, title, price, description} = props;

    const dispatch = useDispatch()

    const item = {
        id: id,
        price: price,
        title: title,
        description: description
    }

    const addItem = () => {
        dispatch(cartActions.addItem(item))
    }


    return (
        <li className={styles.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={styles.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={styles.actions}>
                    <button onClick={addItem}>ADD to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
