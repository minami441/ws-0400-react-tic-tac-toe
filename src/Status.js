import styled from 'styled-components';
import React from 'react';
import CalculateWinner from './CalculateWinner';

const Judge = styled.div`
    text-align: center;
    padding: 8px;
`;

  const Status = (props) => {

    const winner = CalculateWinner(props.value);

    let status;
    if (winner) {
        status =  winner + ' win';
        
    } else {
        status = 'processing';
        
        if(props.value.includes(null)===false){
            status = 'draw';
        }

    }

    return(
      <Judge>
        {status}
       </Judge>
    )
    
}


export default Status;