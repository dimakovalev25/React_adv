import Card from "../UI/Card";
import styles from "./ProductItem.module.css";

import {cartActions} from "../../store";
import {useDispatch} from "react-redux";

const ProductItem = (props) => {
    const {title, price, description} = props;

    const dispatch = useDispatch()

    const good = {
        name: title,
        price: price,
        description: description,
        quantity: 1,
    }

    const addGoods = () => {
        dispatch(cartActions.addProduct(good))
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
                    <button onClick={addGoods}>Добавить в Корзину</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
