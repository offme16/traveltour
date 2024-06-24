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
  const arr = props.country.filter(e => e.tour.discount > 0);
  console.log(arr);
  const tooggle = (e) => {
    setVisible(true);

    const city = props.country.find(item => item.tour.id === e);
    dispatch(bookActions.setTourID(e));
    setTour(city);
  }

  return (
    <>
      <div className={style.box_container}>
        {arr.length ? arr.map((e) => (
          <div className={style.box} key={e.tour.id}>
            <img src={e.tour.images.url} alt="img" />
            <div className={style.content}>
              <h3><i className="fas fa-map-marker-alt"></i> {e.tour.name}</h3>
              <p>{e.description}</p>
              <div className={style.button_container}>
                <div className={style.price}>Цена:{e.tour.price}₽ <span>Скидка:{e.tour.discount}%</span> </div>
                <Button onClick={() => tooggle(e.tour.id)}>Забронировать</Button>
              </div>
            </div>
          </div>
        )) : <div className={style.box_container__error}>Ничего не найдено:(</div>}
      </div>
      <MyModal visible={visible} setVisible={setVisible}>
        <BookForm tour={tour}/>
      </MyModal>
    </>
  );
};