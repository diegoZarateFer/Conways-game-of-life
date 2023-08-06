import classes from "./Button.module.css";

const Button = (props) => {

    const clickHandler = () => {
        props.onClick();
    };

    return (
        <button className={classes.button} onClick={clickHandler} disabled={props.isDisabled}>
            {props.children}
        </button>
    );
}

export default Button;