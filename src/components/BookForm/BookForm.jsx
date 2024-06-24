import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../store/bookSlice";
import { postBookForm } from "../../store/asyncThunk/postBook";
import { Button } from "../UI/MyButton/Button";
import { Input } from "../UI/MyInput/Input";
import StringSplitter from "../StringSpliter/StringSpliter";
import style from "./BookForm.module.css";
import { toast } from 'react-hot-toast';
import Select from "../UI/MySelect/Select";

const BookForm = ({ tour }) => {
  const dispatch = useDispatch();
  const sum = useSelector((state) => state.book.total);
  const bookData = useSelector((state) => state.book);

  const handleField = useCallback((value, fieldName) => {
    dispatch(bookActions.setField({ value, fieldName }));
  }, [dispatch]);

  if (!tour) {
    return null;
  }
  const { name, price, discount, hotel } = tour.tour;

  function currentSumm(value) {
    return value * price;
  }

  const handlePrice = (value) => {
    let sumPrice = currentSumm(value);
    dispatch(bookActions.setCount({ value: parseInt(value, 10) }));
    dispatch(bookActions.setTotal({ sumPrice }));
  };

  const postBook = async () => {
    try {
      const result = await dispatch(postBookForm(bookData));
      if (result.meta.requestStatus === "fulfilled") {
        toast.success(result.payload);
      } else {
        toast.error(result.payload);
      }
    } catch (error) {
      toast.error("Произошла ошибка на сервере, повторите попытку позже");
    }
  };
  const hotelOptions = hotel ? hotel.map(e => ({ value: e.id, label: e.name })) : [];
  return (
    <section className={style.book}>
      <h1 className={style.heading}>
        <StringSplitter text={"ЗАБРОНИРУЙ"} />
      </h1>
      <div className={style.row}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input type="text" value={name} readOnly onChange={(e) => handleField(e.target.value, "name")}>
            Вы выбрали
          </Input>
          <Select options={hotelOptions} onChange={(e) => handleField(e.target.value, "hotelID")}>
            Выберите отель
          </Select>
          <Input type="number" placeholder="Введите количество пассажиров" onChange={(e) => handlePrice(e.target.value)}>
            Количество пассажиров
          </Input>
          <div className={style.total}>
            <strong>Сумма:</strong>
            <strong>{sum}₽</strong>
          </div>
          <Button onClick={postBook}>Забронировать сейчас</Button>
        </form>
      </div>
    </section>
  );
};

export default BookForm;