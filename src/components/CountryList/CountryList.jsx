import style from "./CountryList.module.css";
import { Button } from "../UI/MyButton/Button";
import MyModal from "../UI/MyModal/MyModal";
import BookForm from "../BookForm/BookForm";
import { useState } from "react";
export const CountryList = (props) => {
    const [visible, setVisible] = useState(false);

    const [tour, setTour] = useState();

    const tooggle = (e) => {
        setVisible(true);
        const city = props.country.filter(item => item.id === e)
        setTour(city)
    }

    return (
    <div className={style.box_container}>
            {props.country.map((e) => <div className={style.box} key={e.id}>
                <img src={e.img} alt="img" />
        <div className={style.content}>
            <h3><i class="fas fa-map-marker-alt"></i> {e.name}</h3>
            <p>{e.descraption}</p>
            <div className={style.price}> {e.newPrice}₽ <span>{e.oldPrice}₽</span> </div>
        <Button  onClick = { () => tooggle(e.id)}>Забронировать</Button>
        </div>
        <MyModal visible={visible} setVisible={setVisible} >
            <BookForm tour={tour}/>
        </MyModal>
    </div>
)} 
    </div>
)};