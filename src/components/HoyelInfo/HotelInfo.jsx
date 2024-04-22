import React, { useEffect } from "react";
import style from "./HotelInfo.module.css"
import { getHostel } from "../../store/asyncThunk/getHostel";
import { useDispatch, useSelector } from "react-redux";
const HotelInfo = ({ country }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHostel(country.hotelId));
      },[dispatch, country])
    
      const hotel = useSelector((state) => state.hostel.hostel);

  return (
    <> {hotel ? <div className={style.hotelInfo}> 
    <h2>{hotel.name}</h2>
    <p>Город: {hotel.city}</p>
    <p>Тип: {hotel.type}</p>
    <p>{hotel.description}</p>
    <p>Рейтинг: {hotel.star}</p>
    <p>Подходит для детей: {hotel.allowChild ? "Да" : "Нет"}</p>
    <p>Бесплатный Wi-Fi: {hotel.freeWifi ? "Да" : "Нет"}</p>
    <p>Тип питания: {hotel.typeOfNutrition}</p>
    {/* Добавьте здесь отображение изображений отеля, если есть */}
  </div>
    : ''} </>
  );
};
export default HotelInfo;