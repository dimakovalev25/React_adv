import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = (props) => {
    return (
        <section className={styles.products}>
            {/*<h2>В нашем магазине товары самого высокого качества</h2>*/}
            <ul>
                <ProductItem
                    title="Товар1"
                    price={7}
                    description=""
                />
                <ProductItem
                    title="Товар2"
                    price={8}
                    description=""
                />
                <ProductItem
                    title="Товар3"
                    price={10}
                    description=""
                />

            </ul>
        </section>
    );
};

export default Products;
