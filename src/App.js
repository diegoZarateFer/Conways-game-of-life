import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import BottomBar from "./components/UI/BottomBar";
import { createMatrix, getNextGridState } from "./util/matrix-functions";
import SettingsModal from "./components/SettingsModal";
import ColorContext from "./context/color-context";

const INITAL_NUMBER_OF_ROWS = 30;
const INITAL_NUMBER_OF_COLUMNS = 75;
const SPEED = {
  'faster': 50,
  'fast': 100,
  'medium': 200,
  'slow': 300
};

function App() {
  const [grid, setGrid] = useState([
    ...createMatrix(INITAL_NUMBER_OF_ROWS, INITAL_NUMBER_OF_COLUMNS),
  ]);

  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [hideBorderLines, setHideBorderLines] = useState(false);
  const [animationSpeed,setAnimationSpeed] = useState('slow');
  const [showSettingsModal,setShowSettingsModal] = useState(false);

  const toggleCellHandler = (rowIndex, columnIndex) => {
    if (!gameIsRunning) {
      setGrid((prevGridState) => {
        prevGridState[rowIndex][columnIndex] =
          !prevGridState[rowIndex][columnIndex];
        return prevGridState.map((row) => [...row]);
      });
    }
  };

  const runAnimationHandler = () => {
    setGameIsRunning((prevState) => !prevState);
  };

  const clearGridHandler = () => {
    setGrid(createMatrix(INITAL_NUMBER_OF_ROWS, INITAL_NUMBER_OF_COLUMNS));
  };

  const toggleGridLinesHandler = () => {
    setHideBorderLines((prevState) => !prevState);
  };

  const speedChaneHandler = (selectedSpeed) => {
    setAnimationSpeed(selectedSpeed);
  };

  const showSettingsModalHandler = () => {
    setShowSettingsModal(true);
  };

  const hideSettingsModal = () => {
    setShowSettingsModal(false);
  };

  useEffect(() => {
    if (!gameIsRunning) return () => {};
    let animationInterval = SPEED[animationSpeed];
    const timer = setInterval(() => {
      setGrid(getNextGridState(grid));
    },animationInterval);

    return () => {
      clearInterval(timer);
    };
  }, [gameIsRunning, grid, animationSpeed]);

  return (
    <>
      <SettingsModal onDismiss={hideSettingsModal} show={showSettingsModal}/>
      <Grid
        grid={grid}
        onClickedCell={toggleCellHandler}
        isHiddingBorderLines={hideBorderLines}
        gameIsRunning={gameIsRunning}
        animationSpeed={animationSpeed}
      />
      <BottomBar
        onRunAnimation={runAnimationHandler}
        gameIsRunning={gameIsRunning}
        onClearGrid={clearGridHandler}
        onToggleGridLines={toggleGridLinesHandler}
        isHiddingBorderLines={hideBorderLines}
        onSpeedChange={speedChaneHandler}
        onChangeColors={showSettingsModalHandler}
      />
    </>
  );
}

export default App;
