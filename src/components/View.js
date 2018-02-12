import React from 'react';
import styled from 'styled-components';
import Shop from './Shop';
import Boat from './Boat';

const Wrapper = styled.section`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const View = ({ viewBoat, buyMap, gold }) => (
    <Wrapper>
        { viewBoat ? <Boat /> : <Shop gold={gold} buyMap={buyMap} /> }

    </Wrapper>
);

export default View;