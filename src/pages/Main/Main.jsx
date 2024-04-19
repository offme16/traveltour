import style from "./Main.module.css";
import Carusel from "../../components/Slider/Carusel";
import { useDispatch, useSelector } from "react-redux";
import { CountryList } from "../../components/CountryList/CountryList";
import { GalleryList } from "../../components/GalleryList/GalleryList";
import ScrollToTop from "../../assets/lib/scrollTop";
import StringSplitter from "../../components/StringSpliter/StringSpliter";
import { useEffect } from "react";
import { getTour } from "../../store/asyncThunk/getTour";
import { AuthUser } from "../../store/asyncThunk/auth";
import { useNavigate } from "react-router-dom";
import { USER_LOCALSTORAGE_REFRESH } from "../../store/const/actionTypes";

const Main = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

   useEffect(() => {
     if(localStorage.getItem(USER_LOCALSTORAGE_REFRESH)){
       dispatch(AuthUser())
       dispatch(getTour())
     } else {
       navigate('/authorize')
     }
   }, [dispatch]);

    const country = useSelector(state => state.countriesData.countries);
    ScrollToTop();

    return (
        <div className={style.home}>
            <Carusel />
            <section className={style.packages} id="packages">
                <h1 className={style.heading}>
                <StringSplitter text="АКТУАЛЬНЫЕ ТУРЫ" />
                </h1>
                <CountryList country={country}/>
            </section>

            <section className={style.services}>
                <h1 className={style.heading}>
                <StringSplitter text="СЕРВИС" />
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
            <StringSplitter text="ГАЛЕРЕЯ" />
            </h1>
            <GalleryList country={country}/>
            </section>
            <section class="review" id="review">
            <h1 className={style.heading}>
            <StringSplitter text="ОТЗЫВЫ" />
            </h1>
</section>
</div>
)};

export default Main;
