const showAllMines = (board) => {
    const rows = board.length;
    const columns = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            const field = board[row][column];

            if (field.mined) {
                field.opened = true;
            }
        }
    }
}

const newBoard = (rows, columns, qtyMines) => {
    const board = createBoard(rows, columns);

    sortMines(board, qtyMines);

    setNumbers(board);

    return board;
}

const setNumbers = (board) => {
    const rows = board.length;
    const columns = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (!board[row][column].mined) {
                const neighbors = [
                    [row - 1, column - 1],
                    [row - 1, column],
                    [row - 1, column + 1],
                    [row, column - 1],
                    [row, column + 1],
                    [row + 1, column - 1],
                    [row + 1, column],
                    [row + 1, column + 1],
                ];
    
                for (let i = 0; i < neighbors.length; i++) {
                    const n = neighbors[i];
                    
                    const isNeighborValid = !((n[0] < 0 || n[0] >= rows) || (n[1] < 0 || n[1] >= columns))
    
                    if (isNeighborValid && board[n[0]][n[1]].mined) {
                        board[row][column].number += 1;
                    }
                }
            }
        }
    }
}

const sortMines = (board, qty) => {
    const maxPercentMines = 75;

    const rows = board.length;
    const columns = board[0].length;

    const maxMines = rows * columns * maxPercentMines / 100;

    let row = 0;
    let column = 0;

    let i = 0;

    if (qty > maxMines) {
        qty = Math.floor(maxMines);
    }

    while (i < qty) {
        row = Math.floor(Math.random() * rows);
        column = Math.floor(Math.random() * columns);

        if (!board[row][column].mined) {
            board[row][column].mined = true;
            i += 1;
        }
    }
}

const createBoard = (rows, columns) => {
    const board = [];

    for (let row = 0; row < rows; row++) {
        const r = [];

        for (let column = 0; column < columns; column++) {
            const c = {
                number: 0,
                mined: false,
                opened: false,
                flagged: false,
                exploded: false,
            };

            r.push(c);
        }

        board.push(r);
    }

    return board;
}

export {
    newBoard,
    showAllMines,
}
