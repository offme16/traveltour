import { GalleryList } from '../../components/GalleryList/GalleryList';
import { useDispatch, useSelector } from "react-redux";
import style from './Search.module.css';
import { Button } from '../../components/UI/MyButton/Button';
import { Input } from '../../components/UI/MyInput/Input';
import { useCallback, useEffect } from 'react';
import { bookActions } from '../../store/bookSlice';
import { searchTour } from '../../store/asyncThunk/searchTour';
import { getTour } from '../../store/asyncThunk/getTour';

const Search = () => {
    const country = useSelector(state => state.countriesData.countries);
    const dispatch = useDispatch();
    const bookData = useSelector(state => state.book);

    useEffect(()=> {
        dispatch(getTour())
    },[dispatch]);

    const handleField = useCallback((value, fieldName) => {
        dispatch(bookActions.setField({ value, fieldName }));
    }, [dispatch]);

    const onSubmit = async () => {
        if (!bookData.dateOfDispatch || !bookData.dateOfArrival) {
            alert("Please fill in both arrival and departure dates.");
            return;
        }
        try {
            const result = await dispatch(searchTour(bookData));
            if (result.meta.requestStatus === "rejected") {
                alert("An error occurred: " + result.payload);
            } 
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while submitting!");
        }
    };

    return (
    <div className={style.content}>
        <form className={style.seacrh__Form} onSubmit={(e)=> e.preventDefault()}>
        <Input type="string" placeholder="Введите страну" onChange={(e) => handleField(e.target.value, "country")} >Страна</Input>
        <Input type="number" placeholder="Введите количество пассажиров" onChange={(e) => handleField(e.target.value, "count")}>Количество пассажиров</Input>
        <Input type="date" onChange={(e) => handleField(e.target.value, "dateOfDispatch")} required>Прибытие</Input>
        <Input type="date" onChange={(e) => handleField(e.target.value, "dateOfArrival")} required>Отъезд</Input>
        <Button className={style.btn_sf} onClick={onSubmit}>Поиск</Button>
        </form>
        <GalleryList country={country}/>
    </div>
)};
export default Search;