import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'


const App = () => {


  const Section = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100vh;
`;

  const Section2 = styled.div`
  `;

  const Section3 = styled.div`
    padding: 16px;
  `;

  const Section4 = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center
  `;
  

  const Title = styled.h1`
    text-align: center;
    font-size: 1.2rem;
  `;

  const Myturn = styled.div`
    padding: 8px 16px;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: ${props => props.border};
  `;


  const Board = styled.div`
    border: 1px solid black;
  `;

  const Judge = styled.div`
    text-align: center;
    padding: 8px;
  `;

const Restart = styled.a`
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
    display: inline-block;
    text-align: center;
    border: 3px solid black;
    border-radius: 6px;
    font-weight: bold;
    padding: 4px 16px;
  `;

  const Flex = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  `;

  const Row = styled.div`
  :nth-child(3n){
    border-bottom: 0px;
  }
  display: flex;
  border-bottom: 1px solid black;
`;
  

  const Cell = styled.div`
    :nth-child(3n){
      border-right: 0px;
    }
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    text-align: center;
    border-right: 1px solid black;
  `; 

  const [state,setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const [count,setCount] = React.useState(1)
  
  const Maru = () => {
   const maru = state.xIsNext ? 'Opx' : '3px solid black';
   
    return(
      <Myturn border={maru}>○</Myturn>
    )
  }

  const Batu = () => {
    const batu = state.xIsNext ? '3px solid black' :'0px';
    
     return(
       <Myturn border={batu}>×</Myturn>
     )
   }


  function handleClick(i){
    const squares = state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      squares: squares,
      xIsNext: !state.xIsNext
    })

    setCount(count+1)
  }

  const RenderSquare = (props) => {
    return(
      <Cell
      onClick = {() => handleClick(props.value)}
      >{state.squares[props.value]}
      </Cell>
    )
  }

  
 
  const Status = () => {

    const winner = calculateWinner(state.squares);

    let status;
    if (winner) {
      status =  winner + ' win';
    } else {
      status = 'processing';
      if(count==10){
        status='draw';
      }
    }

    return(
      <Judge>
        {status}
       </Judge>
       
    )
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  
  function restart(){
    setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    })
    setCount(1)
  }
  


// Use Title and Wrapper like any other React component – except they're styled!
return(
 
    <Section>
      <Section2>
        <Section3>
          <Title> Tic Tac Toe</Title>
          <Flex>
            <Maru/>
            <Batu/>
          </Flex>
        </Section3>

        <Board>
          <Row>
              <RenderSquare value="0"/>
              <RenderSquare value="1"/>
              <RenderSquare value="2"/>
          </Row>
          <Row>
              <RenderSquare value="3"/>
              <RenderSquare value="4"/>
              <RenderSquare value="5"/>
          </Row>
          <Row>
              <RenderSquare value="6"/>
              <RenderSquare value="7"/>
              <RenderSquare value="8"/>
          </Row>
        </Board>

        <Section4>
          <Status/>
          <Restart onClick = {() => restart()}>
            Restart
          </Restart>
        </Section4>

      </Section2>
    </Section>

);
};

export default App;
