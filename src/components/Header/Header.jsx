import style from "./Header.module.css";
import { Button } from "../UI/MyButton/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import avatar from "../../assets/img/user.svg"
import log_out from "../../assets/img/logout.svg"
export const Header = () => {
    const[acc, setAcc] = useState(true);
    return (
        <header>
            <NavLink to={'/'}>
                <h1 className={style.logo}><span>T</span>ravel<span>T</span>our</h1>
            </NavLink>
            <nav className={style.navbar}>
            <a href="#home">Главная</a>
            <a href="#book">Забронировать</a>
            <a href="#packages">Туры</a>
            <a href="#services">Сервис</a>
            <a href="#gallery">Галерея</a>
            <a href="#review">Отзывы</a>
            <a href="#contact">Связаться с нами</a>
            <NavLink href="/about">О компании</NavLink>
            </nav>
            <>
            {acc ? <NavLink><img className={style.img} src={avatar} alt="profile"/></NavLink> : <NavLink><img className={style.img} src={log_out} alt="logout"/></NavLink>}
            </>
        </header>
    )
}