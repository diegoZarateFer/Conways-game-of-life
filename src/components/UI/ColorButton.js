import classes from "./ColorButton.module.css";

const ButtonColor = (props) => {

    const clickHandler = () => {
        props.onClick(props.buttonIndex);
    };

    const btnStyle = {
        backgroundColor: props.color
    };

    return (
        <button onClick={clickHandler} style={btnStyle} className={`${classes["button-color"]} ${props.selected ? classes['is-selected'] : null}`}></button>
    );
};

export default ButtonColor;