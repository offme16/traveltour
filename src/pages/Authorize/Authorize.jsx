import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/UI/MyButton/Button";
import style from "./Authorize.module.css"
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../store/asyncThunk/loginUser";
import { authActions } from "../../store/authenticationSlice";
import { Loader } from "../../components/Loader/Loader";
import { toast } from 'react-hot-toast';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.authentication);
  const error = useSelector((state) => state.authentication.error);
  
  const handleField = useCallback((value, fieldName) => {
    dispatch(authActions.setField({ value, fieldName }));
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = useCallback(
    async () => {
      try {
        const result = await dispatch(loginUser(authData));
        if (result.meta.requestStatus === "rejected") {
          toast.error(error);

        } else {
          navigate("/");
        }

      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    },
    [dispatch, navigate, authData, error]
  );

  return (
    <div className={style.container}>
      {authData.isLoading ?  <Loader />:
        <form
        className={style.form}
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className={style.title}>Войти</p>
        <input
          {...register("email", { required: true })}
          placeholder="e-mail"
          type="text"
          className={style.input}
          onChange={(e) => handleField(e.target.value, "email")}
        />
        <input
          {...register("password", {
            required: true,
          })}
          placeholder="Пароль"
          type="password"
          className={style.input}
          onChange={(e) => handleField(e.target.value, "password")}
        />
        <div className={style.error}>
          {errors?.password && <em>Заполните поля!</em>}
        </div>
        <Button>Войти</Button>
        <div className={style.form_section}>
          <p className={style.signin}>Вы не зарегистрированны? <NavLink to={'/registration'} className={style.link}>Авторизоватся</NavLink></p>
          </div>
      </form> 
      
      }
    </div>
  );
};

export default Auth;