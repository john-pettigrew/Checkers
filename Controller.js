var Piece = function(){
  this.king = false;
  this.inPlay = true;


};

var Board = function(){

  //Players 1 and 2
  this.turn = 1;
  // Initialize pieces
  this.grid = [];
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
    var numColumns = 8;
    var numRows = 8;


    for(var column = 0; column < numColumns; column++){
      this.grid.push([]);





        for(var row = 0; row < numRows; row++){

          if(numColumns / 2 === column || numColumns / 2 - 1 === column){
            this.grid[column][row] = "0";
          }
          else{
            console.log(numRows / 2);
            console.log(row);
            console.log('-----------------');
            if(column % 2 === 0){
              if(row % 2 === 1){
                this.grid[column][row] = "1";
              }
              else{
                this.grid[column][row] = "0";
              }
            }
            else{
              if(row % 2 === 0){
                this.grid[column][row] = "1";
              }
              else{
                this.grid[column][row] = "0";
              }
            }
          }
      }




    }

    console.log(this.grid);


  };


};

var board = new Board().init();
