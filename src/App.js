import styled from 'styled-components';
import React from 'react';
import Status from './Components/Status';
//import Myturn from './Components/Turn';


const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.div`
`;

const Header = styled.div`
  padding: 16px;
`;

const Footer = styled.div`
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

const Board = styled.div`
  border: 1px solid black;
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


const Turn = styled.div`
  padding: 8px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: ${props => props.active ? '3px solid black': ''};
`;

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

  if(squares.includes(null) === false){
    return 'draw';
  }

    return null;
}


const App = () => {

  const [state,setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null
  });

  function handleClick(i){
    const squares = state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      console.log(state)
      return;
    }
  
    squares[i] = state.xIsNext ? '○' : '×';

    const winner = calculateWinner(squares)

    setState({
      squares: squares,
      xIsNext: !state.xIsNext,
      winner: winner
    })

  }
  
  
  function restart(){
  
    setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null
    })
  
  }

  // Use Title and Wrapper like any other React component – except they're styled!
  return(
  
      <Container>
        <Main>
          <Header>
            <Title> Tic Tac Toe</Title>
            <Flex>
              <Turn active = {state.xIsNext}>○</Turn>
              <Turn active = {!state.xIsNext}>×</Turn>
            </Flex>
          </Header>

          <Board>
          {
            new Array(3).fill("").map((_, i) => {
              return <Row>
                {
                  new Array(3).fill("").map((_, j) => {
                    const index = (i*3) + j
                    const value = state.squares[index]
                    const onClick = () => handleClick(index)
                    return <Cell onClick = {onClick}>{value}</Cell>
                  })
                }
              </Row>
            })
          }
          </Board>

          <Footer>
            <Status value = {state.winner}/>
            <Restart onClick = {() => restart()}>
              Restart
            </Restart>
          </Footer>

        </Main>
      </Container>

  );

};

export default App;