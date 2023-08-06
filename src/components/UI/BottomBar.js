import classes from "./BottomBar.module.css";
import Button from "./Button";
import ColorPicker from "./ColorPicker";
import Selector from "./Selector";

const BottomBar = (props) => {

    const changeSpeedHadler = (selectedSpeed) => {
        props.onSpeedChange(selectedSpeed);
    };

    const onRunAnimationHandler = () => {
        props.onRunAnimation();
    };

    const onClearGridHandler = () => {
        props.onClearGrid();
    };

    const toggleGridLinesHandler = () => {
       props.onToggleGridLines();
    };

    const changeColorsHandler = () => {
        props.onChangeColors();
    };

    return (
        <footer>
            <Button onClick={onRunAnimationHandler}>{props.gameIsRunning ? 'Stop' : 'Run'}</Button>
            <Button onClick={onClearGridHandler} isDisabled={props.gameIsRunning}>Clear</Button>
            <Button onClick={toggleGridLinesHandler}>{props.isHiddingBorderLines ? 'Show grid' : 'Hide grid'}</Button>
            <Selector onChange={changeSpeedHadler}>
                <option value="slow">Slow</option>
                <option value="medium">Medium</option>
                <option value="fast">Fast</option>
                <option value="faster">Faster</option>
            </Selector>
            <Button onClick={changeColorsHandler} isDisabled={props.gameIsRunning}>Change colors</Button>
        </footer>
    );
};

export default BottomBar;