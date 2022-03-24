import styled from 'styled-components';
import React from 'react';
import CalculateWinner from './CalculateWinner';
import Status from './Status';
import Maru from './Maru';
import Batu from './Batu';


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

const App = () => {

  const [state,setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  function handleClick(i){
    const squares = state.squares.slice();

    if (CalculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? '×' : '○';

    setState({
      squares: squares,
      xIsNext: !state.xIsNext
    })

  }

  function restart(){

    setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    })

  }
  


  // Use Title and Wrapper like any other React component – except they're styled!
  return(
  
      <Container>
        <Main>
          <Header>
            <Title> Tic Tac Toe</Title>
            <Flex>
              <Maru value = {state.xIsNext}/>
              <Batu value = {state.xIsNext}/>
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
                    return <Cell value = {value} onClick = {onClick}>{value}</Cell>
                  })
                }
              </Row>
            })
          }
          </Board>

          <Footer>
            <Status value = {state.squares}/>
            <Restart onClick = {() => restart()}>
              Restart
            </Restart>
          </Footer>

        </Main>
      </Container>

  );

};

export default App;