import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Tour.module.css";
import { useParams } from "react-router-dom";
import { Button } from "../../components/UI/MyButton/Button";
import MyModal from "../../components/UI/MyModal/MyModal";
import BookForm from "../../components/BookForm/BookForm";
import ScrollToTop from "../../assets/lib/scrollTop";
import { getTour } from "../../store/asyncThunk/getTour";
import HotelInfo from "../../components/HoyelInfo/HotelInfo";
import { Loader } from "../../components/Loader/Loader";
import { bookActions } from "../../store/bookSlice";

const Tour = () => {
  ScrollToTop();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        await dispatch(getTour());
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };
  
    fetchTour();
  }, [dispatch]);
  
  const country = useSelector((state) =>
    state.countriesData.countries.find((country) => country.tour.id === Number(id))
  );

  const getInf = (id) => {
    setVisible(true)
    dispatch(bookActions.setTourID(id))
  }

  return (
    <div className={style.container}>
      <>
        {country ? (
          <div className={style.tourViewer}>
            <img src={country.tour.images.url} alt="Tour" className={style.tourPhoto} />
            <div className={style.tourInfo}>
              <div className={style.tourPrice}>{country.tour.name}</div>
              <div className={style.tourPrice}>Цена: {country.tour.price}₽</div>
              <div className={style.tourDescription}>{country.tour.description}</div>
              <Button onClick={() => getInf(country.tour.id)}>Забронировать</Button>
            </div>
          </div>
        ) : (
          <Loader />
        )}
        {visible && (
          <MyModal visible={visible} setVisible={setVisible}>
            <BookForm tour={country} />
          </MyModal>
        )}
        {country && <HotelInfo country={country} />}
      </>
    </div>
  );
};

export default Tour;
