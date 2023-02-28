import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";


import {useSelector} from "react-redux";
import Layout from "./redux-advanced/Layout/Layout";
import Products from "./redux-advanced/Shop/Products";
import ProductItem from "./redux-advanced/Shop/ProductItem";
import Cart from "./redux-advanced/Cart/Cart";
import CartButton from "./redux-advanced/Cart/CartButton";

function App() {
    const isAuth = useSelector(state => state.auth.isAuth)
    console.log(isAuth)


    return (
        <div>
            <Header/>
            {!isAuth ?  <Auth/> : <UserProfile/> }
            {/*<Counter/>*/}

            <Layout/>
            <Cart/>
            <Products/>
            {/*<ProductItem/>*/}
        </div>
    );
}

export default App;
