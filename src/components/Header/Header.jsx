import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/img/user.svg"
import log_out from "../../assets/img/logout.svg"
import { logoutUser } from "../../store/asyncThunk/logoutUser";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import { USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH } from "../../store/const/actionTypes";
export const Header = () => {
    const dispatch = useDispatch();
    const out = () => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        localStorage.removeItem(USER_LOCALSTORAGE_REFRESH);
        dispatch(userActions.logout())
    }
    const isAuth = useSelector(state => state.user.isAuth );
    return (
        <header>
            <NavLink to={'/'}>
                <h1 className={style.logo}><span>T</span>ravel<span>T</span>our</h1>
            </NavLink>
            <nav className={style.navbar}>
            <NavLink to={'/'} href="#home">Главная</NavLink>
            <NavLink to={'/search'} href="#packages">Туры</NavLink>
            <a href="#gallery">Галерея</a>
            <a href="#review">Отзывы</a>
            </nav>
            <>
            {!isAuth ? <NavLink to={'/registration'}><img className={style.img} src={avatar} alt="profile"/></NavLink> : <NavLink onClick={out}><img className={style.img} src={log_out} alt="logout"/></NavLink>}
            </>
        </header>
    )
}