import style from "./Footer.module.css"
export const Footer = () => {
    return (
    <footer>
        <div className={style.box_container}>

    <div className={style.box}>
    <h3>О нас</h3>
    <p>Мы являемся частью группы TravelTour с 2003 года, 
       с более чем 5000 сотрудниками и более чем 400
       миллионами участников, что делает нас одним из 
       ведущих онлайн-туристических агентств в мире.
    </p>
    </div>

    <div className={style.box}>
    <h3>Места филиалов</h3>
    <a href="#">Индия</a>
    <a href="#">США</a>
    <a href="#">Япония</a>
    <a href="#">Франция</a>
    </div>

    <div className={style.box}>
    <a href="#">Главная</a>
    <a href="#">Забронировать</a>
    <a href="#">Туры</a>
    <a href="#">Сервис</a>
    <a href="#">Галерея</a>
    <a href="#">Отзывы</a>
    <a href="#">Связаться с нами</a>
    <a href="#">О компании</a>
    </div>

    <div className={style.box}>
    <h3>Подписывайтесь на нас</h3>
    <a href="#">Facebook</a>
    <a href="#">Instagram</a>
    <a href="#">Twitter</a>
    <a href="#">Linkedin</a>
    </div>
    </div>
    </footer>
    )
}
