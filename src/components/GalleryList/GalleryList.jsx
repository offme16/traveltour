import { NavLink, useNavigate } from "react-router-dom"
import style from "./GalleryList.module.css"
import { Button } from "../UI/MyButton/Button"
export const GalleryList = (props) => {
    return (
        <div className={style.box_container}>
            {props.country.map((e) => 
            <div className={style.box} key={e.id}>
            <img src={e.img} alt="img" />
        <div className={style.content}>
            <h3>{e.name}</h3>
            <NavLink to={`/tour/${e.id}`} ><Button>Подробнее</Button></NavLink>
        </div>
    </div>
)}
</div>
)};