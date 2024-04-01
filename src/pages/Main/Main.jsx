import style from "./Main.module.css";
import Carusel from "../../components/Slider/Carusel";
import { useSelector } from "react-redux";
import { Button } from "../../components/UI/MyButton/Button";
import { CountryList } from "../../components/CountryList/CountryList";
import book from "../../assets/img/book.svg";
import contact from "../../assets/img/contact.svg";
import { Input } from "../../components/UI/MyInput/Input";
import { GalleryList } from "../../components/GalleryList/GalleryList";
import Slider from "react-slick";
const Main = () => {
    const country = useSelector(state => state.countriesData.countries);
    return (
        <div className={style.home}>
            <Carusel />
            <section className={style.packages} id="packages">
                <h1 className={style.heading}>
                    <span>А</span>
                    <span>К</span>
                    <span>Т</span>
                    <span>У</span>
                    <span>А</span>
                    <span>Л</span>
                    <span>Ь</span>
                    <span>Н</span>
                    <span>Ы</span>
                    <span>Е</span>
                    <span className={style.space}></span>
                    <span>Т</span>
                    <span>У</span>
                    <span>Р</span>
                    <span>Ы</span>
                </h1>
                <CountryList country={country}/>
            </section>

            <section className={style.services}>
                <h1 className={style.heading}>
                    <span>С</span>
                    <span>Е</span>
                    <span>Р</span>
                    <span>В</span>
                    <span>И</span>
                    <span>С</span>
                </h1>

                <div className={style.box_container} id="services">
                    <div className={style.box}>
                        <i className="fas fa-hotel"></i>
                        <h3>Доступные отели</h3>
                        <p>От 3-х звездочных до 5-ти звездочных отелей, у нас есть лучшие в вашем бюджете.</p>
                    </div>
                    <div className={style.box}>
                        <i className="fas fa-utensils"></i>
                        <h3>Еда и напитки</h3>
                        <p>Посетите лучшие места для гурманов.</p>
                    </div>
                    <div className={style.box}>
                        <i className="fas fa-bullhorn"></i>
                        <h3>Руководство по безопасности</h3>
                        <p>Чтобы сохранить ваши планы по времени, рекомендуется получить руководство по безопасности.</p>
                    </div>
                    <div className={style.box}>
                        <i className="fas fa-globe-asia"></i>
                        <h3>Вокруг света</h3>
                        <p>Буквально любое место на Земле. Отличные руководства по направлениям по всему миру.</p>
                    </div>
                    <div className={style.box}>
                        <i className="fas fa-plane"></i>
                        <h3>Самые быстрые путешествия</h3>
                        <p>Устали сидеть в самолете часами? У нас самые быстрые путешествия благодаря партнерству с Emirates.</p>
                    </div>
                    <div className={style.box}>
                        <i className="fas fa-hiking"></i>
                        <h3>Приключения</h3>
                        <p>Получите лучшие приключения, планируя с нами. От детей до пожилых, есть приключение для каждого.</p>
                    </div>
                </div>
            </section>

            <section className={style.gallery} id="gallery">

            <h1 className={style.heading}>
                <span>Г</span>
                <span>А</span>
                <span>Л</span>
                <span>Е</span>
                <span>Р</span>
                <span>Е</span>
                <span>Я</span>
            </h1>
            <GalleryList country={country}/>
            </section>

            <section class="review" id="review">
            <h1 className={style.heading}>
            <span>О</span>
            <span>Т</span>
            <span>З</span>
            <span>Ы</span>
            <span>В</span>
            <span>Ы</span>
            </h1>
</section>
</div>
)};

export default Main;
