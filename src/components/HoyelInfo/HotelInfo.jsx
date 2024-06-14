import React, { useEffect } from "react";
import style from "./HotelInfo.module.css";
import { getHostel } from "../../store/asyncThunk/getHostel";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

const HotelInfo = ({ country }) => {
  const dispatch = useDispatch();
  const hotelIDs = country.tour.hotel.map(e => e.id);

  useEffect(() => {
    dispatch(getHostel(hotelIDs));
  }, [dispatch, country]);

  const hotel = useSelector((state) => state.hostel.hostel);

  const settingsForHotel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessibility: false
  };

  const settingsForImg = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      {hotel && (
        <div className={style.hotelInfoContainer}>
          <Slider {...settingsForHotel}>
            {hotel.map((e) => (
              <div key={e.id} className={style.hotelCard}>
                <div className={style.hotelDetails}>
                  <h2 className={style.hotelName}>{e.name}</h2>
                  <p><span>Город:</span> {e.city}</p>
                  <p><span>Тип:</span> {e.type}</p>
                  <p>{e.description}</p>
                  <p><span>Рейтинг:</span> {e.star}</p>
                  <p><span>Подходит для детей:</span> {e.allowChild ? "Да" : "Нет"}</p>
                  <p><span>Бесплатный Wi-Fi:</span> {e.freeWifi ? "Да" : "Нет"}</p>
                  <p><span>Тип питания:</span> {e.typeOfNutrition}</p>
                </div>
                <div className={style.hotelImages}>
                  <Slider {...settingsForImg}>
                    {e.images.map((image, index) => (
                      <div key={index} className={style.imageContainer}>
                        <img src={image.url} alt={`image-${index}`} className={style.hotelImage} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default HotelInfo;
