import styled from 'styled-components';
import React from 'react';

const Judge = styled.div`
    text-align: center;
    padding: 8px;
`;

  const Status = (props) => {

    const winner = props.value;

    let status;

    if (winner) {

        if(winner == 'draw'){
            status = 'draw'
        }else{
            status =  winner + ' win';
        }

    } else {
        status = 'processing';
        
    }

    return(
      <Judge>
        {status}
       </Judge>
    )
    
}


export default Status;