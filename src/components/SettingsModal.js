import Modal from "./UI/Modal";
import ColorPicker from "./UI/ColorPicker";
import classes from "./SettingsModal.module.css";
import ColorContext from "../context/color-context";
import { useContext } from "react";
import { CSSTransition } from "react-transition-group";

const SettingsModal = (props) => {
  const colorCxt = useContext(ColorContext);

  const backgroundColorChangeHandler = (selectedIndex) => {
    colorCxt.changeBackgroundColor(selectedIndex);
  };

  const girdLinesChangeHandler = (selectedIndex) => {
    colorCxt.changeGridLinesColor(selectedIndex);
  };

  const cellColorChangeHandler = (selectedIndex) => {
    colorCxt.changeCellsColor(selectedIndex);
  };

  return (
    <Modal title="Change colors" show={props.show} onDismiss={props.onDismiss}>
      <fieldset className={classes.fieldset}>
        <legend>Background color</legend>
        <ColorPicker
          colors={colorCxt.colors}
          onSelectedColorChange={backgroundColorChangeHandler}
          selectedColorIndex={colorCxt.backgroundColor}
        />
      </fieldset>

      <fieldset className={classes.fieldset}>
        <legend>Color of grid</legend>
        <ColorPicker
          colors={colorCxt.colors}
          onSelectedColorChange={girdLinesChangeHandler}
          selectedColorIndex={colorCxt.gridLinesColor}
        />
      </fieldset>

      <fieldset className={classes.fieldset}>
        <legend>Color of cells</legend>
        <ColorPicker
          colors={colorCxt.colors}
          onSelectedColorChange={cellColorChangeHandler}
          selectedColorIndex={colorCxt.cellsColor}
        />
      </fieldset>
    </Modal>
  );
};

export default SettingsModal;
