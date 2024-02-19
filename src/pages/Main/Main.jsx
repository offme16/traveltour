import style from "./Main.module.css"
import Carusel from "../../components/Slider/Carusel"
import mym from "../../assets/img/p-1.jpg"
import { useSelector } from "react-redux"
import { countriesReducer } from "../../store/countrySlice"
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

        <div className={style.box_container}>
            {country.map((e) => <div className={style.box}>
                    <img src={e.img} alt="img" />
                <div className={style.content}>
                    <h3><i class="fas fa-map-marker-alt"></i>{e.name}</h3>
                    <p>{e.descraption}</p>
                    <div className={style.price}> {e.newPrice}₽ <span>{e.oldPrice}₽</span> </div>
                <a href="#" class="btn">Забронировать</a>
                </div>
            </div>)}   
        </div>
        </section>
        </div>
    )
}
export default Main;