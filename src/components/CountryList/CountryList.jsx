import style from "./CountryList.module.css";
import { Button } from "../UI/MyButton/Button";
import MyModal from "../UI/MyModal/MyModal";
import BookForm from "../BookForm/BookForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../../store/bookSlice";

export const CountryList = (props) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [tour, setTour] = useState();
    const arr = props.country.filter(e => e.discount > '0');
    
    const tooggle = (e) => {
        setVisible(true);
        const city = props.country.find(item => item.id === e);
        dispatch(bookActions.setTourID(e));
        setTour(city);
    }

    return (
    <div className={style.box_container}>
            {arr.map((e) => <div className={style.box} key={e.id}>
                <img src={e.img} alt="img" />
        <div className={style.content}>
            <h3><i class="fas fa-map-marker-alt"></i> {e.name}</h3>
            <p>{e.description}</p>
            <div className={style.price}>{e.price - ((e.discount*e.price)/100)} ₽ <span>{e.price}₽</span> </div>
        <Button  onClick = { () => tooggle(e.id)}>Забронировать</Button>
        </div>
        <MyModal visible={visible} setVisible={setVisible} >
            <BookForm tour={tour}/>
        </MyModal>
    </div>
)} 
    </div>
)};