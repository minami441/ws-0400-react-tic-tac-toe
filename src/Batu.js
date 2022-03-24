import styled from 'styled-components';
import React from 'react';

const Myturn = styled.div`
  padding: 8px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: ${props => props.border};
`;

const Batu = (props) => {
    const batu = props.value ? '0px':'3px solid black';
    
     return(
       <Myturn border = {batu}>×</Myturn>
     )
}

export default Batu;