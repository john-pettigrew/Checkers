var Piece = function(_player){
  this.isKing = false;
  this.inPlay = true;
  this.player = _player;

};

var Board = function(){

  //Players 1 and 2
  this.turn = 1;
  // Initialize pieces
  this.grid = [];

  this.numRows = 8;
  this.numColumns = 8;

  this.init = function(){

    /*
      0 1 0 1 0 1 0 1
      1 0 1 0 1 0 1 0
      0 1 0 1 0 1 0 1
      0 0 0 0 0 0 0 0
      0 0 0 0 0 0 0 0
      1 0 1 0 1 0 1 0
      0 1 0 1 0 1 0 1
      1 0 1 0 1 0 1 0

    */



    for(var row = 0; row < this.numRows; row++){
      this.grid.push([]);
      for(var column = 0; column < this.numColumns; column++){

        if(this.numRows / 2 === row || this.numRows / 2 - 1 === row){
          this.grid[row][column] = null;
        }
        else{
          if(row % 2 === 0){
            if(column % 2 === 1){
              this.grid[row][column] = new Piece();
            }
            else{
              this.grid[row][column] = null;
            }
          }
          else{
            if(column % 2 === 0){
              this.grid[row][column] = new Piece();
            }
            else{
              this.grid[row][column] = null;
            }
          }
        }
      }
    }

  };

  this.movePiece = function(pieceRow, pieceColumn, newRow, newColumn){

    var validMove = false;

    // Check if new places are on the board
    if(newRow < this.numRows && newColumn < this.numColumns){

      console.log('Valid places');
      // Check if piece is present
      if(this.grid[pieceRow][pieceColumn] !== null){

        console.log('Valid piece');
        if(this.grid[newRow][newColumn] === null){

          console.log('Spot is empty');
          var currentPiece = this.grid[pieceRow][pieceColumn];
          if(newColumn === pieceColumn + 1 || newColumn === pieceColumn - 1){

            console.log('Valid column');
            if((currentPiece.isKing && (newRow === pieceRow + 1 || newRow === pieceRow - 1)) || (newRow === pieceRow - 1) ){

              console.log('valid row');
              console.log('MOVE!');
              validMove = true;
              this.grid[newRow][newColumn] = this.grid[pieceRow][pieceColumn];
              this.grid[pieceRow][pieceColumn] = null;
            }
          }
        }
      }
    }
    if(validMove){
      this.changePlayer();
    }
    return validMove;
  };

  this.printBoard = function(){
    for(var row = 0; row < this.numRows; row++){
      var rowString = '';
      for(var column = 0; column < this.numColumns; column++){
        if(this.grid[row][column] !== null){
          rowString += '1 ';
        }
        else{
          rowString += '0 ';
        }
      }
      console.log(rowString+'\n');
    }
  };

  this.changePlayer = function(){
    this.turn = this.turn === 1 ? 2 : 1;
  };

  this.init();
};

var board = new Board();
console.log(board);
