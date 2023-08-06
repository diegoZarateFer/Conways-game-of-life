import React, { useState } from "react";

const ColorContext = React.createContext({
  colors: [],
  changeBackgroundColor: () => {},
  backgroundColor: "",
  changeGridLinesColor: () => {},
  gridLinesColor: "",
  cellsColor: "",
  changeCellsColor: () => {},
});

export default ColorContext;

export const ColorContextProvider = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(4);
  const [gridLinesColor, setGridLinesColor] = useState(3);
  const [cellsColor,setCellsColor] = useState(0);

  const changeBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  const changeGridLinesColor = (newColor) => {
    setGridLinesColor(newColor);
  };

  const changeCellsColor = (newColor) => {
    setCellsColor(newColor);
  };

  return (
    <ColorContext.Provider
      value={{
        colors: ["#ffffff", "#ffe680fe", "#f6d5f7", "#a7d8db", "#050505"],
        backgroundColor: backgroundColor,
        changeBackgroundColor: changeBackgroundColor,
        gridLinesColor: gridLinesColor,
        changeGridLinesColor: changeGridLinesColor,
        cellsColor: cellsColor,
        changeCellsColor: changeCellsColor,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};
