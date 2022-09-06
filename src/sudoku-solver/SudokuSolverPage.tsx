import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  arrayToSudokuArray,
  sudokuArrayToArray,
  sudokuSolver,
} from './services';
import SudokuBoxItem from './components/SudokuBoxItem';

export default function SudokuSolverPage() {
  const INIT_ARRAY = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
  ];
  const [sudokuArray, setSudokuArray] = React.useState(INIT_ARRAY);

  const handleChangeArrayValue = (value: string, index: number) => {
    const valueToNumber = parseInt(value);
    const newArray = [...sudokuArray];
    if (valueToNumber !== NaN && valueToNumber < 10 && valueToNumber >= 0) {
      newArray[index] = valueToNumber;
      setSudokuArray(newArray);
    }
  };

  const handleResetSudoku = () => {
    setSudokuArray(INIT_ARRAY);
  };

  const handleSolve = () => {
    const sudoku = arrayToSudokuArray(sudokuArray);
    sudokuSolver(sudoku);
    setSudokuArray(sudokuArrayToArray(sudoku));
  };

  return (
    <Box className="w-full h-full flex flex-col justify-center items-center">
      <Typography variant="h2" className="font-bold">
        Sudoku Solver!
      </Typography>
      <Typography className="mb-4">Input your problem</Typography>
      <Box className="grid gap-1">
        <Box className="col-span-9" />
        {sudokuArray.map((sudokuValue: number, index: number) => {
          if ((index + 1) % 3 === 0 && (index + 1) % 9 !== 0) {
            if (index + 1 === 21 || index + 1 === 48) {
              return (
                <SudokuBoxItem
                  key={index}
                  isColumnDivider={true}
                  isRowDivider={true}
                  index={index}
                  onChange={(e) =>
                    handleChangeArrayValue(e.target.value, index)
                  }
                  value={sudokuValue}
                />
              );
            } else {
              return (
                <SudokuBoxItem
                  key={index}
                  isColumnDivider={true}
                  index={index}
                  onChange={(e) =>
                    handleChangeArrayValue(e.target.value, index)
                  }
                  value={sudokuValue}
                />
              );
            }
          } else {
            return (
              <SudokuBoxItem
                key={index}
                index={index}
                onChange={(e) => handleChangeArrayValue(e.target.value, index)}
                value={sudokuValue}
              />
            );
          }
        })}
      </Box>
      <Box className="mt-5">
        <Button
          size="small"
          className="mr-3"
          variant="contained"
          color="success"
          onClick={() => handleSolve()}
        >
          Solve it!
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => handleResetSudoku()}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}
