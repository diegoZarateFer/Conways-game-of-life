import { useState } from "react";
import { ChromePicker } from "react-color";

const popover = {
  position: "fixed",
  zIndex: "2",
  top: '30%',
  left: '25%',
  width: '50%'
};

const cover = {
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
};

const ColorPickerButton = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const clickHandler = () => {
    setDisplayColorPicker((prevState) => !prevState);
  };

  const closeHandler = () => {
    setDisplayColorPicker(false);
  };

  return (
    <div>
      <button onClick={clickHandler}>Pick color</button>
      {displayColorPicker && <div style={popover}><div style={cover} onClick={closeHandler}/><ChromePicker /></div>}
    </div>
  );
};

export default ColorPickerButton;
