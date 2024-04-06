import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Tour.module.css";
import { useParams } from "react-router-dom";
import { Button } from "../../components/UI/MyButton/Button";
import MyModal from "../../components/UI/MyModal/MyModal";
import BookForm from "../../components/BookForm/BookForm";

const Tour = () => {
  const [visible, setVisible] = useState(false);
  const { id } = useParams();
  const country = useSelector((state) =>
    state.countriesData.countries.find((country) => country.id === id)
  );


  if (!country) {
    return <div>Тур не найден</div>;
  }

  return (
    <div className={style.container}>
        <div className={style.tourViewer}>
      <img src={country.img} alt="Tour" className={style.tourPhoto} />
      <div className={style.tourInfo}>
        <div className={style.tourPrice}>{country.name}</div>
        <div className={style.tourPrice}>Цена: {country.newPrice}₽</div>
        <div className={style.tourDescription}>{country.descraption}</div>
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
