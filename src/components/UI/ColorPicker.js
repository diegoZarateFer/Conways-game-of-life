import ColorButton from "./ColorButton";

const ColorPicker = (props) => {

    const changePickedColorHandler = (colorIndex) => {
        props.onSelectedColorChange(colorIndex);
    };

    const selectedColor = props.selectedColorIndex ? props.selectedColorIndex : 0;
    return (
        <>
            {
                props.colors.map((color,colorIdx) => (
                    <ColorButton key={colorIdx} buttonIndex={colorIdx} onClick={changePickedColorHandler} color={color} selected={colorIdx === selectedColor}/>
                ))
            }
        </>
    );
};

export default ColorPicker;