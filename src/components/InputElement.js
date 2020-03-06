import React, {useState, Fragment, useContext} from 'react'
import styled from 'styled-components';

import MatrixContext from './MatrixContext';


const Element = styled.input`
  width: 20px;
  height: 20px;
`;

const InputElement = (props) => {

  const matrix = useContext(MatrixContext);

  const [element, useElement] = useState(0);

  const elementChange = (e) => {
    useElement(e.target.value)
    matrix.onMatrixElementChange(props.row, props.column, e.target.value);
  }


  return (
    <Fragment>
      <Element onChange={e => elementChange(e)} type="text" value={element} /> 
    </ Fragment>
  )
}

export default InputElement
