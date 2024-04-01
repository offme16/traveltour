import { useState } from "react";
import { Button } from "../UI/MyButton/Button";
import { Input } from "../UI/MyInput/Input";
import style from "./BookForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../../store/countrySlice";

const BookForm = ({ tour }) => {
    const dispatch = useDispatch();
    const sum = useSelector(state => state.countriesData.total);

    if (!tour || !Array.isArray(tour) || tour.length === 0) {
        return null;
    }

    const { name, newPrice } = tour[0];

    const handleField = (value) => {
        const price = value * newPrice;
        dispatch(countriesActions.setCount({ value }));
        dispatch(countriesActions.setTotal({ price }));
    };

    const postBook = () => {
        
    }

    return (
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
                <form>
                    <Input type="text" value={name} readOnly> Куда отправимся </Input>
                    <Input type="number" placeholder="Введите количество пассажиров" onChange={(e) => handleField(e.target.value)}> Количество пассажиров </Input>
                    <Input type="date">Прибытие</Input>
                    <Input type="date">Отъезд</Input>
                    <div className={style.total}>
                        <strong>Сумма:</strong>
                        <strong>{sum}₽</strong>
                    </div>
                    <Button onClick={postBook}>Забронировать сейчас</Button>
                </form>
            </div>
        </section>
    )
}
export default BookForm;
