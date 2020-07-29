const transpose = function(matrix) {
    let output = [];
    let numRows = matrix[0].length;
    let numColumns = matrix.length;
    for (let i = 0; i < numRows; i++) {
      let arr = [];
      for (let j = 0; j < numColumns; j++) {
        arr.push(matrix[j][i]);
      } output.push(arr);
    }
    return output;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } else {
            const verticalJoin = transpose(letters).map(ls => ls.join(''));
            for (l of verticalJoin) {
                if (l.includes(word)) {
                    return true;
                }
            }
        }
    } return false;
}

module.exports = wordSearch