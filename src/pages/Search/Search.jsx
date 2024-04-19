import { GalleryList } from '../../components/GalleryList/GalleryList';
import { useDispatch, useSelector } from "react-redux";
import style from './Search.module.css';
import { Button } from '../../components/UI/MyButton/Button';
import { Input } from '../../components/UI/MyInput/Input';
import { useCallback } from 'react';
import { bookActions } from '../../store/bookSlice';
import { searchTour } from '../../store/asyncThunk/searchTour';

const Search = () => {
    const country = useSelector(state => state.countriesData.countries);
    const dispatch = useDispatch();
    const bookData = useSelector(state => state.book);
    
    const handleField = useCallback((value, fieldName) => {
        dispatch(bookActions.setField({ value, fieldName }));
    }, [dispatch]);

    const onSubmit = async () => {
        try {
            const result = await dispatch(searchTour(bookData));
            if (result.meta.requestStatus === "rejected") {
                alert("Произошла ошибка: " + result.payload);
            } else {
                alert("все прошло успешно");
            }   
        } catch (error) {
            console.error("Произошла ошибка:", error);
            alert("Произошла ошибка при входе!");
        }
    };

    return (
    <div className={style.content}>
        <form className={style.seacrh__Form} onSubmit={(e)=> e.preventDefault()}>
        <Input type="string" placeholder="Введите страну" onChange={(e) => handleField(e.target.value, "country")}>Страна</Input>
        <Input type="number" placeholder="Введите количество пассажиров" onChange={(e) => handleField(e.target.value, "count")}>Количество пассажиров</Input>
        <Input type="date" onChange={(e) => handleField(e.target.value, "dateOfDispatch")}>Прибытие</Input>
        <Input type="date" onChange={(e) => handleField(e.target.value, "dateOfArrival")}>Отъезд</Input>
        <Button className={style.btn_sf} onClick={onSubmit}>Поиск</Button>
        </form>

        <GalleryList country={country}/>
    </div>
)};
export default Search;