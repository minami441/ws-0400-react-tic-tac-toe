import styled from 'styled-components';
import React from 'react';

const Myturn = styled.div`
  padding: 8px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: ${props => props.border};
`;

const Maru = (props) => {
    const maru = props.value ? '3px solid black':'Opx';

     return(
       <Myturn border = {maru}>○</Myturn>
     )
}

export default Maru;