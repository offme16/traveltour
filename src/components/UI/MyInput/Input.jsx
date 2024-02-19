import style from "./Input.module.css"
export const Input = ({children, ...props}) => {
    return (
        <div class={style.inputBox}>
            <h3>{children}</h3>
            <input {...props}/>
        </div>
    )
}