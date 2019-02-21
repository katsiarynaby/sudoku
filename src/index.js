module.exports = function solveSudoku(matrix) 
 { 
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        let impossibleVariables = [];
        for (let i = 0; i < matrix.length; i++) {
              impossibleVariables.push(matrix[row][i])
              impossibleVariables.push(matrix[i][col]);     
        }
        let rowSq = Math.trunc(row/3)*3;
        let colSq = Math.trunc(col/3)*3;
      
        for (let i = rowSq; i < rowSq+ 3; i++) {
          for (let j = colSq; j < colSq+3; j++) {
           if (matrix[i][j]) {
             impossibleVariables.push(matrix[i][j]);
          }
         }
        
      }
      //search possible variables for cell
        let variables = [1,2,3,4,5,6,7,8,9];
        const possibleVariables = variables.filter(number => impossibleVariables.indexOf(number) < 0 );
        

        let solve = []; // def. false
        for (let possible = 0; possible < possibleVariables.length; possible++) {
           matrix[row][col] = possibleVariables[possible];  
           //refresh matrix
           solve = solveSudoku(matrix);
          //if solve true => return solve matrix
           if (solve) return solve;
        }
        //if matrix have zero return false
        matrix[row][col] = 0;
        return false;
      } 
    }
  }
  return matrix;
}
  