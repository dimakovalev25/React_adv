import Layout from "./redux-advanced/Layout/Layout";
import Products from "./redux-advanced/Shop/Products";
import Cart from "./redux-advanced/Cart/Cart";
import {useSelector} from "react-redux";
import StatusBarMessage from "./redux-advanced/UI/StatusBarMessage";

function App() {


    //show state
    const state = useSelector(state => state.cart)
    const statusMessage = useSelector(state => state.cart.statusMessage)
    // console.log(statusMessage)

    const cartShow = useSelector(state => state.cart.cartShow)


    return (
        <div>
            {statusMessage ? <StatusBarMessage props={statusMessage}/> : null}
            <Layout/>

            {cartShow ? <Cart/> : null}
            <Products/>
            {/*<ProductItem/>*/}
        </div>
    );
}

export default App;
