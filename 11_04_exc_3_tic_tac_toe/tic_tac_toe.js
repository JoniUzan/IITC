//  create a board
let board = [];
let boardSize = parseInt(prompt("Enter the size of the board"));
let space_left = []; // space left on the board

let name1 = "";
let name2 = "";
let win_chart = [
  [name1, 0],
  [name2, 0],
  ["tie", 0],
];

function create_space_left() {
  for (let i = 1; i < boardSize * boardSize + 1; i++) {
    space_left.push(i);
  }
}
// console.log(space_left);

let place_on_board = 1;

function create_board() {
  for (let row = 0; row < boardSize; row++) {
    board.push([]);
    for (let col = 0; col < boardSize; col++) {
      board[row].push(`|${place_on_board}|`);

      place_on_board++;
    }
  }
  place_on_board = 1;
  return board;
}

// win by row check
function winByRow(index_row) {
  let row_holder = board[index_row][0];
  for (col = 0; col < boardSize; col++) {
    if (row_holder != board[index_row][col]) {
      return false;
    }
  }
  return true;
}

// win by column check
function winByColumn(index_col) {
  let col_holder = board[0][index_col];
  for (row = 0; row < boardSize; row++) {
    if (col_holder != board[row][index_col]) {
      return false;
    }
  }
  return true;
}

//win by diagonal left to right check
function winByDiagonal_left_to_r() {
  let di_left_to_r_holder = board[0][0];
  for (let diagonal = 0; diagonal < boardSize; diagonal++) {
    if (di_left_to_r_holder != board[diagonal][diagonal]) return false;
  }
  return true;
}

//win by diagonal right to left check

function winByDiagonal_right_to_l() {
  let diagonal_row = 0;
  let di_righ_to_l_holder = board[diagonal_row][boardSize - 1];
  for (let diagonal = boardSize - 1; diagonal >= 0; diagonal--) {
    if (di_righ_to_l_holder != board[diagonal_row][diagonal]) {
      return false;
    }
    diagonal_row++;
  }
  return true;
}

//win total check
function is_win() {
  for (row = 0; row < boardSize; row++) {
    if (winByRow(row)) {
      return true;
    }
  }
  for (col = 0; col < boardSize; col++) {
    if (winByColumn(col)) {
      return true;
    }
  }

  if (winByDiagonal_left_to_r()) {
    return true;
  }
  if (winByDiagonal_right_to_l()) {
    return true;
  }
  return false;
}
// create users
function users_name() {
  name1 = prompt("player 1 Enter your name");
  name2 = prompt("player 2 Enter your name");
  win_chart = [
    [name1, 0],
    [name2, 0],
    ["tie", 0],
  ];
  return `${name1} your icon is X
    ${name2} your icon is O`;
}

function player_1_turn() {
  
  // console.log(space_left);
  let place_on_board = parseInt(
    prompt("player 1 Enter the number you want to place on the board")
  );
  in_arry = false;
  while (!in_arry) {
    for (in_place = 0; in_place < boardSize * boardSize; in_place++) {
      if (place_on_board == space_left[in_place]) {
        in_arry = true;
      }
    }
    if (in_arry) {
      break;
    }
    console.log("your number is not on the board try again");
    place_on_board = parseInt(
      prompt("player 1 Enter the number you want to place on the board")
    );
  }

  for (i_space = 0; i_space < space_left.length; i_space++) {
    if (place_on_board == space_left[i_space]) {
      space_left.splice(i_space, 1);
      console.log(space_left);
    }
  }
  place_on_board = `|${place_on_board}|`;
  for (row = 0; row < boardSize; row++) {
    for (col = 0; col < boardSize; col++) {
      if (place_on_board == board[row][col]) {
        board[row][col] = "|X|";
      }
    }
  }
  return board;
}

function player_2_turn() {
  
  // console.log(space_left);
  let place_on_board = parseInt(
    prompt("pleyr 2 Enter the number you want to place on the board")
  );
  in_arry = false;
  while (!in_arry) {
    for (in_place = 0; in_place < boardSize * boardSize; in_place++) {
      if (place_on_board == space_left[in_place]) {
        in_arry = true;
      }
    }
    if (in_arry) {
      break;
    }
    console.log("your number is not on the board try again");
    place_on_board = parseInt(
      prompt("player 2 Enter the number you want to place on the board")
    );
  }

  for (i_space = 0; i_space < space_left.length; i_space++) {
    if (place_on_board == space_left[i_space]) {
      space_left.splice(i_space, 1);
      console.log(space_left);
    }
  }
  place_on_board = `|${place_on_board}|`;
  for (row = 0; row < boardSize; row++) {
    for (col = 0; col < boardSize; col++) {
      if (place_on_board == board[row][col]) {
        board[row][col] = "|O|";
      }
    }
  }
  return board;
}
function istie() {
  let arry_length = space_left.length;
  if (arry_length == 0) {
    return true;
  }
  return false;
}

function game() {
  console.log(create_board());
  create_space_left();
  while (!is_win() && space_left != []) {
    console.log(player_1_turn());
    console.log(is_win());
    if (is_win()) {
      win_chart[0][1]++;
      return `${name1} is the winner`;
    } else if (istie()) {
      win_chart[2][1]++;
      return "its a tie";
    }

    console.log(player_2_turn());
    console.log(is_win());
    if (is_win()) {
      win_chart[1][1]++;
      return `${name2} is the winner`;
    }
    if (istie()) {
      win_chart[2][1]++;
      return "its a tie";
    }
  }
}

function sequence_game() {
  let continue_playing = true;
  console.log(users_name());
  while (continue_playing) {
    console.log(game());
    console.log(win_chart);
    let play_again = prompt("do you want to play again");
    if (play_again != "yes") {
      continue_playing = false;
      win_chart = [
        [name1, 0],
        [name2, 0],
        ["tie", 0],
      ];
      console.log("thank you for playing");
    } else {
      board = [];
      space_left = [];
      boardSize = parseInt(prompt("Enter the size of the board"));
    }
  }
}

sequence_game();
