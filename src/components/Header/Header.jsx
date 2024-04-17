import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import avatar from "../../assets/img/user.svg"
import log_out from "../../assets/img/logout.svg"
import { logoutUser } from "../../store/asyncThunk/logoutUser";
export const Header = () => {
    const[acc, setAcc] = useState(true);
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
            {acc ? <NavLink to={'/registration'}><img className={style.img} src={avatar} alt="profile"/></NavLink> : <NavLink onClick={()=> logoutUser()}><img className={style.img} src={log_out} alt="logout"/></NavLink>}
            </>
        </header>
    )
}