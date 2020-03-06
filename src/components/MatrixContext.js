import React from 'react'
import { Matrix} from './matrix.js';



const Context = React.createContext(new Matrix(1,1))

export class MatrixStore extends React.Component {

  state = { matrix : new Matrix(1,1)};

  onMatrixSizeChange = (row, column) => {
    this.setState({matrix: new Matrix(row, column)});
  };

  onMatrixElementChange = (row, column, value) => {
    let matrixStateCopy = {...this.state};
    matrixStateCopy.matrix.fillNumber(row, column, parseInt(value));
    this.setState(matrixStateCopy);
  };

render(){
  return (
    <Context.Provider value={{...this.state, onMatrixSizeChange: this.onMatrixSizeChange , onMatrixElementChange: this.onMatrixElementChange}}>
      {this.props.children}
      </Context.Provider>
  )
}
}

export default Context;
