export class Matrix extends Array{
  constructor(rows, columns, ...ite) {
    super(...ite)
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

// let matrix = new Matrix(9, 9);

// for (let i = 0; i < matrix.rows; i++) {
//   for (let j = 0; j < matrix.columns; j++) {
//     matrix.fillNumber(i, j, 1);
//   }
// }

// matrix.showMatrix();

//backup

// export class Matrix {
//   constructor(rows, columns) {
    
//     this.matrix = [];
//     for (let i = 0; i < rows; i++) {
//       this.matrix.push([]);
//       for (let j = 0; j < columns; j++) {
//         this.matrix[i][j] = 0;
//       }
//     }
//     this.rows = rows;
//     this.columns = columns;
//   }
//   showMatrix() {
//     console.log(this.matrix);
//   }
//   fillNumber(rowIndex, columnIndex, value) {
//     this.matrix[rowIndex][columnIndex] = value;
//   }
// }

// // let matrix = new Matrix(9, 9);

// // for (let i = 0; i < matrix.rows; i++) {
// //   for (let j = 0; j < matrix.columns; j++) {
// //     matrix.fillNumber(i, j, 1);
// //   }
// // }

// // matrix.showMatrix();
