import { CSSTransition } from "react-transition-group";

import classes from "./Cell.module.css";
import { useContext } from "react";
import ColorContext from "../context/color-context";
import MouseContext from "../context/mouse-context";

const Cell = (props) => {
  
  const colorCtx = useContext(ColorContext);
  const mouseCtx = useContext(MouseContext);

  const mouseDownHandler = () => {
    mouseCtx.mouseButtonDownHandler();
  };

  const mouseUpHandler = () => {
    mouseCtx.mouseButtonUpHandler();
  };

  const mouseOverHandler = () => {
    if(mouseCtx.isMousePressed)
      props.onClick(props.row, props.column);
  };

  const clickHandler = () => {
    props.onClick(props.row,props.column);
  };

  return (
    <td
      className={`
        ${classes.cell}
        ${props.hideBorderLines ? null : classes["cell-border"]}
        ${(!props.gameIsRunning && props.isAlive) ? classes[`alive-slow`] : null}
        ${(props.gameIsRunning && props.isAlive) ? classes[`alive-${props.animationSpeed}`] : null}
      `}
      style={props.hideBorderLines ? {backgroundColor: `${props.isAlive ? colorCtx.colors[colorCtx.cellsColor] : 'transparent'}`} : {
        borderBottom: `1px solid ${colorCtx.colors[colorCtx.gridLinesColor]}`,
        borderRight: `1px solid ${colorCtx.colors[colorCtx.gridLinesColor]}`,
        backgroundColor: `${props.isAlive ? colorCtx.colors[colorCtx.cellsColor] : 'transparent'}`
      }}

      onClick={clickHandler}
      onMouseOver={mouseOverHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
    />
  );
};

export default Cell;
