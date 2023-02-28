import Layout from "./redux-advanced/Layout/Layout";
import Products from "./redux-advanced/Shop/Products";
import Cart from "./redux-advanced/Cart/Cart";
import {useSelector} from "react-redux";

function App() {


    //show state
    const state = useSelector(state => state.cart)
    // console.log(state)

    const cartShow = useSelector(state => state.cart.cartShow)


    return (
        <div>
            <Layout/>
            {cartShow ? <Cart/> : null}
            <Products/>
            {/*<ProductItem/>*/}
        </div>
    );
}

export default App;
