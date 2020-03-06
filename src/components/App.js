import React, { useState } from "react";

import styled from "styled-components";

import { Matrix } from "./matrix.js";

const Table = styled.table`
  margin: 0 auto;
  /* margin-top: 20vh; */
  border: 1px solid black;
  height: 40vh;
  width: 40vh;
  text-align: center;
  flex: 8;
`;

const TableElement = styled.td`
  border: 1px solid black;
`;

const WholeApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Input = styled.div`
  margin: 0 auto;
  margin-bottom: 0;
  flex: 2.5;
  display: flex;
  align-items: center;

  /* margin-top: 5vh; */
`;
const MyForm = styled.form`
  display: flex;
  > * {
    margin: 0 5px;
  }
  > button {
    align-self: center;
  }
`;



const App = () => {
  
  const [rows, useRows] = useState(1);
  const [columns, useColumns] = useState(1);
  const [matrix, useMatrix] = useState(new Matrix(rows, columns))
  
  // const [matrix, useMatrix] = useState(undefined);
  const formHandler = (e) => {
    e.preventDefault();
    useMatrix(new Matrix(rows, columns));
  }
  
  const rowsChange = (e) => {
    useRows(e.target.value);
  }
  
  const columnsChange = (e) => {
    useColumns(e.target.value);
  }
  
  return (
    
    (
      <WholeApp>
        <h1>Matrix Builder</h1>
        <Input>
        <MyForm action="">
        <label htmlFor="rows">Rows: </label>
      <input type="text" value={rows} onChange={(e) => rowsChange(e)} id="rows"/>
      <label htmlFor="columns">Columns: </label>
      <input type="text" value={columns} onChange={(e) => columnsChange(e)} id="columns"/>
      <button onClick={(e) => formHandler(e)} type="submit">Submit</button>
      </MyForm>
      </Input>
    <Table>
      <tbody>
        {matrix.map(row => {
          return (
            <tr>
              {row.map(element => {
                return <TableElement>{element}</TableElement>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
    </WholeApp>
    )
  );
};

export default App;
