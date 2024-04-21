import { Button } from "../UI/MyButton/Button";
import { Input } from "../UI/MyInput/Input";
import style from "./BookForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import { bookActions } from "../../store/bookSlice";
import { useNavigate } from "react-router-dom";
import { postBookForm } from "../../store/asyncThunk/postBook";
import StringSplitter from "../StringSpliter/StringSpliter";

const BookForm = ({ tour }) => {
    const dispatch = useDispatch();
    const sum = useSelector(state => state.book.total);
    const bookData = useSelector(state => state.book);
    const handleField = useCallback((value, fieldName) => {
        dispatch(bookActions.setField({ value, fieldName }));
    }, [dispatch]);

    if (!tour) {
        return null;
    }
    
    const { name, price, id, discount } = tour;

    function currentSumm(value) {
        return discount > 0 ?  value * price - ((discount*price)/100) : value * price;
    }

    const handlePrice = (value) => {
        let sumPrice = currentSumm(value);
        dispatch(bookActions.setCount({ value: parseInt(value, 10) }));
        dispatch(bookActions.setTotal({ sumPrice }));
    };

    const postBook = async () => {
      try {
          const result = await dispatch(postBookForm(bookData));
          if (result.meta.requestStatus === "rejected") {
              alert("Произошла ошибка: " + result.payload);
          } else {

          }   
      } catch (error) {
          console.error("Произошла ошибка:", error);
          alert("Произошла ошибка!");
      }
  };

    return (
        <section className={style.book}>
            <h1 className={style.heading}>
                <StringSplitter text={'ЗАБРОНИРУЙ'} />
            </h1>
            <div className={style.row}>
                <form onSubmit={(e) => e.preventDefault()}>
                <Input type="text" value={name} readOnly onChange={(e) => handleField(e.target.value, "name")}> Вы выбрали </Input>
                <Input type="number" placeholder="Введите количество пассажиров" onChange={(e) => handlePrice(e.target.value)} > Количество пассажиров </Input>
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