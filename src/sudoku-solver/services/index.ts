export function arrayToSudokuArray(normalArray: number[]) {
  let tempArray: number[] = [];

  const sudokuArray = normalArray
    .map((arr, index) => {
      if ((index + 1) % 9 === 0) {
        tempArray.push(arr);
        const returnArray = tempArray;
        tempArray = [];
        return returnArray;
      } else {
        tempArray.push(arr);
      }
    })
    .filter((val) => val);

  return sudokuArray as number[][];
}

export function sudokuArrayToArray(sudokuArray: number[][]) {
  let normalArray: number[] = [];

  sudokuArray.forEach((value1) => {
    value1.forEach((value2) => normalArray.push(value2));
  });

  return normalArray;
}

/*
 Cek matriks dengan nilai 0/kosong
 yang dapat diisi angka
*/
function isEmptyCell(sudoku: number[][]) {
  for (let x = 0; x < sudoku.length; x++) {
    for (let y = 0; y < sudoku[x].length; y++) {
      if (sudoku[x][y] === 0) {
        // Jika kosong, kembalikan nilai matriksnya
        let position = [x, y];
        return position;
      }
    }
  }
}

/*
  Cek pada baris apakah ada angka yang sama
*/
function checkRow(sudoku: number[][], row: number, search: number) {
  for (let x = row; x < row + 1; x++) {
    for (let y = 0; y < sudoku[x].length; y++) {
      if (search === sudoku[x][y]) {
        // jika ada yang sama, kembalikan nilai false
        return false;
      }
    }
  }
}

/*
  Cek pada kolom apakah ada angka yang sama
*/
function checkColumn(sudoku: number[][], col: number, search: number) {
  for (let x = 0; x < 9; x++) {
    for (let y = col; y < col + 1; y++) {
      if (search === sudoku[x][y]) {
        // jika ada yang sama, kembalikan nilai false
        return false;
      }
    }
  }
}

/*
  Cek pada sub-grid apakah ada angka yang sama
*/
function checkGrid(sudoku: number[][], position: number[], search: number) {
  let [x, y] = position;

  let xPosition = Math.floor(x / 3);
  let yPosition = Math.floor(y / 3);

  for (let i = xPosition * 3; i < xPosition * 3 + 3; i++) {
    for (let j = yPosition * 3; j < yPosition * 3 + 3; j++) {
      if (sudoku[i][j] === search) {
        // jika ada yang sama, kembalikan nilai false
        return false;
      }
    }
  }
}

/*
  Validasi dari rule yang sudah dibuat.
  Akan mengembalikan nilai false jika salah satu terpenuhi.
  Mengembalikan nilai true jika semua tidak terpenuhi/valid
*/
function isValid(sudoku: number[][], position: number[], search: number) {
  let [x, y] = position;

  if (checkRow(sudoku, x, search) === false) {
    return false;
  }

  if (checkColumn(sudoku, y, search) === false) {
    return false;
  }

  if (checkGrid(sudoku, position, search) === false) {
    return false;
  }

  return true;
}

/*
  Fungsi untuk pemecahan masalah dan bekerja secara rekursif
*/
export function sudokuSolver(sudoku: number[][]) {
  // cek terlebih dahulu matriks yang kosong

  let emptyCell = isEmptyCell(sudoku);
  let x, y;

  if (!emptyCell) {
    return true;
  } else {
    [x, y] = emptyCell;
  }

  // Perulangan 1 - 9 untuk mengecek kemungkinan angka
  for (let number = 1; number < 10; number++) {
    // Pengecekan aturan
    if (isValid(sudoku, [x, y], number)) {
      // jika valid, kembalikan angka yang valid pada matriks
      sudoku[x][y] = number;

      // lakukan rekursif
      if (sudokuSolver(sudoku)) {
        return true;
      }

      // jika tidak valid, kembalikan angka 0 pada matriks

      sudoku[x][y] = 0;
    }
  }

  // lalu lakukan backtracking
  return false;
}
