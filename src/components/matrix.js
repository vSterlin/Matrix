export class Matrix extends Array{
  constructor(rows, columns) {
    super()
    for (let i = 0; i < rows; i++) {
      this.push([]);
      for (let j = 0; j < columns; j++) {
        this[i][j] = 0;
      }
    }
    this.rows = rows;
    this.columns = columns;
  }
  showMatrix() {
    console.log(this);
  }
  fillNumber(rowIndex, columnIndex, value) {
    this[rowIndex][columnIndex] = value;
  }
}

