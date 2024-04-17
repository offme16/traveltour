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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sum = useSelector(state => state.book.total);
    const bookData = useSelector(state => state.book);

    const handleField = useCallback((value, fieldName) => {
        dispatch(bookActions.setField({ value, fieldName }));
    }, [dispatch]);

    if (!tour) {
        return null;
    }
    
    const { name, newPrice, id } = tour;

    const handlePrice = (value) => {
        const price = value * newPrice;
        dispatch(bookActions.setCount({ value }));
        dispatch(bookActions.setTotal({ price }));
    };

    const postBook = async () => {
      try {
          dispatch(bookActions.setTourID(id))
          const result = await dispatch(postBookForm(bookData));
          if (result.meta.requestStatus === "rejected") {
              alert("Произошла ошибка: " + result.payload);
          } else {
              navigate("/");
          }   
      } catch (error) {
          console.error("Произошла ошибка:", error);
          alert("Произошла ошибка при входе!");
      }
  };

    return (
        <section className={style.book}>
            <h1 className={style.heading}>
                <StringSplitter text={'ЗАБРОНИРУЙ'} />
            </h1>
            <div className={style.row}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Input type="text" value={name} readOnly onChange = {handleField(name, "name")}> Куда отправимся </Input>
                    <Input type="number" placeholder="Введите количество пассажиров" onChange={(e) => handlePrice(e.target.value)}> Количество пассажиров </Input>
                    <Input type="date" onChange = {(e) => handleField(e.target.value, "dateOfDispatch")}>Прибытие</Input>
                    <Input type="date" onChange = {(e) => handleField(e.target.value, "dateOfArrival")}>Отъезд</Input>
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
