import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Tour.module.css";
import { useParams } from "react-router-dom";
import { Button } from "../../components/UI/MyButton/Button";
import MyModal from "../../components/UI/MyModal/MyModal";
import BookForm from "../../components/BookForm/BookForm";
import ScrollToTop from "../../assets/lib/scrollTop";
import { getHostel } from "../../store/asyncThunk/getHostel";
import { getTour } from "../../store/asyncThunk/getTour";
import { ID_HOTEL, ID_TOUR } from "../../store/const/actionTypes";

const Tour = () => {
  ScrollToTop();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { id } = useParams();

  localStorage.setItem(ID_TOUR, id);

  
  const country = useSelector((state) =>
    state.countriesData.countries.find((country) => country.id === Number(id))
  );
  localStorage.setItem(ID_HOTEL, country.hotelId);


  useEffect(() => {
    if (country.hotelId){
      dispatch(getHostel(country.hotelId));
    } else {
      const hostelId = JSON.parse(localStorage.getItem(ID_HOTEL));
      dispatch(getHostel(hostelId));
    }
 },[dispatch]);

  if (!country) {
    return <div>Тур не найден</div>;
  }

  return (
    <div className={style.container}>
        <div className={style.tourViewer}>
      <img src={country.images} alt="Tour" className={style.tourPhoto} />
      <div className={style.tourInfo}>
        <div className={style.tourPrice}>{country.name}</div>
        <div className={style.tourPrice}>Цена: {country.price}₽</div>
        <div className={style.tourDescription}>{country.description}</div>
        <Button  onClick = {() => setVisible(true)}>Забронировать</Button>
      </div>
      
    </div>
        <MyModal visible={visible} setVisible={setVisible} >
            <BookForm tour={country}/>
        </MyModal>
    </div>
    
  );
};

export default Tour;
