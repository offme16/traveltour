import style from "./Main.module.css";
import Carusel from "../../components/Slider/Carusel";
import { useSelector } from "react-redux";
import { Button } from "../../components/UI/MyButton/Button";
import { CountryList } from "../../components/CountryList/CountryList";
import book from "../../assets/img/book.svg";
import contact from "../../assets/img/contact.svg";
import { Input } from "../../components/UI/MyInput/Input";

const Main = () => {
    const country = useSelector(state => state.countriesData.countries);
    return (
        <div className={style.home}>
            <Carusel />
            <section className={style.packages}>
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

            <section className={style.book}>
                <h1 className={style.heading}>
                    <span>З</span>
                    <span>А</span>
                    <span>Б</span>
                    <span>Р</span>
                    <span>О</span>
                    <span>Н</span>
                    <span>И</span>
                    <span>Р</span>
                    <span>У</span>
                    <span>Й</span>
                </h1>

                <div className={style.row}>
                    <div className={style.image}>
                        <img src={book} alt="" />
                    </div>
                    <form action="">
                        <Input type="text" placeholder="Введите место"> Куда отправимся </Input>
                        <Input type="number" placeholder="Введите количество пассажиров"> Количество пассажиров </Input>
                        <Input type="date"> Прибытие </Input>
                        <Input type="date"> Отъезд </Input>
                        <Button>Забронировать сейчас</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Main;
