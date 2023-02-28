import classes from "./Header.module.css";
import {authActions} from "../store";
import {useDispatch} from "react-redux";


const Header = () => {

    const dispatch = useDispatch()

    const logger = (e) => {
        e.preventDefault()
        dispatch(authActions.unassigned())
    }


    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <h2>Redux!</h2>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/">Контакты</a>
                    </li>
                    <li>
                        <button onClick={logger}>Выйти</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
