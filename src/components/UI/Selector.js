import classes from "./Selector.module.css";

const Selector = (props) => {

    const changeValueHandler = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <select className={classes.selector} onChange={changeValueHandler}>
            {props.children}
        </select>
    )
};

export default Selector;