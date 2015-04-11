var BoardView = function(){
  var boardTable = $('#board');
  this.updateBoard = function(newBoard){
    newBoard.forEach(function(row){
      console.log('Test');
      var rowHtml = '<tr>';
      row.forEach(function(piece){
        if(piece !== null){
          if(piece.player === 0){
            rowHtml += '<td><img src=\"images/BlackTile.png\"</td>';
          }
          else if(piece.player === 1){
            rowHtml += '<td><img src=\"images/WhiteTile.png\"</td>';
          }
        }
        else{
          rowHtml += '<td></td>';
        }
      });
      rowHtml += '</tr>';
      boardTable.append(rowHtml);
    });
  };
};
