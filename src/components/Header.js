import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    justify-content: center;
    padding: 5px;
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
  display: flex;
  justify-content: space-evenly;
`;

const Header = ({ gold, boat, maps }) => (
    <Wrapper>
        <Title>
            Gold: {gold}
        </Title>
        <Title>
            Boat: {boat.level}
        </Title>
        <Title>
            Maps: {maps}
        </Title>
    </Wrapper>
);

export default Header;