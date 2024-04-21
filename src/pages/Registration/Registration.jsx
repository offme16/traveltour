import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/MyButton/Button";
import style from "./Registration.module.css";
import {useForm} from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { registUser } from "../../store/asyncThunk/registUser";
import { Loader } from "../../components/Loader/Loader";
import { registActions } from "../../store/registrationSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector(state => state.registration);

  const handleField = useCallback((value, fieldName) => {
    dispatch(registActions.setField({ value, fieldName }));
  }, [dispatch])

    const {
        register,
        formState:{
            errors,   
        },
        handleSubmit,
    } = useForm({
      mode: "onBlur"
    });

      const onSubmit = useCallback( async () => {
        const result = await  dispatch(registUser(authData));
         if(result.meta.requestStatus === "fulfilled") {
            navigate("/authorize");
          }
      },[dispatch, navigate, authData]);
      
  return (
    <div className={style.container}>
      { authData.isLoading ? <Loader /> : <form className={style.form} method="post" onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Регистрация</p>
        <input {...register("name", {required: true})}  placeholder="Имя пользователя" type="text" className={style.input} onChange={e => handleField(e.target.value, "username")}/> 
        <input {...register("email", {required: true})} placeholder="Email" type="email" className={style.input} onChange={e => handleField(e.target.value, "email")}/>
        <input {...register("pass", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        })} placeholder="Пароль" type="password" className={style.input} onChange={e => handleField(e.target.value, "password")}/>
          <div>{errors?.pass && <em>"Пароль должен содержать минимум 8 символов, включая только буквы и цифры только на латинице."</em>}</div>
          <div>
            {errors.name && errors.secname && errors.surname && <em>Все поля должны быть заполнены!</em>}
          </div>
      <Button >Зарегистрироваться</Button>
      <p className={style.signin}>
      У вас уже есть учетная запись? <NavLink to={'/authorize'} className={style.link}>Авторизоваться</NavLink>
      </p>
     </form>}
     {authData.errors ? <div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div> : ''}
    </div>
  );
};

export default Registration;