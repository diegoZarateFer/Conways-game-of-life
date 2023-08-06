export function createMatrix(n, m) {
  const newMatrix = [];
  for (let i = 0; i < n; i++) {
    newMatrix.push([]);
    for (let j = 0; j < m; j++) newMatrix[i].push(false);
  }

  return newMatrix;
}

export function getNextGridState(oldGridState) {
  const nextGridState = oldGridState.map((row) => [...row]);

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
  ];
  const n = oldGridState.length;
  const m = oldGridState[0].length;

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < m; column++) {
      let aliveNeighborsCounter = 0;
      for (const [dx, dy] of directions) {
        const neighborRow = row + dx >= n ? 0 : row + dx < 0 ? n - 1 : row + dx;
        const neighborColumn = column + dy >= m ? 0 : column + dy < 0 ? m - 1 : column + dy;
        if (oldGridState[neighborRow][neighborColumn])
          aliveNeighborsCounter += 1;
      }

      if (oldGridState[row][column]) {
        nextGridState[row][column] = (aliveNeighborsCounter === 2 || aliveNeighborsCounter === 3);
      } else {
        nextGridState[row][column] = (aliveNeighborsCounter === 3);
      }
    }
  }
  return nextGridState;
}
