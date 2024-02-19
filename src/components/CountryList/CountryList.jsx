import style from "./CountryList.module.css";
import { Button } from "../UI/MyButton/Button";
export const CountryList = (props) => {
    console.log(props)
    return (
    <div className={style.box_container}>
            {props.country.map((e) => <div className={style.box} key={e.id}>
                <img src={e.img} alt="img" />
        <div className={style.content}>
            <h3><i class="fas fa-map-marker-alt"></i> {e.name}</h3>
            <p>{e.descraption}</p>
            <div className={style.price}> {e.newPrice}₽ <span>{e.oldPrice}₽</span> </div>
        <Button>Забронировать</Button>
        </div>
    </div>
)} 
    </div>
)};