import { useContext } from "react";

import ColorContext, { ColorContextProvider } from "../context/color-context";
import Cell from "./Cell";

import classes from "./Grid.module.css";

const Grid = (props) => {

  const colorCtx = useContext(ColorContext);

  const clickedCellHandler = (row, column) => {
    props.onClickedCell(row, column);
  };

  return (
      <table style={{backgroundColor: colorCtx.colors[colorCtx.backgroundColor]}}>
        <tbody
          className={`${classes.grid} ${
            props.isHiddingBorderLines ? classes["grid-border"] : null
          }`}
          style={props.isHiddingBorderLines ? {border: `1px solid ${colorCtx.colors[colorCtx.gridLinesColor]}`} : {
            borderTop: `1px solid ${colorCtx.colors[colorCtx.gridLinesColor]}`,
            borderLeft: `1px solid ${colorCtx.colors[colorCtx.gridLinesColor]}`
          }}
        >
          {props.grid.map((gridRow, gridRowIdx) => (
            <tr key={gridRowIdx}>
              {gridRow.map((gridCell, gridColIdx) => (
                <Cell
                  key={`${gridRowIdx}-${gridColIdx}`}
                  animationSpeed={props.animationSpeed}
                  gameIsRunning={props.gameIsRunning}
                  hideBorderLines={props.isHiddingBorderLines}
                  isAlive={gridCell}
                  row={gridRowIdx}
                  column={gridColIdx}
                  onClick={clickedCellHandler}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Grid;
