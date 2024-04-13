function row_debug() {
    for (col = 0; col < boardSize; col++) {
      board[0][col] = "|_____X_____|";
    }
    return board;
  }
  
  function col_debug(number) {
    for (row = 0; row < boardSize; row++) {
      board[row][number] = "|_____X_____|";
    }
    return board;
  }
  
  function debug_di_l_r() {
    for (let diagonal = 0; diagonal < boardSize; diagonal++) {
      board[diagonal][diagonal] = "|_____X_____|";
    }
    return board;
  }
  
  function debug_di_r_l() {
    diagonal_row = 0;
    for (let diagonal = boardSize - 1; diagonal >= 0; diagonal--) {
      board[diagonal_row][diagonal] = "|_____X_____|";
      diagonal_row++;
    }
    return board;
  }