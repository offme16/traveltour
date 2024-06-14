import { NavLink } from "react-router-dom"
import style from "./GalleryList.module.css"
import { Button } from "../UI/MyButton/Button"
import { useDispatch } from "react-redux";
import { bookActions } from "../../store/bookSlice";
export const GalleryList = (props) => {
    const dispatch = useDispatch();
    return (
        <> 
        {props.country.length ?  <div className={style.box_container}>
        {props.country.map((e) => 
        <div className={style.box} key={e.id}>
        <img src={e.tour.images.url} alt="img" />
    <div className={style.content}>
        <h3>{e.tour.name}</h3>
        <NavLink to={`/tour/${e.tour.id}`}><Button onClick={() => dispatch(bookActions.setTourID(e.tour.id))}>Подробнее</Button></NavLink>
    </div>
    </div>)}
    </div>
    : <div className={style.box_container__error}>Ничего не найдено:(</div>}       
</>  
)};