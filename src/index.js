
// You should implement your task here.

module.exports = function towelSort (matrix) {  
  if ( !matrix ) { return [] }
  let rez = [];
  let direction = 1;
  for ( let i=0; i< matrix.length; i++ ) {
    if ( direction === 1 ) {
      for ( let j=0; j<matrix[i].length; j++ ) {
        rez.push( matrix[i][j])
      }
      direction = -1;
    }
    else {
      for ( let j=matrix[i].length-1; j>=0; j-- ) {
        rez.push( matrix[i][j])
      }
      direction = 1;
    }
  }
  return rez;
}
