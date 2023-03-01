import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const ITEMS = [
    {
        id: '1',
        price: 9,
        title: 'Cola',
        description: '1 l'
    },
    {
        id: '2',
        price: 10,
        title: 'Cola vanilla',
        description: '1 l'
    },
    {
        id: '3',
        price: 7,
        title: 'Cola zero',
        description: '0.5 l'
    },
    {
        id: '4',
        price: 12,
        title: 'Cola classic',
        description: '1.5 l'
    },
]


const Products = (props) => {
    return (
        <section className={styles.products}>
            {/*<h2>В нашем магазине товары самого высокого качества</h2>*/}
            <ul>

                {ITEMS.map(item => {
                    return (
                        <ProductItem key={item.id}
                                     id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    )
                })}

            </ul>
        </section>
    );
};

export default Products;
