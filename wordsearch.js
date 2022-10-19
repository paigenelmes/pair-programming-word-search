const wordSearch = function(letters, word) {
  if (wordSearchHorizontal(letters, word) === false) {
    const transposed = transpose(letters);
    return wordSearchHorizontal(transposed, word);
  }
};
  
const wordSearchHorizontal = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};
  
  
const transpose = function(matrix) {
  let result = [];
  
  for (const i in matrix[0]) {
    let column = [];
    for (const x in matrix) {
      column.push(matrix[x][i]);
    }
    result.push(column);
  }
  return result;
};

module.exports = wordSearch;